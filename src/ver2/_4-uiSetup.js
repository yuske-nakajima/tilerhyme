async function trUiSetup() {
  trCreateQrCode()
  await trLpSetup(
    async (i) => {
      trSetDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
      await trSetDataParams()
    },
    async () => {
      console.log('ノーデバイスモード')
      trIsNoDevice = true
      await trSetDataParams()
    },
    trSetDataParams,
    trDataGrid,
  )
}
