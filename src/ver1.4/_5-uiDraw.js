function trUiDraw() {
  if (trMode === TR_MODE.AUTO) {
    if (frameCount % AUTO_MODE_INTERVAL === 0) {
      // 0 or 1 の64文字のランダム文字列を生成
      const randomString = Array.from({ length: 64 }, () => floor(random(2))).join('')
      const dataGrid = randomString.split('').map((item) => (item === '1' ? true : false))
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
    }
  }

  background(trColor._1)

  // fill - color2
  trDrawShape(ceil(trCalcDataGridResult.key1), trCellDivNum, 0.6, trColor._2, true)

  // fill - color3
  trDrawShape(ceil(trCalcDataGridResult.key2), trCellDivNum, 1.8, trColor._3, false)

  // fill - color3
  trDrawShape(ceil(trCalcDataGridResult.key3), trCellDivNum, 0.2, trColor._3, true)

  trDeviceDraw()

  trRotateCalc()
}
