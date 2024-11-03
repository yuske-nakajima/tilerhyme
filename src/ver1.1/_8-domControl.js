const imageDownloadArea = document.querySelector('#image-download')

imageDownloadArea.addEventListener('click', (e) => {
  // デフォルト挙動をキャンセル
  e.preventDefault()

  // 画像を保存
  trSaveWallPaper()
})
