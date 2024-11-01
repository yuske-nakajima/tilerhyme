function trInitial() {
  const gap = max(windowWidth * 0.1, windowHeight * 0.1)
  createCanvas(windowWidth - gap, windowHeight - gap)
  colorMode(HSB)
  frameRate(24)

  // カラー
  TR_COLORS.lineMain = color(200, 0, 10)
  TR_COLORS.cellMain = color(200, 60, 100)
  TR_COLORS.cellNormal = color(200, 10, 100)

  // 横幅でセルの分割数を計算
  trCellDivNum = ceil(width / 50)

  trSoftUiStartPos = createVector(width / 2 - TR_SOFT_UI_WIDTH / 2, height / 2 - TR_SOFT_UI_WIDTH / 2)
}
