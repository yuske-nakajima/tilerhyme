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

  trDeviceDraw()

  if (trFilterMode === TR_FILTER_MODE.GRAY) {
    filter(GRAY)
  }
}
