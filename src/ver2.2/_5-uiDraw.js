async function trUiDraw() {
  if (trMode === TR_MODE.AUTO) {
    if (frameCount % TR_AUTO_MODE_INTERVAL === 0) {
      trModeLifeGameGridHistory.push(trModeLifeGameGrid)

      if (!trModeLifeGameGrid.includes('1')) {
        trModeLifeGameGrid = Array.from({ length: 64 }, () => floor(random(2))).join('')
      }

      // 自動モードはlife gameのルールを適用する
      const dataGrid = trModeLifeGameGrid.split('').map((item) => item === '1')
      for (let i = 0; i < trDataGrid.length; i++) {
        trDataGrid[i].isPressed = dataGrid[i]
      }

      // 係数をランダムに変更
      trFunctionFilterParamsRandomize()
      trFunctionShapeParamsRandomize()

      trUpdateUrl()
      trCreateQrCode()
      trChangePatternFrame = frameCount
      trSetDataParams()
      trSineCountReset()
      trUrlToData()

      // TODO: autoモードの時に、機能ボタンが押せない時がある
      //  これが悪さしている？
      await trProgrammerModeSetup(
        async (i) => {
          trUtilityDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
          trSetDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
          await trSetDataParams()
        },
        () => {
          trIsNoDevice = true
        },
        trSetDataParams,
        trDataGrid,
        trMidiAccess,
        () => {
          if (trMode !== TR_MODE.AUTO) {
            trSineCountReset()
          }
        },
      )

      // trModeLifeGameGrid を TR_MAPPING_GRID の並び順に変換
      const grid = []
      for (let i = 0; i < 8; i++) {
        grid.push(Array(8).fill(0))
      }

      for (const item of trDataGrid) {
        for (let yi = 0; yi < TR_DATA_GRID_SIZE.length; yi++) {
          for (let xi = 0; xi < TR_MAPPING_GRID[0].length; xi++) {
            if (TR_MAPPING_GRID[yi][xi] === item.value) {
              grid[yi][xi] = item.isPressed ? 1 : 0
            }
          }
        }
      }

      // 次の世代の状態を計算
      let next = Array(8)
        .fill(undefined)
        .map(() => Array(8).fill(0))

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          let neighbors = 0
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              if (dx === 0 && dy === 0) continue
              let ni = (i + dx + 8) % 8
              let nj = (j + dy + 8) % 8
              neighbors += grid[ni][nj]
            }
          }
          next[i][j] = neighbors === 3 || (neighbors === 2 && grid[i][j]) ? 1 : 0
        }
      }

      // 状態を更新
      let _next = Array(64).fill('0')
      for (let yi = 0; yi < 8; yi++) {
        for (let xi = 0; xi < 8; xi++) {
          const gridIndex = TR_MAPPING_GRID[yi][xi]
          const trDataGridIndex = trDataGrid.findIndex((item) => item.value === gridIndex)
          _next[trDataGridIndex] = next[yi][xi].toString()
        }
      }

      const nextGrid = _next.join('')
      if (
        trModeLifeGameGrid === nextGrid ||
        trModeLifeGameGridHistory.includes(nextGrid) // ループしている場合は初期化
      ) {
        // 同じ状態の場合は初期化
        trModeLifeGameGrid = Array.from({ length: 64 }, () => floor(random(2))).join('')
        trModeLifeGameGridHistory = []
      } else {
        trModeLifeGameGrid = nextGrid
      }
    }
  }

  if (trMode === TR_MODE.FONT_AUTO) {
    if (frameCount % TR_AUTO_MODE_INTERVAL === 0) {
      // 係数をランダムに変更
      trFunctionFilterParamsRandomize()
      trFunctionShapeParamsRandomize()

      const randomFontBitmap = trBitMapFontData.getRandomBitmap().bitmap
      for (let yi = 0; yi < 8; yi++) {
        for (let xi = 0; xi < 8; xi++) {
          const gridIndex = TR_MAPPING_GRID[yi][xi]
          const trDataGridIndex = trDataGrid.findIndex((item) => item.value === gridIndex)
          trDataGrid[trDataGridIndex].isPressed = randomFontBitmap[yi][xi] === 1
        }
      }
      trSetInitUrlAndMidi()
    }
  }

  if (trMode === TR_MODE.FONT_2_AUTO) {
    if (frameCount % (TR_AUTO_MODE_INTERVAL * 0.3) === 0) {
      let index = trFont2AutoCount % trFont2AutoText.length

      // 係数をランダムに変更
      trFunctionFilterParamsRandomize()
      trFunctionShapeParamsRandomize()

      const fontBitmap = trFont2AutoBitmapList[index]
      for (let yi = 0; yi < 8; yi++) {
        for (let xi = 0; xi < 8; xi++) {
          const gridIndex = TR_MAPPING_GRID[yi][xi]
          const trDataGridIndex = trDataGrid.findIndex((item) => item.value === gridIndex)
          trDataGrid[trDataGridIndex].isPressed = fontBitmap[yi][xi] === 1
        }
      }
      trSetInitUrlAndMidi()

      trFont2AutoCount += 1
    }
  }

  const h = (map(trDataParams[14], 0, 99, 0, 360) + trHueShift) % 360
  switch (trBackgroundMode) {
    case TR_BACKGROUND_MODE.LIGHT:
      background(95)
      break
    case TR_BACKGROUND_MODE.DARK:
      background(5)
      break
    case TR_BACKGROUND_MODE.CHROMATIC:
      background(color(h, 85, 95))
      break
    case TR_BACKGROUND_MODE.CHROMATIC_DARK:
      background(color(h, 50, 40))
      break
    default:
      break
  }

  trDrawShape()

  if (trGrayFilter === TR_GRAY_FILTER.GRAY) {
    filter(GRAY)
  }

  if (trNoiseFilter === TR_NOISE_FILTER.NOISE) {
    trDrawNoiseFilter()
  }

  trDeviceDraw()

  if (trMode === TR_MODE.FONT_2_AUTO) {
    const nowIndex = (trFont2AutoCount - 1) % trFont2AutoText.length

    // 前の文字を表示
    for (let xi = 1; xi < width / TR_SOFT_UI_WIDTH; xi++) {
      const pos = createVector(width / 2 - (TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP * 2) * xi, height / 2)
      if (pos.x < 0 - TR_SOFT_UI_WIDTH) {
        break
      }

      let index = nowIndex - xi
      if (index < 0) {
        break
      }

      if (trFont2AutoBitmapList[index]) {
        trDeviceDummyDraw(createVector(pos.x, pos.y), trFont2AutoBitmapList[index])
      }
    }

    // 次の文字を表示
    for (let xi = 1; xi < width / TR_SOFT_UI_WIDTH; xi++) {
      const pos = createVector(width / 2 + (TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP * 2) * xi, height / 2)
      if (pos.x > width + TR_SOFT_UI_WIDTH) {
        break
      }

      let index = nowIndex + xi
      if (index >= trFont2AutoText.length) {
        break
      }

      if (trFont2AutoBitmapList[index]) {
        trDeviceDummyDraw(createVector(pos.x, pos.y), trFont2AutoBitmapList[index])
      }
    }
  }
}
