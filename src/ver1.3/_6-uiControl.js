function trMousePressed() {
  if (trIsNoDevice) {
    for (let xi = 0; xi < TR_DEVICE_GRID_NUM; xi++) {
      for (let yi = 0; yi < TR_DEVICE_GRID_NUM; yi++) {
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
          if (!trIsDataGridClickable) {
            return
          }
          trDataGrid[getIndex].isPressed = !trDataGrid[getIndex].isPressed
          trUpdateUrl()
          trCreateQrCode()
          trChangePatternFrame = frameCount
        })
      }
    }

    trSetColor()
  }
}
