function trUiDraw() {
  background(trColor._1)

  // fill - color2
  trDrawShape(ceil(trCalcDataGridResult.key1), trCellDivNum, 0.6, trColor._2, true)

  // fill - color3
  trDrawShape(ceil(trCalcDataGridResult.key2), trCellDivNum, 1.8, trColor._3, false)

  // fill - color3
  trDrawShape(ceil(trCalcDataGridResult.key3), trCellDivNum, 0.2, trColor._3, true)

  trDeviceDraw()
}
