async function trUiSetup() {
  await trLpSetup(
    (i) => {
      trSetDataGridIsPressed(i, !trGetPressedKeyList(TR_DATA_GRID).includes(i))
      // 背景色を変更する
      trSetColor()
    },
    () => {
      console.log('ノーデバイスモード')
      trIsNoDevice = true
    },
    TR_DATA_GRID,
  )
}
