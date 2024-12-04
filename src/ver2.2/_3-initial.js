function trInitial() {
  trUrlToData()
  trWindowGap = max(windowWidth * 0.01, windowHeight * 0.01)
  trWindowSize = {
    width: windowWidth - trWindowGap,
    height: windowHeight - trWindowGap,
  }
  trCanvas = createCanvas(windowWidth - trWindowGap, windowHeight - trWindowGap)
  colorMode(HSB)
  frameRate(24)

  // カラー
  TR_COLORS.lineMain = color(0, 0, 0)
  TR_COLORS.cellMain = color(0, 0, 100)
  TR_COLORS.cellNormal = color(0, 0, 50)
  TR_COLORS.background = color(200, 100, 20)

  // 横幅でセルの分割数を計算
  trCellDivNum = ceil(width / 50)

  trSoftUiStartPos = createVector(width / 2 - TR_SOFT_UI_WIDTH / 2, height / 2 - TR_SOFT_UI_WIDTH / 2)
}
