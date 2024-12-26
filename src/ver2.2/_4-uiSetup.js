async function trUiSetup() {
  trCreateQrCode()
  await trProgrammerModeSetup(
    async (i) => {
      trUtilityDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
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
    trMidiAccess,
    () => {
      if (trMode !== TR_MODE.AUTO) {
        trSineCountReset()
      }
    },
  )
}
