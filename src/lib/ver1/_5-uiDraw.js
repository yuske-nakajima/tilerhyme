function trUiDraw() {
  background(color._1)

  // fill - color2
  drawShape(ceil(trCalcDataGridResult.key1), trCellDivNum, 0.85, color._2, true)

  // fill - color3
  drawShape(ceil(trCalcDataGridResult.key2), trCellDivNum, 1.5, color._3, false)

  // fill - color3
  drawShape(ceil(trCalcDataGridResult.key3), trCellDivNum, 0.3, color._3, true)
}
