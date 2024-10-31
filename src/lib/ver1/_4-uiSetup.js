async function trUiSetup() {
  await trLpSetup((i) => {
    setDataGridIsPressed(i, !trGetPressedKeyList(TR_DATA_GRID).includes(i))

    // 背景色を変更する
    trCalcDataGridResult = calcDataGrid(dataGrid)
    const _color = _colorArray.at(trCalcDataGridResult.key0 % TR_COLOR_ARRAY.length)
    if (!_color) {
      return
    }
    color = _color
  }, TR_DATA_GRID)
}
