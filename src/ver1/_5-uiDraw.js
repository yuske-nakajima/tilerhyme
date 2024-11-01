function trUiDraw() {
  background(trColor._1)

  // fill - color2
  drawShape(ceil(trCalcDataGridResult.key1), trCellDivNum, 0.85, trColor._2, true)

  // fill - color3
  drawShape(ceil(trCalcDataGridResult.key2), trCellDivNum, 1.5, trColor._3, false)

  // fill - color3
  drawShape(ceil(trCalcDataGridResult.key3), trCellDivNum, 0.3, trColor._3, true)

  if (trIsNoDevice) {
    trDrawBlock(() => {
      const gap = 10
      fill(TR_COLORS.lineMain)
      noStroke()
      rect(trSoftUiStartPos.x - gap / 2, trSoftUiStartPos.y - gap / 2, TR_SOFT_UI_WIDTH + gap)
    })
    trDrawBlock(() => {
      stroke(TR_COLORS.lineMain)
      strokeWeight(1)
      for (let xi = 0; xi < 8; xi++) {
        for (let yi = 0; yi < 8; yi++) {
          const value = TR_MAPPING_GRID[yi][xi]
          const getIndex = TR_DATA_GRID.findIndex((item) => item.value === value)
          if (getIndex === undefined) {
            continue
          }

          trDrawBlock(() => {
            if (TR_DATA_GRID[getIndex].isPressed) {
              fill(TR_COLORS.cellMain)
            } else {
              fill(TR_COLORS.cellNormal)
            }

            rect(
              trSoftUiStartPos.x + TR_SOFT_UI_CELL_WIDTH * xi,
              trSoftUiStartPos.y + TR_SOFT_UI_CELL_WIDTH * yi,
              TR_SOFT_UI_CELL_WIDTH,
              TR_SOFT_UI_CELL_WIDTH,
            )
          })
        }
      }
    })
  }
}
