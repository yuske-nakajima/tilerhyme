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
const modeFontAuto = document.getElementById('mode-font-auto')
const modeFont2Auto = document.getElementById('mode-font2-auto')
const modeCancel = document.getElementById('mode-cancel')
const font2AutoDialog = document.getElementById('font2-auto-dialog')
const font2AutoButton = document.getElementById('font2-auto-button')
const font2AutoCancel = document.getElementById('font2-auto-cancel')

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
  trMode = trSaveToLocalStorage('trMode', TR_MODE.NORMAL)
  modeDialog.style.display = 'none'
  trIsDataGridClickable = true

  imageDownloadArea.style.display = 'block'
  window.location.reload()
}
modeNormal.addEventListener('click', modeNormalFunc)
modeNormal.addEventListener('touchend', modeNormalFunc)

// 自動モード
const modeAutoFunc = (e) => {
  e.preventDefault()
  trMode = trSaveToLocalStorage('trMode', TR_MODE.AUTO)
  modeDialog.style.display = 'none'
  trIsDataGridClickable = true

  imageDownloadArea.style.display = 'none'
}
modeAuto.addEventListener('click', modeAutoFunc)
modeAuto.addEventListener('touchend', modeAutoFunc)

// 自動モード（フォントの形）
const modeFontAutoFunc = (e) => {
  e.preventDefault()
  trMode = trSaveToLocalStorage('trMode', TR_MODE.FONT_AUTO)
  modeDialog.style.display = 'none'
  trIsDataGridClickable = true

  imageDownloadArea.style.display = 'none'
}
modeFontAuto.addEventListener('click', modeFontAutoFunc)
modeFontAuto.addEventListener('touchend', modeFontAutoFunc)

// 自動モード（フォントの形）
const modeFont2AutoFunc = (e) => {
  e.preventDefault()
  // trMode = trSaveToLocalStorage('trMode', TR_MODE.FONT_AUTO)
  font2AutoDialog.style.display = 'block'

  modeDialog.style.display = 'none'

  imageDownloadArea.style.display = 'none'
}
modeFont2Auto.addEventListener('click', modeFont2AutoFunc)
modeFont2Auto.addEventListener('touchend', modeFont2AutoFunc)

const font2AutoButtonFunc = (e) => {
  e.preventDefault()
  const _text = document.getElementById('font2-auto-text').value.trim()
  if (_text === '') {
    alert('文字を入力してください')
    return
  }

  trMode = trSaveToLocalStorage('trMode', TR_MODE.FONT_2_AUTO)
  trFont2AutoText = trSaveToLocalStorage('trFont2AutoText', _text)
  trFont2AutoCount = 0
  font2AutoDialog.style.display = 'none'
  trIsDataGridClickable = true
  imageDownloadArea.style.display = 'none'
}
font2AutoButton.addEventListener('click', font2AutoButtonFunc)
font2AutoButton.addEventListener('touchend', font2AutoButtonFunc)

const font2AutoCancelFunc = (e) => {
  e.preventDefault()
  font2AutoDialog.style.display = 'none'
  trIsDataGridClickable = true
}
font2AutoCancel.addEventListener('click', font2AutoCancelFunc)
font2AutoCancel.addEventListener('touchend', font2AutoCancelFunc)
