// 一度だけ実行される処理
async function setup() {
  await trInitial()
  await trUiSetup()
}

// 毎フレーム実行される処理
async function draw() {
  await trUiDraw()
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
