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
          const getIndex = trDataGrid.findIndex((item) => item.value === value)
          if (getIndex === undefined) {
            return
          }
          trDataGrid[getIndex].isPressed = !trDataGrid[getIndex].isPressed
          trSaveToLocalStorage('trDataGrid-ver1.1', trDataGrid)
        })
      }
    }

    trSetColor()
  }
}
