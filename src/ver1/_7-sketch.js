// 一度だけ実行される処理
async function setup() {
  trInitial()
  await trUiSetup()
}

// 毎フレーム実行される処理
function draw() {
  trUiDraw()
}

// マウスが押された時に実行される処理
function mousePressed() {
  trMousePressed()
}

// マウスが押された時に実行される処理のタッチ対応
function touchStarted() {
  mousePressed()
  return false
}

// 画面をダブルクリックした時に実行される処理
function doubleClicked() {
  trSaveWallPaper()
}

// スマホ画面をタップした時に実行される処理
function touchEnded() {
  // ダブルタップで壁紙を保存
  if (millis() - lastTapTime < 300) {
    trSaveWallPaper()
  }
  lastTapTime = millis()
}
