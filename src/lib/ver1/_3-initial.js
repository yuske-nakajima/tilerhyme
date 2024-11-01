function trInitial() {
  createCanvas(windowWidth * 0.95, windowHeight * 0.95)
  colorMode(HSB)
  frameRate(24)

  // 横幅でセルの分割数を計算
  trCellDivNum = ceil(width / 50)
}
