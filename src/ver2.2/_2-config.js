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

const TR_AUTO_MODE_INTERVAL = 120

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

// バリエーション
function _trDrawTilePattern1(func) {
  return function (_x, _y, tileSize) {
    const x = _x * tileSize
    const y = _y * tileSize

    const { color1, color2, color3, color4, color5 } = trChromaticGetColor()

    const p1 = trDataParams[_x % trDataParams.length]
    const p2 = trDataParams[_y % trDataParams.length]
    const p3 = p1 + p2

    const v1 = ceil(_x + _y)
    const v2 = ceil(_x - _y) < 0 ? ceil(_x - _y) * -1 : ceil(_x - _y)

    const noiseList = []
    for (let i = 0.1; i <= 1; i += 0.1) {
      noiseList.push(i)
    }

    // frameCount で 0.1 から 1 から 0.1 までの範囲の値を取得
    // 0.1 から 1 まで
    // 1 から 0.1 まで
    // 線形補間
    const sineValue = sin(frameCount * 50 * 0.004)

    const gap = 1 - map(trDataParams[7], 0, 99, 0.1, 0.5)
    const _tileSize = tileSize * sineValue
    const tileSize2 = tileSize * gap
    const _tileSize2 = tileSize * gap * sineValue

    const squareSize = tileSize / sqrt(2)
    const _squareSize = squareSize * sineValue
    const squareSize2 = squareSize * gap
    const _squareSize2 = squareSize2 * sineValue

    trCalcSineCount(sineValue)

    trDrawBlock(() => {
      func({
        _x,
        _y,
        x,
        y,
        tileSize,
        _tileSize,
        tileSize2,
        _tileSize2,
        squareSize,
        _squareSize,
        squareSize2,
        _squareSize2,
        color1,
        color2,
        color3,
        color4,
        color5,
        sineValue,
        p1,
        p2,
        p3,
        v1,
        v2,
      })
    })
  }
}

function _trDrawRectEllipseSquare(func) {
  return _trDrawTilePattern1((params) => {
    const { x, y, tileSize2, _tileSize2, squareSize2, _squareSize2, p1, p2 } = params

    noStroke()
    rectMode(CENTER)
    translate(x, y)

    func(params)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      switch ((p1 + p2) % 3) {
        case 0:
          rect(0, 0, _tileSize2)
          break
        case 1:
          rotate(PI / 4)
          rect(0, 0, _squareSize2)
          break
        default:
          ellipse(0, 0, _tileSize2)
          break
      }
    } else {
      switch ((p1 + p2) % 3) {
        case 0:
          rect(0, 0, tileSize2)
          break
        case 1:
          rotate(PI / 4)
          rect(0, 0, squareSize2)
          break
        default:
          ellipse(0, 0, tileSize2)
          break
      }
    }
  })
}

const trDrawRectEllipseSquare11 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRectEllipseSquare12 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRectEllipseSquare13 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRectEllipseSquare14 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRectEllipseSquare15 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRectEllipseSquare16 = _trDrawRectEllipseSquare((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawRectEllipseSquare17 = _trDrawRectEllipseSquare((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawRectEllipseSquare18 = _trDrawRectEllipseSquare((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawRectEllipseSquare21 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRectEllipseSquare22 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRectEllipseSquare23 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRectEllipseSquare24 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRectEllipseSquare25 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRectEllipseSquare26 = _trDrawRectEllipseSquare((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawRectEllipseSquare27 = _trDrawRectEllipseSquare((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawRectEllipseSquare28 = _trDrawRectEllipseSquare((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

function _trDrawRect(func) {
  return _trDrawTilePattern1((params) => {
    const { x, y, tileSize2, _tileSize2 } = params

    rectMode(CENTER)
    func(params)

    translate(x, y)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      rect(0, 0, _tileSize2)
    } else {
      rect(0, 0, tileSize2)
    }
  })
}

const trDrawRect11 = _trDrawRect((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRect12 = _trDrawRect((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRect13 = _trDrawRect((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRect14 = _trDrawRect((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRect15 = _trDrawRect((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRect16 = _trDrawRect((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawRect17 = _trDrawRect((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawRect18 = _trDrawRect((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawRect21 = _trDrawRect((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRect22 = _trDrawRect((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRect23 = _trDrawRect((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRect24 = _trDrawRect((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRect25 = _trDrawRect((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRect26 = _trDrawRect((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawRect27 = _trDrawRect((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawRect28 = _trDrawRect((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

function _trDrawRectBig(func) {
  return _trDrawTilePattern1((params) => {
    const { x, y, tileSize, sineValue } = params
    rectMode(CENTER)
    noFill()
    func(params)
    translate(x, y)
    if (trSineCount < TR_SINE_ROOP_COUNT) {
      rect(0, 0, tileSize * 1.2 * sineValue)
    } else {
      rect(0, 0, tileSize * 1.2)
    }
  })
}

const trDrawRectBig21 = _trDrawRectBig((params) => {
  stroke(params.color1)
})

const trDrawRectBig22 = _trDrawRectBig((params) => {
  stroke(params.color2)
})

const trDrawRectBig23 = _trDrawRectBig((params) => {
  stroke(params.color3)
})

const trDrawRectBig24 = _trDrawRectBig((params) => {
  stroke(params.color4)
})

const trDrawRectBig25 = _trDrawRectBig((params) => {
  stroke(params.color5)
})

const trDrawRectBig26 = _trDrawRectBig((params) => {
  const { color1, color2, v1 } = params
  stroke([color1, color2][v1 % 2])
})

const trDrawRectBig27 = _trDrawRectBig((params) => {
  const { color3, color4, _x } = params
  stroke([color3, color4][_x % 2])
})

const trDrawRectBig28 = _trDrawRectBig((params) => {
  const { color1, color5, _y } = params
  stroke([color5, color1][_y % 2])
})

function _trDrawSquare(func) {
  return _trDrawTilePattern1((params) => {
    const { x, y, squareSize, _squareSize } = params

    rectMode(CENTER)
    func(params)

    translate(x, y)

    rotate(PI / 4)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      rect(0, 0, _squareSize)
    } else {
      rect(0, 0, squareSize)
    }
  })
}

const trDrawSquare11 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawSquare12 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color2)
})

const trDrawSquare13 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color3)
})

const trDrawSquare14 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color4)
})

const trDrawSquare15 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color5)
})

const trDrawSquare16 = _trDrawSquare((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawSquare17 = _trDrawSquare((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawSquare18 = _trDrawSquare((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawSquare21 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawSquare22 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color2)
})

const trDrawSquare23 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color3)
})

const trDrawSquare24 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color4)
})

const trDrawSquare25 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color5)
})

const trDrawSquare26 = _trDrawSquare((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawSquare27 = _trDrawSquare((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawSquare28 = _trDrawSquare((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

function trDrawSquareBig(func) {
  return _trDrawTilePattern1((params) => {
    const { _x, x, _y, y, squareSize, _squareSize, color1, color2, v1 } = params

    rectMode(CENTER)
    noFill()
    func(params)

    translate(x, y)

    rotate(PI / 4)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      rect(0, 0, _squareSize * 1.5)
    } else {
      rect(0, 0, squareSize * 1.5)
    }
  })
}

const trDrawSquareBig21 = trDrawSquareBig((params) => {
  stroke(params.color1)
})

const trDrawSquareBig22 = trDrawSquareBig((params) => {
  stroke(params.color2)
})

const trDrawSquareBig23 = trDrawSquareBig((params) => {
  stroke(params.color3)
})

const trDrawSquareBig24 = trDrawSquareBig((params) => {
  stroke(params.color4)
})

const trDrawSquareBig25 = trDrawSquareBig((params) => {
  stroke(params.color5)
})

const trDrawSquareBig26 = trDrawSquareBig((params) => {
  const { color1, color2, v1 } = params
  stroke([color1, color2][v1 % 2])
})

const trDrawSquareBig27 = trDrawSquareBig((params) => {
  const { color3, color4, _x } = params
  stroke([color3, color4][_x % 2])
})

const trDrawSquareBig28 = trDrawSquareBig((params) => {
  const { color1, color5, _y } = params
  stroke([color5, color1][_y % 2])
})

function _trDrawEllipse(func) {
  return _trDrawTilePattern1((params) => {
    const { x, y, tileSize2, _tileSize2 } = params

    rectMode(CENTER)
    func(params)

    translate(x, y)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      ellipse(0, 0, _tileSize2)
    } else {
      ellipse(0, 0, tileSize2)
    }
  })
}

const trDrawEllipse11 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawEllipse12 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color2)
})

const trDrawEllipse13 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color3)
})

const trDrawEllipse14 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color4)
})

const trDrawEllipse15 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color5)
})

const trDrawEllipse16 = _trDrawEllipse((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawEllipse17 = _trDrawEllipse((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawEllipse18 = _trDrawEllipse((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawEllipse21 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawEllipse22 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color2)
})

const trDrawEllipse23 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color3)
})

const trDrawEllipse24 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color4)
})

const trDrawEllipse25 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color5)
})

const trDrawEllipse26 = _trDrawEllipse((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawEllipse27 = _trDrawEllipse((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawEllipse28 = _trDrawEllipse((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

function _trDrawEllipseBig(func) {
  return _trDrawTilePattern1((params) => {
    const { _x, x, _y, y, tileSize, _tileSize, color1, color2, v1 } = params

    rectMode(CENTER)
    noFill()
    func(params)

    translate(x, y)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      ellipse(0, 0, _tileSize * 1.2)
    } else {
      ellipse(0, 0, tileSize * 1.2)
    }
  })
}

const trDrawEllipseBig21 = _trDrawEllipseBig((params) => {
  stroke(params.color1)
})

const trDrawEllipseBig22 = _trDrawEllipseBig((params) => {
  stroke(params.color2)
})

const trDrawEllipseBig23 = _trDrawEllipseBig((params) => {
  stroke(params.color3)
})

const trDrawEllipseBig24 = _trDrawEllipseBig((params) => {
  stroke(params.color4)
})

const trDrawEllipseBig25 = _trDrawEllipseBig((params) => {
  stroke(params.color5)
})

const trDrawEllipseBig26 = _trDrawEllipseBig((params) => {
  const { color1, color2, v1 } = params
  stroke([color1, color2][v1 % 2])
})

const trDrawEllipseBig27 = _trDrawEllipseBig((params) => {
  const { color3, color4, _x } = params
  stroke([color3, color4][_x % 2])
})

const trDrawEllipseBig28 = _trDrawEllipseBig((params) => {
  const { color1, color5, _y } = params
  stroke([color5, color1][_y % 2])
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

    trCalcSineCount(sineValue)

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

function _trDrawVerticalRotate(func) {
  return _trDrawTilePattern2((params) => {
    const { _x, x, _y, y, tileSize, color1, color2, color3, sineValue } = params

    noFill()
    strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
    strokeCap(SQUARE)

    const s1 = map(sineValue, -1, 1, 0, 1)
    func(params)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      switch (trSineCount % 2) {
        case 0:
          line(x, y - 1, x, y + (tileSize / 2) * s1)
          line(x, y + 1, x, y - (tileSize / 2) * s1)
          break
        case 1:
          // 回転
          translate(x, y)
          rotate(PI * sineValue)
          line(0, 0 + 1, 0, 0 - tileSize / 2)
          line(0, 0 - 1, 0, 0 + tileSize / 2)
          break
        default:
          break
      }
    } else {
      line(x, y - 1, x, y + (tileSize / 2) * 1.01)
      line(x, y + 1, x, y - (tileSize / 2) * 1.01)

      if (trDataParams[3] % 2 === 0) {
        for (let i = 0; i < 4; i++) {
          strokeWeight(1)
          const currentX = x + (tileSize / 4) * i

          line(currentX, y - 1, currentX, y + (tileSize / 2) * 1.01)
          line(currentX, y + 1, currentX, y - (tileSize / 2) * 1.01)
        }
      }
    }
  })
}

const trDrawVerticalRotate11 = _trDrawVerticalRotate((params) => {
  stroke(params.color1)
})

const trDrawVerticalRotate12 = _trDrawVerticalRotate((params) => {
  stroke(params.color2)
})

const trDrawVerticalRotate13 = _trDrawVerticalRotate((params) => {
  stroke(params.color3)
})

const trDrawVerticalRotate14 = _trDrawVerticalRotate((params) => {
  stroke(params.color4)
})

const trDrawVerticalRotate15 = _trDrawVerticalRotate((params) => {
  stroke(params.color5)
})

const trDrawVerticalRotate16 = _trDrawVerticalRotate((params) => {
  const { _y, color1, color2 } = params
  if (_y % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }
})

const trDrawVerticalRotate17 = _trDrawVerticalRotate((params) => {
  const { _x, color3, color4 } = params
  if (_x % 2 === 0) {
    stroke(color3)
  } else {
    stroke(color4)
  }
})

function trDrawHorizontalRotate(func) {
  return _trDrawTilePattern2((params) => {
    const { x, y, tileSize, sineValue } = params

    noFill()
    strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
    strokeCap(SQUARE)

    const s1 = map(sineValue, -1, 1, 0, 1)

    func(params)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      switch (trSineCount % 2) {
        case 0:
          line(x - 1, y, x + (tileSize / 2) * s1, y)
          line(x + 1, y, x - (tileSize / 2) * s1, y)
          break
        case 1:
          // 回転
          translate(x, y)
          rotate(PI * sineValue)
          line(0 + 1, 0, 0 - tileSize / 2, 0)
          line(0 - 1, 0, 0 + tileSize / 2, 0)
          break
        default:
          break
      }
    } else {
      line(x - 1, y, x + (tileSize / 2) * 1.01, y)
      line(x + 1, y, x - (tileSize / 2) * 1.01, y)

      if (trDataParams[3] % 2 === 0) {
        for (let i = 0; i < 4; i++) {
          strokeWeight(1)
          const currentY = y + (tileSize / 4) * i

          line(x - 1, currentY, x + (tileSize / 2) * 1.01, currentY)
          line(x + 1, currentY, x - (tileSize / 2) * 1.01, currentY)
        }
      }
    }
  })
}

const trDrawHorizontalRotate11 = trDrawHorizontalRotate((params) => {
  stroke(params.color1)
})

const trDrawHorizontalRotate12 = trDrawHorizontalRotate((params) => {
  stroke(params.color2)
})

const trDrawHorizontalRotate13 = trDrawHorizontalRotate((params) => {
  stroke(params.color3)
})

const trDrawHorizontalRotate14 = trDrawHorizontalRotate((params) => {
  stroke(params.color4)
})

const trDrawHorizontalRotate15 = trDrawHorizontalRotate((params) => {
  stroke(params.color5)
})

const trDrawHorizontalRotate16 = trDrawHorizontalRotate((params) => {
  const { _y, color1, color2 } = params
  if (_y % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }
})

const trDrawHorizontalRotate17 = trDrawHorizontalRotate((params) => {
  const { _x, color3, color4 } = params
  if (_x % 2 === 0) {
    stroke(color3)
  } else {
    stroke(color4)
  }
})

function trDrawDiagonalRightRotate(func) {
  return _trDrawTilePattern2((params) => {
    const { _x, x, _y, y, tileSize, color1, color2, sineValue } = params

    const _strokeWeight = max((tileSize * trDataParams[5]) / 400, 1)

    noFill()
    strokeWeight(_strokeWeight)
    strokeCap(SQUARE)

    const currentX = x + tileSize * 1.01 * sineValue
    const currentY = y + tileSize * 1.01 * -sineValue

    func(params)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      switch (trSineCount % 2) {
        case 0:
          line(x, y, currentX, currentY)
          break
        default:
          // 回転
          translate(x, y)
          rotate(PI * 0.75 + PI * -sineValue)
          line(0 - tileSize * 0.5, 0, 0 + tileSize * 0.5, 0)
          break
      }
    } else {
      switch (trDataParams[3] % 3) {
        case 0:
          for (let i = 0; i < 4; i++) {
            strokeWeight(1)
            const _currentX = _x * tileSize + (tileSize / 4) * i - (tileSize / 4) * i
            const _currentY = _y * tileSize + (tileSize / 4) * i

            line(_currentX, _currentY, _currentX + tileSize * 1.01, _currentY - tileSize * 1.01)
          }
          break
        case 1:
          for (let i = 0; i < 4; i++) {
            strokeWeight(1)
            const _currentX = _x * tileSize - (tileSize / 4) * i + (tileSize / 4) * i
            const _currentY = _y * tileSize - (tileSize / 4) * i

            line(_currentX, _currentY, _currentX - tileSize * 1.01, _currentY - tileSize * 1.01)
          }
          break
        default:
          break
      }

      strokeWeight(_strokeWeight)
      line(x, y, x + tileSize * 1.01, y - tileSize * 1.01)
    }
  })
}

const trDrawDiagonalRightRotate11 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color1)
})

const trDrawDiagonalRightRotate12 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color2)
})

const trDrawDiagonalRightRotate13 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color3)
})

const trDrawDiagonalRightRotate14 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color4)
})

const trDrawDiagonalRightRotate15 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color5)
})

const trDrawDiagonalRightRotate16 = trDrawDiagonalRightRotate((params) => {
  const { _x, color1, color2 } = params
  stroke(_x % 2 ? color1 : color2)
})

const trDrawDiagonalRightRotate17 = trDrawDiagonalRightRotate((params) => {
  const { _x, _y, color3, color4 } = params
  stroke((_x + _y) % 2 ? color3 : color4)
})

function _trDrawDiagonalLeftRotate(func) {
  return _trDrawTilePattern2((params) => {
    const { _x, x, _y, y, tileSize, color1, color2, sineValue } = params

    const _strokeWeight = max((tileSize * trDataParams[5]) / 400, 1)

    noFill()
    strokeWeight(_strokeWeight)
    strokeCap(SQUARE)

    const currentX = x - tileSize * 1.01 * -sineValue
    const currentY = y + tileSize * 1.01 * sineValue

    func(params)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      switch (trSineCount % 2) {
        case 0:
          line(x, y, currentX, currentY)
          break
        default:
          // 回転
          translate(x, y)
          rotate(PI * 0.25 - PI * sineValue)
          line(0 - tileSize * 0.5, 0, 0 + tileSize * 0.5, 0)
          break
      }
    } else {
      switch (trDataParams[3] % 3) {
        case 0:
          for (let i = 0; i < 4; i++) {
            strokeWeight(1)
            const _currentX = _x * tileSize - (tileSize / 4) * i + (tileSize / 4) * i
            const _currentY = _y * tileSize + (tileSize / 4) * i

            line(_currentX, _currentY, _currentX - tileSize * 1.01, _currentY - tileSize * 1.01)
          }
          break
        case 1:
          for (let i = 0; i < 4; i++) {
            strokeWeight(1)
            const _currentX = _x * tileSize + (tileSize / 4) * i - (tileSize / 4) * i
            const _currentY = _y * tileSize + (tileSize / 4) * i

            line(_currentX, _currentY, _currentX + tileSize * 1.01, _currentY - tileSize * 1.01)
          }
          break
        default:
          break
      }
      strokeWeight(_strokeWeight)
      line(x, y, x - tileSize * 1.01, y - tileSize * 1.01)
    }
  })
}

const trDrawDiagonalLeftRotate11 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color1)
})

const trDrawDiagonalLeftRotate12 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color2)
})

const trDrawDiagonalLeftRotate13 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color3)
})

const trDrawDiagonalLeftRotate14 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color4)
})

const trDrawDiagonalLeftRotate15 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color5)
})

const trDrawDiagonalLeftRotate16 = _trDrawDiagonalLeftRotate((params) => {
  const { _x, color1, color2 } = params
  stroke(_x % 2 ? color1 : color2)
})

const trDrawDiagonalLeftRotate17 = _trDrawDiagonalLeftRotate((params) => {
  const { _x, _y, color3, color4 } = params
  stroke((_x + _y) % 2 ? color3 : color4)
})

function trDrawEllipseStrokeRotate(func) {
  return _trDrawTilePattern2((params) => {
    const { x, y, _tileSize, tileSize, sineValue } = params

    translate(x, y)

    noFill()
    rectMode(CENTER)

    const { color1, color2 } = func(params)

    strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      switch (trSineCount % 2) {
        case 0:
          stroke(color1)
          arc(0 + _tileSize / 2, 0 + _tileSize / 2, _tileSize, _tileSize, PI, PI + HALF_PI)

          stroke(color2)
          arc(0 - _tileSize / 2, 0 - _tileSize / 2, _tileSize, _tileSize, 0, HALF_PI)
          break
        default:
          rotate(PI * sineValue)

          stroke(color1)
          arc(0 + tileSize / 2, 0 + tileSize / 2, tileSize, tileSize, PI, PI + HALF_PI)

          stroke(color2)
          arc(0 - tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, 0, HALF_PI)
          break
      }
    } else {
      stroke(color1)
      arc(0 - tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, 0, HALF_PI)

      stroke(color2)
      arc(0 + tileSize / 2, 0 + tileSize / 2, tileSize, tileSize, PI, PI + HALF_PI)
    }
  })
}

const trDrawEllipseStrokeRotate11 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color1, color2: params.color2 }
})

const trDrawEllipseStrokeRotate12 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color2, color2: params.color3 }
})

const trDrawEllipseStrokeRotate13 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color3, color2: params.color4 }
})

const trDrawEllipseStrokeRotate14 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color4, color2: params.color5 }
})

const trDrawEllipseStrokeRotate15 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color5, color2: params.color1 }
})

function _trDrawCrossRotate(func) {
  return _trDrawTilePattern2((params) => {
    const { x, y, _tileSize, tileSize, sineValue } = params

    translate(x, y)

    const acceleration = tileSize * 0.4
    const { color1, color2 } = func(params)

    noFill()

    stroke(color1)
    strokeWeight(max((tileSize * trDataParams[5]) / 300, 1))
    strokeCap(SQUARE)

    if (trSineCount < TR_SINE_ROOP_COUNT) {
      switch (trSineCount % 2) {
        case 0:
          stroke(color1)
          beginShape()
          vertex(0, 0 + _tileSize / 2)
          vertex(0, 0)
          endShape()

          stroke(color1)
          beginShape()
          vertex(0, 0 - _tileSize / 2)
          vertex(0, 0)
          endShape()

          stroke(color2)
          beginShape()
          vertex(0, 0)
          vertex(0 + _tileSize / 2, 0)
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

          stroke(color1)
          beginShape()
          vertex(0, 0)
          vertex(0, 0 - acceleration)
          endShape()

          stroke(color2)
          beginShape()
          vertex(0 + acceleration, 0)
          vertex(0, 0)
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
      vertex(0, 0 + tileSize / 2)
      vertex(0, 0)
      endShape()

      stroke(color1)
      beginShape()
      vertex(0, 0 - tileSize / 2)
      vertex(0, 0)
      endShape()

      stroke(color2)
      beginShape()
      vertex(0, 0)
      vertex(0 + tileSize / 2, 0)
      endShape()

      stroke(color2)
      beginShape()
      vertex(0, 0)
      vertex(0 - tileSize / 2, 0)
      endShape()
    }
  })
}

const trDrawCrossRotate11 = _trDrawCrossRotate((params) => {
  return { color1: params.color1, color2: params.color2 }
})

const trDrawCrossRotate12 = _trDrawCrossRotate((params) => {
  return { color1: params.color2, color2: params.color3 }
})

const trDrawCrossRotate13 = _trDrawCrossRotate((params) => {
  return { color1: params.color3, color2: params.color4 }
})

const trDrawCrossRotate14 = _trDrawCrossRotate((params) => {
  return { color1: params.color4, color2: params.color5 }
})

const trDrawCrossRotate15 = _trDrawCrossRotate((params) => {
  return { color1: params.color5, color2: params.color1 }
})
// バリーション

const trFuncArray = [
  trDrawRectEllipseSquare11, // □○ひし形混合-単色1
  trDrawRectEllipseSquare12, // □○ひし形混合-単色2
  trDrawRectEllipseSquare13, // □○ひし形混合-単色3
  trDrawRectEllipseSquare14, // □○ひし形混合-単色4
  trDrawRectEllipseSquare15, // □○ひし形混合-単色5
  trDrawRectEllipseSquare16, // □○ひし形混合-2色交互
  trDrawRectEllipseSquare17, // □○ひし形混合-2色縦
  trDrawRectEllipseSquare18, // □○ひし形混合-2色横
  trDrawRectEllipseSquare21, // □○ひし形混合-線のみ-単色1
  trDrawRectEllipseSquare22, // □○ひし形混合-線のみ-単色2
  trDrawRectEllipseSquare23, // □○ひし形混合-線のみ-単色3
  trDrawRectEllipseSquare24, // □○ひし形混合-線のみ-単色4
  trDrawRectEllipseSquare25, // □○ひし形混合-線のみ-単色5
  trDrawRectEllipseSquare26, // □○ひし形混合-線のみ-2色交互
  trDrawRectEllipseSquare27, // □○ひし形混合-線のみ-2色縦
  trDrawRectEllipseSquare28, // □○ひし形混合-線のみ-2色横
  trDrawRect11, // □-単色1
  trDrawRect12, // □-単色2
  trDrawRect13, // □-単色3
  trDrawRect14, // □-単色4
  trDrawRect15, // □-単色5
  trDrawRect16, // □-2色交互
  trDrawRect17, // □-2色縦
  trDrawRect18, // □-2色横
  trDrawRect21, // □-線のみ-単色1
  trDrawRect22, // □-線のみ-単色2
  trDrawRect23, // □-線のみ-単色3
  trDrawRect24, // □-線のみ-単色4
  trDrawRect25, // □-線のみ-単色5
  trDrawRect26, // □-線のみ-2色交互
  trDrawRect27, // □-線のみ-2色縦
  trDrawRect28, // □-線のみ-2色横
  trDrawRectBig21, // □大-線のみ-単色1
  trDrawRectBig22, // □大-線のみ-単色2
  trDrawRectBig23, // □大-線のみ-単色3
  trDrawRectBig24, // □大-線のみ-単色4
  trDrawRectBig25, // □大-線のみ-単色5
  trDrawRectBig26, // □大-線のみ-2色交互
  trDrawRectBig27, // □大-線のみ-2色縦
  trDrawRectBig28, // □大-線のみ-2色横
  trDrawSquare11, // ひし形オンリー-単色1
  trDrawSquare12, // ひし形オンリー-単色2
  trDrawSquare13, // ひし形オンリー-単色3
  trDrawSquare14, // ひし形オンリー-単色4
  trDrawSquare15, // ひし形オンリー-単色5
  trDrawSquare16, // ひし形オンリー-2色交互
  trDrawSquare17, // ひし形オンリー-2色縦
  trDrawSquare18, // ひし形オンリー-2色横
  trDrawSquare21, // ひし形-線のみ-単色1
  trDrawSquare22, // ひし形-線のみ-単色2
  trDrawSquare23, // ひし形-線のみ-単色3
  trDrawSquare24, // ひし形-線のみ-単色4
  trDrawSquare25, // ひし形-線のみ-単色5
  trDrawSquare26, // ひし形-線のみ-2色交互
  trDrawSquare27, // ひし形-線のみ-2色縦
  trDrawSquare28, // ひし形-線のみ-2色横
  trDrawSquareBig21, // ひし形大-線のみ-単色1
  trDrawSquareBig22, // ひし形大-線のみ-単色2
  trDrawSquareBig23, // ひし形大-線のみ-単色3
  trDrawSquareBig24, // ひし形大-線のみ-単色4
  trDrawSquareBig25, // ひし形大-線のみ-単色5
  trDrawSquareBig26, // ひし形大-線のみ-2色交互
  trDrawSquareBig27, // ひし形大-線のみ-2色縦
  trDrawSquareBig28, // ひし形大-線のみ-2色横
  trDrawEllipse11, // ◯オンリー-単色1
  trDrawEllipse12, // ◯オンリー-単色2
  trDrawEllipse13, // ◯オンリー-単色3
  trDrawEllipse14, // ◯オンリー-単色4
  trDrawEllipse15, // ◯オンリー-単色5
  trDrawEllipse16, // ◯オンリー-2色交互
  trDrawEllipse17, // ◯オンリー-2色縦
  trDrawEllipse18, // ◯オンリー-2色横
  trDrawEllipse21, // ◯-線のみ-単色1
  trDrawEllipse22, // ◯-線のみ-単色2
  trDrawEllipse23, // ◯-線のみ-単色3
  trDrawEllipse24, // ◯-線のみ-単色4
  trDrawEllipse25, // ◯-線のみ-単色5
  trDrawEllipse26, // ◯-線のみ-2色交互
  trDrawEllipse27, // ◯-線のみ-2色縦
  trDrawEllipse28, // ◯-線のみ-2色横
  trDrawEllipseBig21, // ◯大-線のみ-単色1
  trDrawEllipseBig22, // ◯大-線のみ-単色2
  trDrawEllipseBig23, // ◯大-線のみ-単色3
  trDrawEllipseBig24, // ◯大-線のみ-単色4
  trDrawEllipseBig25, // ◯大-線のみ-単色5
  trDrawEllipseBig26, // ◯大-線のみ-2色交互
  trDrawEllipseBig27, // ◯大-線のみ-2色縦
  trDrawEllipseBig28, // ◯大-線のみ-2色横
  trDrawVerticalRotate11, // 縦-回転-単色1
  trDrawVerticalRotate12, // 縦-回転-単色2
  trDrawVerticalRotate13, // 縦-回転-単色3
  trDrawVerticalRotate14, // 縦-回転-単色4
  trDrawVerticalRotate15, // 縦-回転-単色5
  trDrawVerticalRotate16, // 縦-回転-2色縦
  trDrawVerticalRotate17, // 縦-回転-2色横
  trDrawHorizontalRotate11, // 横-回転-単色1
  trDrawHorizontalRotate12, // 横-回転-単色2
  trDrawHorizontalRotate13, // 横-回転-単色3
  trDrawHorizontalRotate14, // 横-回転-単色4
  trDrawHorizontalRotate15, // 横-回転-単色5
  trDrawHorizontalRotate16, // 横-回転-2色縦
  trDrawHorizontalRotate17, // 横-回転-2色横
  trDrawDiagonalRightRotate11, // 右斜め回転-単色1
  trDrawDiagonalRightRotate12, // 右斜め回転-単色2
  trDrawDiagonalRightRotate13, // 右斜め回転-単色3
  trDrawDiagonalRightRotate14, // 右斜め回転-単色4
  trDrawDiagonalRightRotate15, // 右斜め回転-単色5
  trDrawDiagonalRightRotate16, // 右斜め回転-2色交互
  trDrawDiagonalRightRotate17, // 右斜め回転-2色交互2
  trDrawDiagonalLeftRotate11, // 左斜め回転-単色1
  trDrawDiagonalLeftRotate12, // 左斜め回転-単色2
  trDrawDiagonalLeftRotate13, // 左斜め回転-単色3
  trDrawDiagonalLeftRotate14, // 左斜め回転-単色4
  trDrawDiagonalLeftRotate15, // 左斜め回転-単色5
  trDrawDiagonalLeftRotate16, // 左斜め回転-2色交互
  trDrawDiagonalLeftRotate17, // 左斜め回転-2色交互2
  trDrawEllipseStrokeRotate11, // 丸-回転-2色1
  trDrawEllipseStrokeRotate12, // 丸-回転-2色2
  trDrawEllipseStrokeRotate13, // 丸-回転-2色3
  trDrawEllipseStrokeRotate14, // 丸-回転-2色4
  trDrawEllipseStrokeRotate15, // 丸-回転-2色5
  trDrawCrossRotate11, // 十字-回転-2色1
  trDrawCrossRotate12, // 十字-回転-2色2
  trDrawCrossRotate13, // 十字-回転-2色3
  trDrawCrossRotate14, // 十字-回転-2色4
  trDrawCrossRotate15, // 十字-回転-2色5
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
