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
