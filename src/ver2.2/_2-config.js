// ------------------------------------------------------------
// --- 定数
// ------------------------------------------------------------
const TR_APP_NAME = 'TILERHYME'
const TR_VERSION = '2.2'
const TR_VERSION_NAME = 'KICK'

const TR_INIT_DATA_GRID = [
  { value: 85, calcValue: 1, group: 0, isPressed: false },
  { value: 70, calcValue: 2, group: 0, isPressed: false },
  { value: 51, calcValue: 4, group: 0, isPressed: false },
  { value: 97, calcValue: 8, group: 0, isPressed: false },
  { value: 38, calcValue: 16, group: 0, isPressed: false },
  { value: 80, calcValue: 32, group: 0, isPressed: false },
  { value: 43, calcValue: 64, group: 0, isPressed: false },
  { value: 67, calcValue: 128, group: 0, isPressed: false },
  { value: 46, calcValue: 256, group: 0, isPressed: false },
  { value: 77, calcValue: 512, group: 0, isPressed: false },
  { value: 79, calcValue: 1024, group: 0, isPressed: false },
  { value: 96, calcValue: 2048, group: 0, isPressed: false },
  { value: 36, calcValue: 4096, group: 0, isPressed: false },
  { value: 59, calcValue: 8192, group: 0, isPressed: false },
  { value: 86, calcValue: 16384, group: 0, isPressed: false },
  { value: 54, calcValue: 32768, group: 0, isPressed: false },
  { value: 76, calcValue: 1, group: 1, isPressed: false },
  { value: 52, calcValue: 2, group: 1, isPressed: false },
  { value: 87, calcValue: 4, group: 1, isPressed: false },
  { value: 93, calcValue: 8, group: 1, isPressed: false },
  { value: 61, calcValue: 16, group: 1, isPressed: false },
  { value: 45, calcValue: 32, group: 1, isPressed: false },
  { value: 74, calcValue: 64, group: 1, isPressed: false },
  { value: 95, calcValue: 128, group: 1, isPressed: false },
  { value: 63, calcValue: 256, group: 1, isPressed: false },
  { value: 50, calcValue: 512, group: 1, isPressed: false },
  { value: 41, calcValue: 1024, group: 1, isPressed: false },
  { value: 60, calcValue: 2048, group: 1, isPressed: false },
  { value: 44, calcValue: 4096, group: 1, isPressed: false },
  { value: 49, calcValue: 8192, group: 1, isPressed: false },
  { value: 78, calcValue: 16384, group: 1, isPressed: false },
  { value: 58, calcValue: 32768, group: 1, isPressed: false },
  { value: 42, calcValue: 1, group: 2, isPressed: false },
  { value: 94, calcValue: 2, group: 2, isPressed: false },
  { value: 71, calcValue: 4, group: 2, isPressed: false },
  { value: 57, calcValue: 8, group: 2, isPressed: false },
  { value: 47, calcValue: 16, group: 2, isPressed: false },
  { value: 89, calcValue: 32, group: 2, isPressed: false },
  { value: 81, calcValue: 64, group: 2, isPressed: false },
  { value: 53, calcValue: 128, group: 2, isPressed: false },
  { value: 98, calcValue: 256, group: 2, isPressed: false },
  { value: 82, calcValue: 512, group: 2, isPressed: false },
  { value: 39, calcValue: 1024, group: 2, isPressed: false },
  { value: 37, calcValue: 2048, group: 2, isPressed: false },
  { value: 91, calcValue: 4096, group: 2, isPressed: false },
  { value: 72, calcValue: 8192, group: 2, isPressed: false },
  { value: 64, calcValue: 16384, group: 2, isPressed: false },
  { value: 75, calcValue: 32768, group: 2, isPressed: false },
  { value: 69, calcValue: 1, group: 3, isPressed: false },
  { value: 40, calcValue: 2, group: 3, isPressed: false },
  { value: 65, calcValue: 4, group: 3, isPressed: false },
  { value: 48, calcValue: 8, group: 3, isPressed: false },
  { value: 99, calcValue: 16, group: 3, isPressed: false },
  { value: 55, calcValue: 32, group: 3, isPressed: false },
  { value: 84, calcValue: 64, group: 3, isPressed: false },
  { value: 62, calcValue: 128, group: 3, isPressed: false },
  { value: 88, calcValue: 256, group: 3, isPressed: false },
  { value: 92, calcValue: 512, group: 3, isPressed: false },
  { value: 66, calcValue: 1024, group: 3, isPressed: false },
  { value: 83, calcValue: 2048, group: 3, isPressed: false },
  { value: 68, calcValue: 4096, group: 3, isPressed: false },
  { value: 56, calcValue: 8192, group: 3, isPressed: false },
  { value: 73, calcValue: 16384, group: 3, isPressed: false },
  { value: 90, calcValue: 32768, group: 3, isPressed: false },
]

const TR_MAPPING_GRID = [
  [64, 65, 66, 67, 96, 97, 98, 99],
  [60, 61, 62, 63, 92, 93, 94, 95],
  [56, 57, 58, 59, 88, 89, 90, 91],
  [52, 53, 54, 55, 84, 85, 86, 87],
  [48, 49, 50, 51, 80, 81, 82, 83],
  [44, 45, 46, 47, 76, 77, 78, 79],
  [40, 41, 42, 43, 72, 73, 74, 75],
  [36, 37, 38, 39, 68, 69, 70, 71],
]

const TR_SOFT_UI_WIDTH = 200
const TR_SOFT_UI_CELL_WIDTH = TR_SOFT_UI_WIDTH / 8

const TR_COLORS = {}

const TR_WALLPAPER_MODE = {
  FULL: 0,
  INFO: 1,
}

const TR_WALLPAPER_SIZE = 1080

const TR_ROTATE_NUM = 4

const TR_CYCLE_FRAME = 60 / TR_ROTATE_NUM

const TR_DEVICE_GRID_NUM = 8

const TR_MODE = {
  NORMAL: 0,
  AUTO: 1,
}

const TR_AUTO_MODE_INTERVAL = 90

const TR_SINE_ROOP_COUNT = 2
// ------------------------------------------------------------
// --- 変数
// ------------------------------------------------------------
let lastTapTime = 0

let trCanvas

let trWindowSize

let trWindowGap

let trCellDivNum

let trIsNoDevice = false

let trSoftUiStartPos

let trDataGrid = TR_INIT_DATA_GRID

let trIsDataGridClickable = true

let trChangePatternFrame = 0

let trBlockFrameCount = 0

let trRotateValue = 0

let trQrImage

// MODE object value
let trMode = TR_MODE.NORMAL

// life gameの初期値はランダム値
let trModeLifeGameGrid = Array.from({ length: 64 }, () => Math.floor(Math.random() * 2)).join('')

let trModeLifeGameGridHistory = []

let trDataParams = []

let trSineData = []
let trSineCount = 0
// ------------------------------------------------------------
// --- 関数
// ------------------------------------------------------------

/**
 * データグリッドのisPressedプロパティを設定する関数
 * @param {number} value - 設定する値
 * @param {boolean} isPressed - 設定するisPressedの値
 */
function trSetDataGridIsPressed(value, isPressed) {
  for (let i = 0; i < trDataGrid.length; i++) {
    if (trDataGrid[i].value === value) {
      trDataGrid[i].isPressed = isPressed
      trUpdateUrl()
      trCreateQrCode()
      trChangePatternFrame = frameCount
      trSetDataParams()
    }
  }
}

/**
 * デバイスの描画を行う関数
 */
function trDeviceDraw() {
  if (trIsNoDevice) {
    trDrawBlock(() => {
      const gap = 10
      fill(TR_COLORS.lineMain)
      noStroke()
      rect(trSoftUiStartPos.x - gap / 2, trSoftUiStartPos.y - gap / 2, TR_SOFT_UI_WIDTH + gap)
    })
    trDrawBlock(() => {
      stroke(TR_COLORS.lineMain)
      strokeWeight(1)
      for (let xi = 0; xi < TR_DEVICE_GRID_NUM; xi++) {
        for (let yi = 0; yi < TR_DEVICE_GRID_NUM; yi++) {
          const value = TR_MAPPING_GRID[yi][xi]
          const getIndex = trDataGrid.findIndex((item) => item.value === value)
          if (getIndex === undefined) {
            continue
          }

          trDrawBlock(() => {
            if (trDataGrid[getIndex].isPressed) {
              fill(TR_COLORS.cellMain)
            } else {
              fill(TR_COLORS.cellNormal)
            }

            rect(
              trSoftUiStartPos.x + TR_SOFT_UI_CELL_WIDTH * xi,
              trSoftUiStartPos.y + TR_SOFT_UI_CELL_WIDTH * yi,
              TR_SOFT_UI_CELL_WIDTH,
              TR_SOFT_UI_CELL_WIDTH,
            )
          })
        }
      }
    })
  }
}

/**
 * 壁紙を保存する関数
 */
function trSaveWallPaper(mode = TR_WALLPAPER_MODE.FULL) {
  const originalDensity = pixelDensity() // 現在の密度を保存

  pixelDensity(2)

  if (mode === TR_WALLPAPER_MODE.FULL) {
    resizeCanvas(TR_WALLPAPER_SIZE, TR_WALLPAPER_SIZE)
  } else if (mode === TR_WALLPAPER_MODE.INFO) {
    resizeCanvas(TR_WALLPAPER_SIZE, TR_WALLPAPER_SIZE)
  }

  trCellDivNum = ceil(width / 50)

  const tempTrIsNoDevice = trIsNoDevice
  const tempTrSoftUiStartPos = { ...trSoftUiStartPos }

  trIsNoDevice = false
  if (mode === TR_WALLPAPER_MODE.INFO) {
    trIsNoDevice = true
    trSoftUiStartPos = createVector(width / 2 - TR_SOFT_UI_WIDTH / 2, height / 2 - TR_SOFT_UI_WIDTH / 2)
  }

  trUiDraw()

  if (mode === TR_WALLPAPER_MODE.INFO) {
    trInfoDraw()
    if (trQrImage) {
      trQrDraw()
    }
  }

  trSaveImage(trCanvas)

  // すべて元に戻す
  trIsNoDevice = tempTrIsNoDevice
  trSoftUiStartPos = tempTrSoftUiStartPos

  const _windowWidth = windowWidth - trWindowGap
  const _windowHeight = windowHeight - trWindowGap
  const windowSize = min(_windowWidth, _windowHeight)
  resizeCanvas(windowSize, windowSize)

  trCellDivNum = ceil(width / 50)
  pixelDensity(originalDensity) // 密度を元に戻す
}

/**
 * ダイアログを非表示にする関数。
 * ダイアログの表示スタイルを 'none' に設定し、データグリッドをクリック可能にする。
 */
function trHideDialog() {
  const dialog = document.getElementById('dialog')
  dialog.style.display = 'none'
  trIsDataGridClickable = true
}

/**
 * 画像を保存する関数
 * @param {p5.Image} img - 保存する画像
 */
function trSaveImageClick(dialog) {
  return (e) => {
    trIsDataGridClickable = false

    // デフォルト挙動をキャンセル
    e.preventDefault()

    dialog.style.display = 'block'
  }
}

/**
 * trInfoDraw 関数は、情報表示用の描画を行います。
 *
 * @function trInfoDraw
 */
function trInfoDraw() {
  const infoWidth = 30
  trDrawBlock(() => {
    noStroke()
    fill(TR_COLORS.cellMain)
    rect(0, 0, width, infoWidth)
    rect(width - infoWidth, 0, infoWidth, height)
    rect(0, 0, infoWidth, height)
    rect(0, height - infoWidth, width, infoWidth)
  })

  trDrawBlock(() => {
    fill(TR_COLORS.lineMain)
    textSize(12)
    textFont('sans-serif')

    // データ情報
    textAlign(LEFT, CENTER)
    text(trGridDataToString(), infoWidth, infoWidth / 2)

    // バージョン情報
    textAlign(RIGHT, CENTER)
    text(
      `${TR_APP_NAME} - ${TR_VERSION_NAME}(${TR_VERSION}) CREATED BY YUSKE`,
      width - infoWidth,
      height - infoWidth / 2,
    )
  })

  trDrawBlock(() => {
    noFill()
    stroke(TR_COLORS.lineMain)
    strokeWeight(2)
    rect(0, 0, width, height)
    rect(infoWidth, infoWidth, width - infoWidth * 2, height - infoWidth * 2)
  })
}

/**
 * trGridDataToString 関数は、trDataGrid 配列の各要素の isPressed プロパティを
 * 文字列に変換し、'1' または '0' の文字列として結合して返します。
 *
 * @returns {string} trDataGrid の各要素の isPressed プロパティを '1' または '0' に変換し、
 * それらを結合した文字列
 */
function trGridDataToString() {
  return trDataGrid
    .map((item) => item.isPressed)
    .map((item) => (item ? '1' : '0'))
    .join('')
}

/**
 * trRotateCalc 関数は、現在のフレーム数とパターン変更フレーム数の差を TR_ROTATE_NUM で割った値を
 * trRotateValue に代入します。
 */
function trRotateCalc() {
  trRotateValue = (frameCount - trChangePatternFrame) / TR_ROTATE_NUM
}

/**
 * URLのクエリパラメータからデータを取得し、trDataGridを更新する関数。
 * URLに'data'パラメータが含まれている場合、その値を解析してtrDataGridを更新する。
 * 'data'パラメータが存在しない場合、trDataGridを初期データに設定する。
 */
function trUrlToData() {
  const url = new URL(window.location.href)
  const data = url.searchParams.get('data')

  // dataをバリデーション
  // dataは0または1のみで構成されている必要がある
  // dataの長さは64である必要がある
  const isValidData = data && data.length === 64 && /^[01]+$/.test(data)

  if (isValidData) {
    const dataGrid = data.split('').map((item) => (item === '1' ? true : false))
    for (let i = 0; i < trDataGrid.length; i++) {
      trDataGrid[i].isPressed = dataGrid[i]
    }
  } else {
    trDataGrid = TR_INIT_DATA_GRID
  }
}

/**
 * 現在のURLにデータを追加して更新します。
 *
 * この関数は、現在のウィンドウのURLを取得し、URLの検索パラメータに
 * 'data' パラメータを設定します。その後、履歴を更新して新しいURLを
 * ブラウザのアドレスバーに反映させます。
 */
function trUpdateUrl() {
  const url = new URL(window.location.href)
  url.searchParams.set('data', trGridDataToString())
  window.history.pushState({}, '', url)
}

/**
 * QRコードを作成する関数
 */
function trCreateQrCode() {
  const url = new URL(window.location.href)
  const data = url.searchParams.get('data')
  const qrData = `${url.origin}${url.pathname}?data=${data}`

  // QRコードを作成
  const qr = qrcode(0, 'L')
  qr.addData(qrData)
  qr.make()

  // QRコードのHTML要素を作成
  const qrDiv = document.createElement('div')
  qrDiv.innerHTML = qr.createImgTag(4, 0)

  // QRコードの画像を読み込む
  const imgElement = qrDiv.querySelector('img')
  trQrImage = loadImage(imgElement.src)
}

/**
 * QRコードを描画する関数
 */
function trQrDraw() {
  imageMode(CENTER)
  const gap = trQrImage.width / 2 + 40
  image(trQrImage, width - gap, height - gap)
}

/**
 * 現在のグリッドの状態に基づいてデータパラメータを生成して設定する関数。
 *
 * この関数は以下の手順を実行します:
 * 1. スイッチの状態を64ビットの整数に変換します。
 * 2. 全てオフの状態を特別扱いします。
 * 3. 入力のSHA-256ハッシュを生成します。
 * 4. ハッシュを17個のパラメータに分割し、それぞれ0-99の範囲にします。
 *
 * @async
 * @function trSetDataParams
 * @returns {Promise<void>} データパラメータが設定されたときに解決されるPromise。
 */
async function trSetDataParams() {
  // スイッチの状態を64ビットの整数に変換
  const input = BigInt(`0b${trGridDataToString()}`)

  // 全てオフの状態を特別扱いしない
  const hashInput = input === 0n ? 'all_off' : input.toString()

  // SHA-256ハッシュを生成
  const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(hashInput))
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

  // ハッシュを17個のパラメータに分割（各パラメータは0-99の範囲）
  trDataParams = []
  for (let i = 0; i < 17; i++) {
    const part = hashHex.substr(i * 3, 3)
    trDataParams.push(parseInt(part, 16) % 100)
  }

  trSineCount = 0
}

function trChromaticGetColor() {
  const colors = {}

  // カラー
  for (let i = 1; i <= 5; i++) {
    colors[`color${i}`] = color(
      map(trDataParams[0 + i], 0, 99, 0, 360),
      map(trDataParams[3 + i], 0, 99, 30, 100),
      map(trDataParams[6 + i], 0, 99, 50, 100),
    )
  }

  return colors
}

function trAchromaticGetColor() {
  const colors = {}

  // 無彩色
  for (let i = 1; i <= 12; i++) {
    colors[`color${i}`] = color(
      map(trDataParams[0 + i], 0, 99, 0, 360),
      map(trDataParams[1 + i], 0, 99, 0, 0),
      map(trDataParams[2 + i], 0, 99, 0, 100),
    )
  }

  return colors
}

function trCalcSineCount(sineValue) {
  // 配列に新しい値を追加
  trSineData.push(sineValue)

  // 配列が2つ以上の要素を持っている場合、ゼロクロスを検出
  if (trSineData.length >= 2) {
    const prevValue = trSineData[trSineData.length - 2]
    const currentValue = trSineData[trSineData.length - 1]

    // -0.99 など、少し余裕を持たせた閾値を使用
    if (prevValue > 0.99 && currentValue <= 0.99) {
      trSineCount++
    }
  }

  // 必要に応じて配列のサイズを制限（メモリ管理）
  if (trSineData.length > 1000) {
    trSineData.shift()
  }
}
