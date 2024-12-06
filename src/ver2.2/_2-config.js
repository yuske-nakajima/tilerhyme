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

const TR_AUTO_MODE_INTERVAL = 60
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
}

function trChromaticGetColor() {
  const colors = {}

  // カラー
  for (let i = 1; i <= 12; i++) {
    colors[`color${i}`] = color(
      map(trDataParams[0 + i], 0, 99, 0, 360),
      map(trDataParams[1 + i], 0, 99, 30, 40),
      map(trDataParams[2 + i], 0, 99, 90, 100),
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

// バリエーション
function _trDrawTilePattern1(func) {
  return function (_x, _y, tileSize) {
    const x = _x * tileSize
    const y = _y * tileSize

    const { color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12 } =
      trChromaticGetColor()

    const p1 = trDataParams[_x % trDataParams.length]
    const p2 = trDataParams[_y % trDataParams.length]
    const p3 = p1 + p2

    const noiseList = []
    for (let i = 0.1; i <= 1; i += 0.1) {
      noiseList.push(i)
    }

    // frameCount で 0.1 から 1 から 0.1 までの範囲の値を取得
    // 0.1 から 1 まで
    // 1 から 0.1 まで
    // 線形補間
    const sineValue = sin(
      frameCount * map(p1, 0, 99, 0.01, 0.3) +
        trDataParams[_x % trDataParams.length] +
        trDataParams[_y % trDataParams.length],
    )
    const interpolationFactor = map(sineValue, -1, 1, 0.1, 1)

    const _tileSize = tileSize * noiseList[round(noise(_x + _y + p2) * 10) % noiseList.length] * interpolationFactor

    trDrawBlock(() => {
      func({
        _x,
        _y,
        x,
        y,
        tileSize,
        color1,
        color2,
        color3,
        color4,
        color5,
        color6,
        color7,
        color8,
        color9,
        color10,
        color11,
        color12,
        _tileSize,
        p1,
        p2,
        p3,
      })
    })
  }
}

const trDrawTilePattern1_1 = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color1, color2, _tileSize, p1, p2 } = params

  rectMode(CENTER)

  fill(color1)
  stroke(color2)
  strokeWeight(tileSize * 0.05)
  strokeCap(SQUARE)
  translate(x, y)

  if (p1 % 2 === 0) {
    if (p2 % 2 === 0) {
      rotate(PI / 4)
    }
    rect(0, 0, _tileSize)
  } else {
    ellipse(0, 0, _tileSize)
  }
})

const trDrawTilePattern1_1_nofill = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color1, color2, color3, _tileSize, p1, p2 } = params

  rectMode(CENTER)

  noFill()
  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)
  translate(x, y)

  if (trDataParams[0] % 2 === 0) {
    if (ceil(x + y) % 3 === 0) {
      stroke(color1)
    } else if (ceil(x + y) % 3 === 1) {
      stroke(color2)
    } else {
      stroke(color3)
    }
  } else {
    stroke(color1)
  }

  if (p1 % 2 === 0) {
    if (p2 % 2 === 0) {
      rotate(PI / 4)
    }
    rect(0, 0, _tileSize)
  } else {
    ellipse(0, 0, _tileSize)
  }
})

const trDrawTilePattern1_2_1 = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color4, color5, _tileSize } = params

  rectMode(CENTER)

  fill(color4)
  stroke(color5)
  strokeWeight(tileSize * 0.05)
  strokeCap(SQUARE)
  translate(x, y)

  rect(0, 0, _tileSize)
})

const trDrawTilePattern1_2_1_nofill = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color1, color2, color3, _tileSize } = params

  rectMode(CENTER)

  noFill()

  if (trDataParams[0] % 2 === 0) {
    if (ceil(x + y) % 3 === 0) {
      stroke(color1)
    } else if (ceil(x + y) % 3 === 1) {
      stroke(color2)
    } else {
      stroke(color3)
    }
  } else {
    stroke(color1)
  }

  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)
  translate(x, y)

  rect(0, 0, _tileSize)
})

const trDrawTilePattern1_2_2 = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color7, color8, _tileSize } = params

  rectMode(CENTER)

  fill(color7)
  stroke(color8)
  strokeWeight(tileSize * 0.05)
  strokeCap(SQUARE)
  translate(x, y)

  rotate(PI / 4)
  rect(0, 0, _tileSize)
})

const trDrawTilePattern1_2_2_nofill = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color1, color2, color3, _tileSize } = params

  rectMode(CENTER)

  noFill()

  if (trDataParams[0] % 2 === 0) {
    if (ceil(x + y) % 3 === 0) {
      stroke(color1)
    } else if (ceil(x + y) % 3 === 1) {
      stroke(color2)
    } else {
      stroke(color3)
    }
  } else {
    stroke(color1)
  }

  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)
  translate(x, y)

  rotate(PI / 4)
  rect(0, 0, _tileSize)
})

const trDrawTilePattern1_2_3 = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color10, color11, _tileSize, p2 } = params

  rectMode(CENTER)

  fill(color10)
  stroke(color11)
  strokeWeight(tileSize * 0.05)
  strokeCap(SQUARE)
  translate(x, y)

  if (p2 % 2 === 0) {
    rotate(PI / 4)
  }
  rect(0, 0, _tileSize)
})

const trDrawTilePattern1_2_3_nofill = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color1, color2, color3, _tileSize, p2 } = params

  rectMode(CENTER)

  noFill()

  if (trDataParams[0] % 2 === 0) {
    if (ceil(x + y) % 3 === 0) {
      stroke(color1)
    } else if (ceil(x + y) % 3 === 1) {
      stroke(color2)
    } else {
      stroke(color3)
    }
  } else {
    stroke(color1)
  }

  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)
  translate(x, y)

  if (p2 % 2 === 0) {
    rotate(PI / 4)
  }
  rect(0, 0, _tileSize)
})

const trDrawTilePattern1_3 = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color1, color2, _tileSize } = params

  rectMode(CENTER)

  fill(color1)
  stroke(color2)
  strokeWeight(tileSize * 0.05)
  strokeCap(SQUARE)
  translate(x, y)

  ellipse(0, 0, _tileSize)
})

const trDrawTilePattern1_3_nofill = _trDrawTilePattern1((params) => {
  const { x, y, tileSize, color1, color2, color3, _tileSize } = params

  rectMode(CENTER)

  noFill()

  if (trDataParams[0] % 2 === 0) {
    if (ceil(x + y) % 3 === 0) {
      stroke(color1)
    } else if (ceil(x + y) % 3 === 1) {
      stroke(color2)
    } else {
      stroke(color3)
    }
  } else {
    stroke(color1)
  }

  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)
  translate(x, y)

  ellipse(0, 0, _tileSize)
})

function _trDrawTilePattern2(func) {
  return function (_x, _y, tileSize) {
    const x = _x * tileSize
    const y = _y * tileSize
    const centerPos = createVector(x + tileSize / 2, y + tileSize / 2)

    const { color1, color2, color3, color4, color5 } = trChromaticGetColor()

    const pointList = [
      { x: x + tileSize * 0.5, y: y },
      { x: x + tileSize, y: y + tileSize * 0.5 },
      { x: x + tileSize * 0.5, y: y + tileSize },
      { x: x, y: y + tileSize * 0.5 },
    ]

    const p1 =
      trDataParams[((_x + _y) * trDataParams[(_x + _y) % trDataParams.length]) % trDataParams.length] % pointList.length
    const p2 = (p1 + 1) % pointList.length
    const p3 = (p1 + 2) % pointList.length
    const p4 = (p1 + 3) % pointList.length

    const noiseList = []
    for (let i = 0.1; i <= 1; i += 0.1) {
      noiseList.push(i)
    }

    const sineValue = sin(frameCount * 50 * 0.004)
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

    const interpolationFactor = map(sineValue, -1, 1, 0.01, 1)

    const _tileSize = tileSize * interpolationFactor

    trDrawBlock(() => {
      func({
        _x,
        _y,
        x,
        y,
        tileSize,
        color1,
        color2,
        color3,
        color4,
        color5,
        _tileSize,
        pointList,
        p1,
        p2,
        p3,
        p4,
        centerPos,
        sineValue,
        interpolationFactor,
      })
    })
  }
}

const trDrawTilePattern2_1_1 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, color2, pointList, p1, p2 } = params

  noFill()
  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)

  const xTileSize = pointList[p1].x === pointList[p2].x ? 0 : _tileSize

  stroke(color1)
  line(
    pointList[p1].x + xTileSize,
    pointList[p1].y + xTileSize,
    pointList[p2].x + xTileSize,
    pointList[p2].y + xTileSize,
  )

  stroke(color2)
  line(pointList[p1].x, pointList[p1].y, pointList[p2].x, pointList[p2].y)
})

const trDrawTilePattern2_1_2 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, color2, pointList, p1, p3 } = params

  noFill()
  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)

  stroke(color1)
  line(pointList[p1].x, pointList[p1].y, pointList[p3].x, pointList[p3].y)

  const xTileSize = pointList[p1].x === pointList[p3].x ? 0 : _tileSize
  const yTileSize = pointList[p1].y === pointList[p3].y ? 0 : _tileSize

  stroke(color2)
  line(pointList[p1].x, pointList[p1].y, pointList[p3].x + xTileSize, pointList[p3].y + yTileSize)
})

const trDrawTilePattern2_1_3 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, color2, pointList, p1, p2 } = params

  noFill()
  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)

  stroke(color1)
  line(pointList[p1].x, pointList[p1].y, pointList[p1].x + _tileSize / 2, pointList[p1].y)

  stroke(color2)
  line(pointList[p2].x, pointList[p2].y, pointList[p2].x, pointList[p2].y + _tileSize)
})

const trDrawTilePattern2_1_4 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, color2, pointList, p1, p2 } = params

  noFill()
  stroke(color1)
  strokeWeight(tileSize * 0.1)
  strokeCap(SQUARE)

  line(pointList[p1].x, pointList[p1].y, pointList[p1].x + _tileSize / 2, pointList[p1].y)

  stroke(color2)
  line(pointList[p2].x, pointList[p2].y, pointList[p2].x, pointList[p2].y + _tileSize / 2)
})

const trDrawTilePattern2_2_1_1 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)
  line(pointList[0].x, pointList[0].y, pointList[0].x, pointList[0].y + _tileSize)
})

const trDrawTilePattern2_2_1_2 = _trDrawTilePattern2((params) => {
  const { y, _tileSize, tileSize, color1, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)
  line(pointList[0].x, y, pointList[0].x, pointList[0].y - _tileSize)
})

const trDrawTilePattern2_2_1_3 = _trDrawTilePattern2((params) => {
  const { _x, _y, _tileSize, tileSize, color1, color2, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(pointList[0].x, pointList[0].y, pointList[0].x, pointList[0].y + _tileSize)
})

const trDrawTilePattern2_2_1_4 = _trDrawTilePattern2((params) => {
  const { _x, _y, y, _tileSize, tileSize, color1, color2, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(pointList[0].x, y, pointList[0].x, pointList[0].y - _tileSize)
})

const trDrawTilePattern2_2_1_5 = _trDrawTilePattern2((params) => {
  const { x, _y, y, tileSize, color1, color2, sineValue } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  if (_y % 2 === 0) {
    stroke(color1)
    line(x, y + tileSize / 2, x, y + tileSize / 2 + tileSize * sineValue * 1.5)

    stroke(color2)
    line(x, y, x, y + tileSize)
  }
})

const trDrawTilePattern2_2_1_6 = _trDrawTilePattern2((params) => {
  const { _x, x, _y, y, tileSize, color1, color2, sineValue } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const s1 = map(sineValue, -1, 1, 0, 1)

  if (_y % 2 === 0) {
    if (_y % 4 === 0) {
      stroke(color1)
    } else {
      stroke(color2)
    }
    if (
      ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 0 ||
      ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 3 ||
      ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 5
    ) {
      switch (trSineCount % 2) {
        case 0:
          line(x, y, x, y + tileSize * s1)
          line(x, y, x, y - tileSize * s1)
          break
        case 1:
          // 回転
          translate(x, y)
          rotate(PI * sineValue)
          line(0, 0, 0, 0 - tileSize)
          line(0, 0, 0, 0 + tileSize)
          break
        default:
          break
      }
    } else {
      line(x, y - tileSize, x, y + tileSize)
    }
  }
})

const trDrawTilePattern2_2_2_1 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)
  line(pointList[1].x, pointList[1].y, pointList[1].x - _tileSize, pointList[1].y)
})

const trDrawTilePattern2_2_2_2 = _trDrawTilePattern2((params) => {
  const { x, _tileSize, tileSize, color1, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)
  line(x, pointList[1].y, pointList[1].x - _tileSize, pointList[1].y)
})

const trDrawTilePattern2_2_2_3 = _trDrawTilePattern2((params) => {
  const { _x, _y, _tileSize, tileSize, color1, color2, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(pointList[1].x, pointList[1].y, pointList[1].x - _tileSize, pointList[1].y)
})

const trDrawTilePattern2_2_2_4 = _trDrawTilePattern2((params) => {
  const { _x, _y, x, _tileSize, tileSize, color1, color2, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(x, pointList[1].y, pointList[1].x - _tileSize, pointList[1].y)
})

const trDrawTilePattern2_2_2_5 = _trDrawTilePattern2((params) => {
  const { _x, x, y, tileSize, color1, color2, sineValue } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  if (_x % 2 === 0) {
    stroke(color1)
    line(x + tileSize / 2, y, x + tileSize / 2 + tileSize * sineValue * 1.5, y)

    stroke(color2)
    line(x, y, x + tileSize, y)
  }
})

const trDrawTilePattern2_2_2_6 = _trDrawTilePattern2((params) => {
  const { _x, x, _y, y, tileSize, color1, color2, sineValue } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const s1 = map(sineValue, -1, 1, 0, 1)

  if (_x % 2 === 0) {
    if (_x % 4 === 0) {
      stroke(color1)
    } else {
      stroke(color2)
    }
    if (
      ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 0 ||
      ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 3 ||
      ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 5
    ) {
      switch (trSineCount % 2) {
        case 0:
          line(x, y, x + tileSize * s1, y)
          line(x, y, x - tileSize * s1, y)
          break
        case 1:
          // 回転
          translate(x, y)
          rotate(PI * sineValue)
          line(0, 0, 0 - tileSize, 0)
          line(0, 0, 0 + tileSize, 0)
          break
        default:
          break
      }
    } else {
      line(x - tileSize, y, x + tileSize, y)
    }
  }
})

const trDrawTilePattern2_2_3_1 = _trDrawTilePattern2((params) => {
  const { x, y, tileSize, color1, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const currentX = x + tileSize * interpolationFactor
  const currentY = y + tileSize * interpolationFactor

  stroke(color1)
  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_2 = _trDrawTilePattern2((params) => {
  const { x, y, tileSize, color1, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)

  const currentX = x + tileSize * -interpolationFactor
  const currentY = y + tileSize * -interpolationFactor

  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_3 = _trDrawTilePattern2((params) => {
  const { x, y, tileSize, color1, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)

  const currentX = x + tileSize * -interpolationFactor
  const currentY = y + tileSize * interpolationFactor

  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_4 = _trDrawTilePattern2((params) => {
  const { x, y, tileSize, color1, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)

  const currentX = x + tileSize * interpolationFactor
  const currentY = y + tileSize * -interpolationFactor

  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_5 = _trDrawTilePattern2((params) => {
  const { _x, _y, x, y, tileSize, color1, color2, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const currentX = x + tileSize * interpolationFactor
  const currentY = y + tileSize * interpolationFactor

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_6 = _trDrawTilePattern2((params) => {
  const { _x, _y, x, y, tileSize, color1, color2, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const currentX = x + tileSize * -interpolationFactor
  const currentY = y + tileSize * -interpolationFactor

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_7 = _trDrawTilePattern2((params) => {
  const { _x, _y, x, y, tileSize, color1, color2, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const currentX = x + tileSize * -interpolationFactor
  const currentY = y + tileSize * interpolationFactor

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_8 = _trDrawTilePattern2((params) => {
  const { _x, _y, x, y, tileSize, color1, color2, interpolationFactor } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const currentX = x + tileSize * interpolationFactor
  const currentY = y + tileSize * -interpolationFactor

  if ((_x + _y) % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }

  line(x, y, currentX, currentY)
})

const trDrawTilePattern2_2_3_9 = _trDrawTilePattern2((params) => {
  const { _x, x, y, tileSize, color1, color2, sineValue } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const currentX = x + tileSize * sineValue * 1.5
  const currentY = y + tileSize * -sineValue * 1.5

  if (_x % 2 === 0) {
    stroke(color1)
    line(x, y, currentX, currentY)

    stroke(color2)
    line(x + tileSize / 2, y - tileSize / 2, x - tileSize / 2, y + tileSize / 2)
  }
})

const trDrawTilePattern2_2_3_10 = _trDrawTilePattern2((params) => {
  const { _x, x, y, tileSize, color1, color2, sineValue } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  const currentX = x - tileSize * -sineValue * 1.5
  const currentY = y + tileSize * sineValue * 1.5

  if (_x % 2 === 0) {
    stroke(color1)
    line(x, y, currentX, currentY)

    stroke(color2)
    line(x - tileSize / 2, y - tileSize / 2, x + tileSize / 2, y + tileSize / 2)
  }
})

const trDrawTilePattern2_2_3_1_1 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, pointList } = params

  noFill()
  stroke(color1)
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  line(pointList[0].x, pointList[0].y, pointList[0].x, pointList[0].y - _tileSize)
  line(pointList[3].x, pointList[0].y, pointList[0].x + _tileSize, pointList[0].y)
})

const trDrawTilePattern2_2_3_1_2 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, color2, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)
  line(pointList[3].x, pointList[0].y, pointList[0].x + _tileSize, pointList[0].y)

  stroke(color2)
  line(pointList[0].x, pointList[0].y, pointList[0].x, pointList[0].y - _tileSize)
})

const trDrawTilePattern2_2_3_2_1 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, pointList } = params

  noFill()
  stroke(color1)
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  line(pointList[0].x, pointList[0].y, pointList[0].x, pointList[0].y + _tileSize)
  line(pointList[3].x, pointList[0].y, pointList[0].x + _tileSize, pointList[0].y)
})

const trDrawTilePattern2_2_3_2_2 = _trDrawTilePattern2((params) => {
  const { _tileSize, tileSize, color1, color2, pointList } = params

  noFill()
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  strokeCap(SQUARE)

  stroke(color1)
  line(pointList[0].x, pointList[0].y, pointList[0].x, pointList[0].y + _tileSize)

  stroke(color2)
  line(pointList[3].x, pointList[0].y, pointList[0].x + _tileSize, pointList[0].y)
})

const trDrawTilePattern2_2_4_1 = _trDrawTilePattern2((params) => {
  const { x, y, _tileSize, tileSize, color1, color2 } = params

  translate(x, y)

  noFill()
  rectMode(CENTER)

  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))

  stroke(color1)
  arc(0 + _tileSize / 2, 0 + _tileSize / 2, _tileSize, _tileSize, PI, PI + HALF_PI)

  stroke(color2)
  arc(0 - _tileSize / 2, 0 - _tileSize / 2, _tileSize, _tileSize, 0, HALF_PI)
})

const trDrawTilePattern2_2_5_1 = _trDrawTilePattern2((params) => {
  const { x, y, _tileSize, tileSize, color1, color2 } = params

  translate(x, y)

  noFill()
  rectMode(CENTER)

  stroke(color1)
  strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
  // strokeWeight((map(sin(frameCount * 0.01 + x + y), -1, 1, 0.1, 1) * (tileSize * trDataParams[5])) / 400)

  stroke(color1)
  beginShape()
  vertex(0, 0 + _tileSize / 2)
  vertex(0, 0)
  endShape()

  stroke(color2)
  beginShape()
  vertex(0, 0)
  vertex(0 + _tileSize / 2, 0)
  endShape()

  stroke(color1)
  beginShape()
  vertex(0, 0 - _tileSize / 2)
  vertex(0, 0)
  endShape()

  stroke(color2)
  beginShape()
  vertex(0, 0)
  vertex(0 - _tileSize / 2, 0)
  endShape()
})

const trDrawTilePattern2_2_5_2 = _trDrawTilePattern2((params) => {
  const { _x, x, _y, y, _tileSize, tileSize, color1, color2, sineValue } = params

  const s1 = map(sineValue, -1, 1, 0, 1)

  translate(x, y)

  noFill()
  rectMode(CENTER)

  stroke(color1)
  strokeWeight(max((tileSize * trDataParams[5]) / 300, 1))
  const acceleration = (tileSize / 2) * s1

  if (
    ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 0 ||
    ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 3 ||
    ceil((_x + _y) / 2) % ceil(map(trDataParams[2], 0, 99, 2, 10)) === 5
  ) {
    switch (trSineCount % 2) {
      case 0:
        stroke(color1)
        beginShape()
        vertex(0, 0 + _tileSize / 2)
        vertex(0, 0)
        endShape()

        stroke(color2)
        beginShape()
        vertex(0, 0)
        vertex(0 + _tileSize / 2, 0)
        endShape()

        stroke(color1)
        beginShape()
        vertex(0, 0 - _tileSize / 2)
        vertex(0, 0)
        endShape()

        stroke(color2)
        beginShape()
        vertex(0, 0)
        vertex(0 - _tileSize / 2, 0)
        endShape()
        break
      case 1:
        // 回転
        rotate(PI * sineValue)

        stroke(color1)
        beginShape()
        vertex(0, 0)
        vertex(0, 0 + acceleration)
        endShape()

        stroke(color2)
        beginShape()
        vertex(0 + acceleration, 0)
        vertex(0, 0)
        endShape()

        stroke(color1)
        beginShape()
        vertex(0, 0)
        vertex(0, 0 - acceleration)
        endShape()

        stroke(color2)
        beginShape()
        vertex(0 - acceleration, 0)
        vertex(0, 0)
        endShape()
        break
      default:
        break
    }
  } else {
    stroke(color1)
    beginShape()
    vertex(0, 0 + _tileSize / 2)
    vertex(0, 0)
    endShape()

    stroke(color2)
    beginShape()
    vertex(0, 0)
    vertex(0 + _tileSize / 2, 0)
    endShape()

    stroke(color1)
    beginShape()
    vertex(0, 0 - _tileSize / 2)
    vertex(0, 0)
    endShape()

    stroke(color2)
    beginShape()
    vertex(0, 0)
    vertex(0 - _tileSize / 2, 0)
    endShape()
  }
})
// バリーション

const trFuncArray = [
  // trDrawTilePattern1_1, // 使わない
  // trDrawTilePattern1_2_1, // 使わない
  // trDrawTilePattern1_2_2, // 使わない
  // trDrawTilePattern1_2_3, // 使わない
  // trDrawTilePattern1_3, // 使わない
  // ○△□
  // trDrawTilePattern1_1_nofill,
  // trDrawTilePattern1_2_1_nofill,
  // trDrawTilePattern1_2_2_nofill,
  // trDrawTilePattern1_2_3_nofill,
  // trDrawTilePattern1_3_nofill,
  // □○△
  // ---
  // ニセホテイ
  // trDrawTilePattern2_1_1,
  // trDrawTilePattern2_1_2,
  // trDrawTilePattern2_1_3,
  // trDrawTilePattern2_1_4,
  // ニセホテイ
  // ---
  // 縦
  // trDrawTilePattern2_2_1_1,
  // trDrawTilePattern2_2_1_2,
  // trDrawTilePattern2_2_1_3,
  // trDrawTilePattern2_2_1_4,
  trDrawTilePattern2_2_1_5,
  trDrawTilePattern2_2_1_6,
  // 縦
  // ---
  // 横
  // trDrawTilePattern2_2_2_1,
  // trDrawTilePattern2_2_2_2,
  // trDrawTilePattern2_2_2_3,
  // trDrawTilePattern2_2_2_4,
  trDrawTilePattern2_2_2_5,
  trDrawTilePattern2_2_2_6,
  // 横
  // ---
  // 斜め
  // trDrawTilePattern2_2_3_1,
  // trDrawTilePattern2_2_3_2,
  // trDrawTilePattern2_2_3_3,
  // trDrawTilePattern2_2_3_4,
  // trDrawTilePattern2_2_3_5,
  // trDrawTilePattern2_2_3_6,
  // trDrawTilePattern2_2_3_7,
  // trDrawTilePattern2_2_3_8,
  trDrawTilePattern2_2_3_9,
  trDrawTilePattern2_2_3_10,
  // 斜め
  // ---
  // 格子の変形
  // trDrawTilePattern2_2_3_1_1,
  // trDrawTilePattern2_2_3_1_2,
  // trDrawTilePattern2_2_3_2_1,
  // trDrawTilePattern2_2_3_2_2,
  // 格子の変形
  // ---
  // 丸の変形
  trDrawTilePattern2_2_4_1,
  // 丸の変形
  // ---
  // 十字の変形
  trDrawTilePattern2_2_5_1,
  trDrawTilePattern2_2_5_2,
  // 十字の変形
]

/**
 * trDrawShape 関数は、指定された幅と高さに基づいて形状を描画します。
 * 幅と高さを100で割った値を使用して、trDataParams 配列の各パラメータに対して
 * 矩形を描画します。矩形は黒色で塗りつぶされ、指定された位置に描画されます。
 */
function trDrawShape() {
  // 画面全体をタイルで埋める
  // const tileSize = width / map(trDataParams[15], 0, 99, 5, 20) // タイルの基本サイズ
  const tileSize = width / 20 // タイルの基本サイズ
  const w = ceil(width / tileSize)
  const h = ceil(height / tileSize)

  const value = trDataParams.reduce((acc, cur) => acc + cur, 0)
  const mode = value % trFuncArray.length

  for (let y = 0; y <= h; y++) {
    for (let x = 0; x <= w; x++) {
      trFuncArray[mode](x, y, tileSize)
    }
  }
}
