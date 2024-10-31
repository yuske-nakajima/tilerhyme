/**
 * 他描画に影響範囲が及ばないようにpushとpopで囲む
 * @param {function} 描画関数
 */
function trDrawBlock(func) {
  push()
  func()
  pop()
}

function trMousePressedBlock(pos, size, func) {
  if (pos.x <= mouseX && mouseX <= pos.x + size.width && pos.y <= mouseY && mouseY <= pos.y + size.height) {
    func()
  }
}

// ローカルストレージから値を取得または初期化する関数
function trGetOrInitializeValue(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  if (storedValue !== null) {
    return JSON.parse(storedValue)
  }
  trSaveToLocalStorage(key, defaultValue)
  return defaultValue
}

// ローカルストレージに値を保存する関数
function trSaveToLocalStorage(key, value) {
  const existingValue = localStorage.getItem(key)
  if (existingValue !== null) {
    localStorage.removeItem(key)
  }
  localStorage.setItem(key, JSON.stringify(value))
  return value
}
