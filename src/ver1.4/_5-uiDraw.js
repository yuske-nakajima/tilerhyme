function trUiDraw() {
  if (trMode === TR_MODE.AUTO) {
    if (frameCount % TR_AUTO_MODE_INTERVAL === 0) {
      if (!trModeLifeGameGrid.includes('1')) {
        trModeLifeGameGrid = Array.from({ length: 64 }, () => floor(random(2))).join('')
      }

      // 自動モードはlife gameのルールを適用する
      const dataGrid = trModeLifeGameGrid.split('').map((item) => (item === '1' ? true : false))
      for (let i = 0; i < trDataGrid.length; i++) {
        trDataGrid[i].isPressed = dataGrid[i]
      }
      trUpdateUrl()
      trCreateQrCode()
      trChangePatternFrame = frameCount

      trLpSetup(
        (i) => {
          trSetDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
          // 背景色を変更する
          trSetColor()
        },
        () => {
          trIsNoDevice = true
          trSetColor()
        },
        trSetColor,
        trDataGrid,
      ).then()

      // trModeLifeGameGrid を TR_MAPPING_GRID の並び順に変換
      const grid = []
      for (let i = 0; i < 8; i++) {
        grid.push(Array(8).fill(0))
      }

      for (const item of trDataGrid) {
        for (let yi = 0; yi < TR_MAPPING_GRID.length; yi++) {
          for (let xi = 0; xi < TR_MAPPING_GRID[0].length; xi++) {
            if (TR_MAPPING_GRID[yi][xi] === item.value) {
              grid[yi][xi] = item.isPressed ? 1 : 0
            }
          }
        }
      }

      // 次の世代の状態を計算
      let next = Array(8)
        .fill()
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
      if (trModeLifeGameGrid === nextGrid) {
        // 同じ状態の場合は初期化
        trModeLifeGameGrid = Array.from({ length: 64 }, () => floor(random(2))).join('')
      } else {
        trModeLifeGameGrid = nextGrid
      }
    }
  }

  background(trColor._1)

  // fill - color2
  trDrawShape(ceil(trCalcDataGridResult.key1), trCellDivNum, 0.9, trColor._2, true)

  // fill - color3
  trDrawShape(ceil(trCalcDataGridResult.key2), trCellDivNum, 0.75, trColor._3, false)

  // fill - color3
  trDrawShape(ceil(trCalcDataGridResult.key3), trCellDivNum, 0.6, trColor._3, true)

  trDeviceDraw()

  trRotateCalc()
}
