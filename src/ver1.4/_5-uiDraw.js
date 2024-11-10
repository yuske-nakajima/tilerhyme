function trUiDraw() {
  if (trMode === TR_MODE.AUTO) {
    if (frameCount % TR_AUTO_MODE_INTERVAL === 0) {
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

      // 次の世代のセルの状態を計算する
      let next = Array(64).fill('0')
      for (let i = 0; i < 64; i++) {
        let _left = trModeLifeGameGrid[(i - 1 + 64) % 64]
        let _center = trModeLifeGameGrid[i]
        let _right = trModeLifeGameGrid[(i + 1) % 64]
        // Rule 30
        next[i] = (_left === '1') ^ (_center === '1' || _right === '1') ? '1' : '0'
      }
      trModeLifeGameGrid = next.join('')
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
