async function trUiSetup() {
  await trLpSetup(
    (i) => {
      trSetDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
      // 背景色を変更する
      trSetColor()
    },
    () => {
      console.log('ノーデバイスモード')
      trIsNoDevice = true
    },
    trSetColor,
    trDataGrid,
  )
}
