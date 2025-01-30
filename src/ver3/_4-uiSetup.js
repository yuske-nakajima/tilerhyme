async function trUiSetup() {
  trCreateQrCode()
  await trProgrammerModeSetup(
    async (i) => {
      trUtilityDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
      trSetDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
      await trSetDataParams()

      if (trRandomShapeParamsMode === TR_RANDOM_SHAPE_PARAMS_MODE.RANDOM) {
        trFunctionShapeParamsRandomize()
      }
      if (trRandomFilterParamsMode === TR_RANDOM_FILTER_PARAMS_MODE.RANDOM) {
        trFunctionFilterParamsRandomize()
      }
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
