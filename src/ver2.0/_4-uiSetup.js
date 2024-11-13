async function trUiSetup() {
  trCreateQrCode()
  await trLpSetup(
    (i) => {
      trSetDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
    },
    () => {
      console.log('ノーデバイスモード')
      trIsNoDevice = true
    },
    trDataGrid,
  )
}
