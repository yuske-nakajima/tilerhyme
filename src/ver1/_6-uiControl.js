function trMousePressed() {
  if (trIsNoDevice) {
    for (let xi = 0; xi < 8; xi++) {
      for (let yi = 0; yi < 8; yi++) {
        const pos = createVector(
          trSoftUiStartPos.x + TR_SOFT_UI_CELL_WIDTH * xi,
          trSoftUiStartPos.y + TR_SOFT_UI_CELL_WIDTH * yi,
        )
        trMousePressedBlock(pos, { width: TR_SOFT_UI_CELL_WIDTH, height: TR_SOFT_UI_CELL_WIDTH }, () => {
          const value = TR_MAPPING_GRID[yi][xi]
          const getIndex = TR_DATA_GRID.findIndex((item) => item.value === value)
          if (!getIndex) {
            return
          }
          TR_DATA_GRID[getIndex].isPressed = !TR_DATA_GRID[getIndex].isPressed
        })
      }
    }

    trSetColor()
  }
}
