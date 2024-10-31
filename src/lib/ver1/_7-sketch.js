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

// マウスが動いた時に実行される処理
function mouseDragged() {
  trMouseDragged()
}

// マウスが離された時に実行される処理
function mouseReleased() {
  trMouseReleased()
}
