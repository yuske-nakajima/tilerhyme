async function trInitial() {
  trSetDataParams()
  trUrlToData()
  trWindowGap = max(windowWidth * 0.01, windowHeight * 0.01)
  trWindowSize = {
    width: windowWidth - trWindowGap,
    height: windowHeight - trWindowGap,
  }

  const windowSize = trCalcWindowSize(TR_WINDOW_TYPE.FULL)
  trCanvas = createCanvas(windowSize.width, windowSize.height)

  colorMode(HSB)
  frameRate(24)

  // カラー
  TR_COLORS.lineMain = color(0, 0, 0)
  TR_COLORS.lineMainDark = color(0, 0, 100)
  TR_COLORS.cellMain = color(0, 0, 100)
  TR_COLORS.cellSub = color(0, 0, 60)
  TR_COLORS.cellNormal = color(0, 0, 40)
  TR_COLORS.background = color(200, 100, 20)
  TR_COLORS.device = color(200, 0, 5)
  TR_COLORS.deviceFrame = color(80, 10, 100)

  // 横幅でセルの分割数を計算
  trCellDivNum = ceil(width / 50)

  trSoftUiStartPos = createVector(width / 2 - TR_SOFT_UI_WIDTH / 2, height / 2 - TR_SOFT_UI_WIDTH / 2)

  textFont('Silkscreen')

  // ノイズ
  trNoiseGraphic = createGraphics(width / 4, height / 4)
  trGenerateNoise()

  // MIDI
  try {
    trMidiAccess = await navigator.requestMIDIAccess()
  } catch (e) {
    console.error(e)
  }

  // フォントデータ読み込み
  const fontResponse = await fetch('../assets/font.json')
  const fontJson = await fontResponse.json()
  trBitMapFontData = new BitmapUtils(fontJson)
}
