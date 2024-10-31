async function trUiSetup() {
  await trLpSetup((i) => {
    trSetDataGridIsPressed(i, !trGetPressedKeyList(TR_DATA_GRID).includes(i))

    // 背景色を変更する
    trCalcDataGridResult = trCalcDataGrid(TR_DATA_GRID)
    const _color = TR_COLOR_ARRAY.at(trCalcDataGridResult.key0 % TR_COLOR_ARRAY.length)
    if (!_color) {
      return
    }
    color = _color
  }, TR_DATA_GRID)
}
