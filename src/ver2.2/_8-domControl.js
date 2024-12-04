const imageDownloadArea = document.querySelector('#image-download')
const dialog = document.getElementById('dialog')
const dialogCancel = document.getElementById('dialog-cancel')
const dialogDownload = document.getElementById('dialog-download')
const dialogDownloadInfo = document.getElementById('dialog-download-info')

imageDownloadArea.addEventListener('click', trSaveImageClick(dialog))
imageDownloadArea.addEventListener('touchend', trSaveImageClick(dialog))

// キャンセルボタンのクリックイベント
dialogCancel.addEventListener('click', () => {
  trHideDialog()
})
// タッチイベント
dialogCancel.addEventListener('touchend', () => {
  trHideDialog()
})

// ダウンロードボタンのクリックイベント
dialogDownload.addEventListener('click', () => {
  trSaveWallPaper()
  trHideDialog()
})
// タッチイベント
dialogDownload.addEventListener('touchend', () => {
  trSaveWallPaper()
  trHideDialog()
})

// ダウンロード情報のクリックイベント
dialogDownloadInfo.addEventListener('click', () => {
  trSaveWallPaper(TR_WALLPAPER_MODE.INFO)
  trHideDialog()
})
// タッチイベント
dialogDownloadInfo.addEventListener('touchend', () => {
  trSaveWallPaper(TR_WALLPAPER_MODE.INFO)
  trHideDialog()
})

// モード切り替え
const modeButton = document.getElementById('mode')
const modeDialog = document.getElementById('mode-dialog')
const modeNormal = document.getElementById('mode-normal')
const modeAuto = document.getElementById('mode-auto')
const modeCancel = document.getElementById('mode-cancel')

// モーダル表示・非表示
const modeButtonFunc = (e) => {
  e.preventDefault()
  trIsDataGridClickable = false
  modeDialog.style.display = 'block'
}
modeButton.addEventListener('click', modeButtonFunc)
modeButton.addEventListener('touchend', modeButtonFunc)

// キャンセルボタンのクリックイベント
const modeCancelFunc = (e) => {
  e.preventDefault()
  modeDialog.style.display = 'none'
  trIsDataGridClickable = true
}
modeCancel.addEventListener('click', modeCancelFunc)
modeCancel.addEventListener('touchend', modeCancelFunc)

// 通常モード
const modeNormalFunc = (e) => {
  e.preventDefault()
  trMode = TR_MODE.NORMAL
  modeDialog.style.display = 'none'
  trIsDataGridClickable = true

  imageDownloadArea.style.display = 'block'
}
modeNormal.addEventListener('click', modeNormalFunc)
modeNormal.addEventListener('touchend', modeNormalFunc)

// 自動モード
const modeAutoFunc = (e) => {
  e.preventDefault()
  trMode = TR_MODE.AUTO
  modeDialog.style.display = 'none'
  trIsDataGridClickable = true

  imageDownloadArea.style.display = 'none'
}
modeAuto.addEventListener('click', modeAutoFunc)
modeAuto.addEventListener('touchend', modeAutoFunc)
