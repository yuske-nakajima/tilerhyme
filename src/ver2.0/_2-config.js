// ------------------------------------------------------------
// --- 定数
// ------------------------------------------------------------
const TR_APP_NAME = 'TILERHYME'
const TR_VERSION = '2.0'
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

const TR_AUTO_MODE_INTERVAL = 30
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
  resizeCanvas(windowWidth - trWindowGap, windowHeight - trWindowGap)
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

function trGetColor() {
  const colors = {}

  for (let i = 1; i <= 12; i++) {
    colors[`color${i}`] = color(
      map(trDataParams[0 + i], 0, 99, 0, 360),
      map(trDataParams[1 + i], 0, 99, 90, 100),
      map(trDataParams[2 + i], 0, 99, 90, 100),
    )
  }

  return colors
}

// バリエーション
function trDrawTilePattern1(t) {
  return function (_x, _y, tileSize) {
    const x = _x * tileSize
    const y = _y * tileSize
    const { color1: fillColor1, color2: strokeColor1 } = trGetColor()

    // 0-14
    trDrawBlock(() => {
      noStroke()
      fill(fillColor1)
      const gap = (tileSize / 100) * map(trDataParams[8], 0, 99, 10, 30)
      let point1
      let point2
      let point3
      let point4

      const target = _y % 2 === t ? 0 : 1

      if (_x % 2 === target) {
        point1 = createVector(x + gap, y)
        point2 = createVector(x + tileSize, y + gap)
        point3 = createVector(x + tileSize - gap, y + tileSize)
        point4 = createVector(x, y + tileSize - gap)
      } else {
        point1 = createVector(x, y + gap)
        point2 = createVector(x + tileSize - gap, y)
        point3 = createVector(x + tileSize, y + tileSize - gap)
        point4 = createVector(x + gap, y + tileSize)
      }
      stroke(strokeColor1)
      strokeWeight(map(trDataParams[9], 0, 99, 0, 4))
      beginShape()
      vertex(point1.x, point1.y)
      vertex(point2.x, point2.y)
      vertex(point3.x, point3.y)
      vertex(point4.x, point4.y)
      endShape(CLOSE)
    })
  }
}

// ピタゴラスタイル
function trDrawTilePattern2(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize

  const { color1: fillColor1, color2: strokeColor1 } = trGetColor()

  trDrawBlock(() => {
    const v = new Array(9)

    // Generate square vertices
    for (let i = 0; i < 4; i++) {
      const angle = (TWO_PI * (i + 0.5)) / 4
      v[i] = createVector(x + (cos(angle) * tileSize) / sqrt(2), y + (sin(angle) * tileSize) / sqrt(2))
    }

    const gap = (sqrt(5) - 1) / map(trDataParams[8], 0, 99, 2, 4)
    let theta = atan(gap)

    let slope = p5.Vector.sub(v[1], v[0])
    slope.rotate(theta)

    v[4] = slope.copy()
    v[4].mult(sin(theta))
    v[4].add(v[0])

    v[5] = slope.copy()
    v[5].mult(cos(theta))
    v[5].add(v[0])

    v[6] = slope.copy()
    v[6].mult(1.0 / cos(theta))
    v[6].add(v[0])

    v[7] = p5.Vector.sub(v[5], v[1])
    v[7].add(v[4])

    v[8] = p5.Vector.sub(v[6], v[1])
    v[8].add(v[0])

    // Draw main squares
    let indDomain = [
      [
        [0, 1, 5],
        [4, 6, 2, 3],
        [3, 7, 8],
      ],
      [
        [1, 5, 6],
        [0, 4, 7, 8],
      ],
    ]

    noStroke()
    for (let i = 0; i < 2; i++) {
      for (let ind of indDomain[i]) {
        if (i === 0) {
          fill(fillColor1)
        } else {
          noFill()
        }
        beginShape()
        for (let j of ind) {
          vertex(v[j].x, v[j].y)
        }
        endShape(CLOSE)
      }
    }

    // Draw edges
    let indLine = [
      [0, 6],
      [1, 5],
      [3, 4],
      [7, 8],
    ]
    strokeWeight(map(trDataParams[7], 0, 99, 1, 4))
    stroke(strokeColor1)
    noFill()
    for (let ind of indLine) {
      beginShape()
      for (let i of ind) {
        vertex(v[i].x, v[i].y)
      }
      endShape()
    }
  })
}

function trDrawTilePattern3(_x, _y, tileSize) {
  trDrawBlock(() => {
    // 6角形の描画
    const x = _x * tileSize
    const y = _y * tileSize

    const { color1: fillColor1, color2: fillColor2, color3: strokeColor } = trGetColor()

    const points = []
    points[0] = createVector(x + tileSize / 4, y)
    points[1] = createVector(points[0].x + tileSize / 2, points[0].y)
    points[2] = createVector(x + tileSize, y + tileSize / 2)
    points[3] = createVector(points[1].x, y + tileSize)
    points[4] = createVector(points[0].x, points[3].y)
    points[5] = createVector(x, points[2].y)
    points[6] = createVector(x + tileSize / 2, y + tileSize / 2)

    const p1 = [0, 1, 2, 3, 4, 5]
    const p2 = [0, 1, 6, 5]
    const p3 = [5, 6, 3, 4]

    stroke(strokeColor)
    strokeWeight(map(trDataParams[12], 0, 99, 1, 4))
    fill(fillColor1)
    beginShape()
    for (let i = 0; i < p1.length; i++) {
      const pi = p1[i]
      vertex(points[pi].x, points[pi].y)
    }
    endShape(CLOSE)

    trDrawBlock(() => {
      fill(fillColor2)
      beginShape()
      for (let i = 0; i < p2.length; i++) {
        const pi = p2[i]
        vertex(points[pi].x, points[pi].y)
      }
      endShape(CLOSE)
      beginShape()
      for (let i = 0; i < p3.length; i++) {
        const pi = p3[i]
        vertex(points[pi].x, points[pi].y)
      }
      endShape(CLOSE)
    })
  })
}

function trDrawTilePattern4(_x, _y, tileSize) {
  trDrawBlock(() => {
    // 6角形の描画
    const x = _x * tileSize
    const y = _y * tileSize

    const {
      color1: fillColor1,
      color2: fillColor2,
      color3: fillColor3,
      color4: fillColor4,
      color5: fillColor5,
    } = trGetColor()

    const points = []
    points[0] = createVector(x + tileSize / 4, y)
    points[1] = createVector(points[0].x + tileSize / 2, points[0].y)
    points[2] = createVector(x + tileSize, y + tileSize / 2)
    points[3] = createVector(points[1].x, y + tileSize)
    points[4] = createVector(points[0].x, points[3].y)
    points[5] = createVector(x, points[2].y)
    points[6] = createVector(x + tileSize / 2, y + tileSize / 2)

    points[7] = createVector(x, y)
    points[8] = createVector(x + tileSize, y)
    points[9] = createVector(x + tileSize, y + tileSize)
    points[10] = createVector(x, y + tileSize)

    const p1 = [0, 1, 6]
    const p2 = [1, 2, 6]
    const p3 = [2, 3, 6]
    const p4 = [3, 4, 6]
    const p5 = [4, 5, 6]
    const p6 = [5, 0, 6]
    const p7 = [7, 0, 5]
    const p8 = [1, 8, 2]
    const p9 = [2, 9, 3]
    const p10 = [4, 10, 5]

    const pA = [p1, p3]
    const pB = [p2, p5]
    const pC = [p4, p6]
    const pD = [p7, p8]
    const pE = [p9, p10]

    const pGroup = [
      [pA, fillColor1],
      [pB, fillColor2],
      [pC, fillColor3],
      [pD, fillColor4],
      [pE, fillColor5],
    ]

    for (const [pList, _fillColor] of pGroup) {
      trDrawBlock(() => {
        noStroke()
        fill(_fillColor)
        for (const p of pList) {
          beginShape()
          for (let i = 0; i < p.length; i++) {
            const pi = p[i]
            vertex(points[pi].x, points[pi].y)
          }
          endShape(CLOSE)
        }
      })
    }
  })
}

function trDrawTilePattern5(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize
  const centerPos = createVector(x + tileSize / 2, y + tileSize / 2)
  const ellipseSize = tileSize * 0.8
  const pixel = tileSize / 100

  const secondEllipseSize = ellipseSize * map(trDataParams[4], 0, 99, 0.2, 0.5)
  const secondEllipsePos = createVector(
    centerPos.x + map(trDataParams[5], 0, 99, -pixel * 4, pixel * 4),
    centerPos.y + map(trDataParams[6], 0, 99, -pixel * 4, pixel * 4),
  )

  const { color1: fillColor1, color2: fillColor2 } = trGetColor()

  const eList = [
    [centerPos, ellipseSize, fillColor1],
    [secondEllipsePos, secondEllipseSize, fillColor2],
  ]

  trDrawBlock(() => {
    for (const [pos, size, _fillColor] of eList) {
      fill(_fillColor)
      noStroke()
      ellipse(pos.x, pos.y, size, size)
    }
  })
}

function trDrawTilePattern6(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize
  const _w = tileSize / 100
  const firstRectWidth = _w * map(trDataParams[14], 0, 99, 10, 60)
  const secondRectWidth = tileSize - firstRectWidth

  const { color1: fillColor1, color2: fillColor2, color3: fillColor3 } = trGetColor()

  trDrawBlock(() => {
    noStroke()

    trDrawBlock(() => {
      fill(fillColor1)
      rect(x, y, firstRectWidth)
    })

    trDrawBlock(() => {
      fill(fillColor2)
      rect(x + firstRectWidth, y, secondRectWidth)
    })

    trDrawBlock(() => {
      fill(fillColor3)
      rect(x, y + firstRectWidth, secondRectWidth)
    })
  })
}

function trDrawTilePattern7(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize
  const innerTileSize = tileSize / 2

  const { color1: fillColor1, color2: fillColor2, color3: fillColor3 } = trGetColor()

  trDrawBlock(() => {
    noStroke()

    if (_y % 2 === 0) {
      if (_x % 2 === 0) {
        trDrawBlock(() => {
          fill(fillColor3)
          rect(x, y, tileSize)

          fill(fillColor1)
          triangle(x + tileSize, y, x + tileSize, y + tileSize, x, y + tileSize)

          fill(fillColor2)
          rect(x + tileSize - innerTileSize, y + tileSize - innerTileSize, innerTileSize)
        })
      } else {
        trDrawBlock(() => {
          fill(fillColor2)
          rect(x, y, tileSize)

          fill(fillColor1)
          triangle(x, y, x + tileSize, y + tileSize, x, y + tileSize)

          fill(fillColor3)
          rect(x, y + tileSize - innerTileSize, innerTileSize)
        })
      }
    } else {
      if (_x % 2 === 0) {
        trDrawBlock(() => {
          fill(fillColor2)
          rect(x, y, tileSize)

          fill(fillColor1)
          triangle(x, y, x + tileSize, y, x + tileSize, y + tileSize)

          fill(fillColor3)
          rect(x + tileSize - innerTileSize, y, innerTileSize)
        })
      } else {
        trDrawBlock(() => {
          fill(fillColor3)
          rect(x, y, tileSize)

          fill(fillColor1)
          triangle(x, y, x + tileSize, y, x, y + tileSize)

          fill(fillColor2)
          rect(x, y, innerTileSize)
        })
      }
    }
  })
}

function trDrawTilePattern8(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize
  const centerPos = createVector(x + tileSize / 2, y + tileSize / 2)

  const { color1: fillColor1, color2: fillColor2 } = trGetColor()

  const num = ceil(map(trDataParams[5], 0, 99, 0, 99))
  let alphabet = ''

  if (num < 50) {
    // 0-49 を 65-90 (A-Z) にマッピング
    let value = map(num, 0, 49, 65, 90)
    value = floor(value)
    alphabet = String.fromCharCode(value)
  } else {
    // 50-99 を 97-122 (a-z) にマッピング
    let value = map(num, 50, 99, 97, 122)
    value = floor(value)
    alphabet = String.fromCharCode(value)
  }

  trDrawBlock(() => {
    textAlign(CENTER, CENTER)
    textFont('Arial')
    textStyle(BOLD)
    textSize(tileSize / 2)

    const rotateNum = 5
    for (let i = 0; i < rotateNum; i++) {
      if (i % 2 === 0) {
        fill(fillColor1)
      } else {
        fill(fillColor2)
      }
      const angle = (TWO_PI / (rotateNum - 1)) * i
      const pos = createVector(centerPos.x + (cos(angle) * tileSize) / 4, centerPos.y + (sin(angle) * tileSize) / 4)
      trDrawBlock(() => {
        translate(pos.x, pos.y)
        rotate(angle)
        text(alphabet, 0, 0)
      })
    }
  })
}

function trDrawTilePattern9(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize

  const { color1: fillColor1, color2: fillColor2 } = trGetColor()

  const divNum = 6
  const divTileSize = tileSize / divNum

  const points1 = []
  const points2 = []
  for (let i = 0; i < divNum; i++) {
    points1.push(createVector(x, y + divTileSize * i))
    points2.push(createVector(x + tileSize, y + divTileSize * i))
  }

  const pList = [[0, 2]]

  trDrawBlock(() => {
    noStroke()

    let [p1, p2] = pList[0]

    if (_x % 2 === 0) {
      trDrawBlock(() => {
        fill(fillColor1)
        quad(
          points1[p1].x,
          points1[p1].y,
          points2[p2].x,
          points2[p2].y,
          points2[p2 + 3].x,
          points2[p2 + 3].y,
          points1[p1 + 3].x,
          points1[p1 + 3].y,
        )
      })

      trDrawBlock(() => {
        fill(fillColor2)
        quad(
          points1[p1 + 1].x,
          points1[p1 + 1].y,
          points2[p2 + 1].x,
          points2[p2 + 1].y,
          points2[p2 + 2].x,
          points2[p2 + 2].y,
          points1[p1 + 2].x,
          points1[p1 + 2].y,
        )
      })

      trDrawBlock(() => {
        fill(fillColor1)
        quad(
          points2[p1].x,
          points2[p1].y,
          points1[p2].x,
          points1[p2].y,
          points1[p2 + 3].x,
          points1[p2 + 3].y,
          points2[p1 + 3].x,
          points2[p1 + 3].y,
        )
      })

      trDrawBlock(() => {
        fill(fillColor2)
        quad(
          points2[p1 + 1].x,
          points2[p1 + 1].y,
          points1[p2 + 1].x,
          points1[p2 + 1].y,
          points1[p2 + 2].x,
          points1[p2 + 2].y,
          points2[p1 + 2].x,
          points2[p1 + 2].y,
        )
      })
    } else {
      trDrawBlock(() => {
        fill(fillColor1)
        quad(
          points2[p1].x,
          points2[p1].y,
          points1[p2].x,
          points1[p2].y,
          points1[p2 + 3].x,
          points1[p2 + 3].y,
          points2[p1 + 3].x,
          points2[p1 + 3].y,
        )
      })

      trDrawBlock(() => {
        fill(fillColor2)
        quad(
          points2[p1 + 1].x,
          points2[p1 + 1].y,
          points1[p2 + 1].x,
          points1[p2 + 1].y,
          points1[p2 + 2].x,
          points1[p2 + 2].y,
          points2[p1 + 2].x,
          points2[p1 + 2].y,
        )
      })

      trDrawBlock(() => {
        fill(fillColor1)
        quad(
          points1[p1].x,
          points1[p1].y,
          points2[p2].x,
          points2[p2].y,
          points2[p2 + 3].x,
          points2[p2 + 3].y,
          points1[p1 + 3].x,
          points1[p1 + 3].y,
        )
      })

      trDrawBlock(() => {
        fill(fillColor2)
        quad(
          points1[p1 + 1].x,
          points1[p1 + 1].y,
          points2[p2 + 1].x,
          points2[p2 + 1].y,
          points2[p2 + 2].x,
          points2[p2 + 2].y,
          points1[p1 + 2].x,
          points1[p1 + 2].y,
        )
      })
    }
  })
}

function trDrawTilePattern10(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize

  const { color1: strokeColor1 } = trGetColor()

  const tileSizePixel = tileSize / 10
  const diff = tileSizePixel * map(trDataParams[14], 0, 99, 1, 8)

  const diffA = diff
  const diffB = tileSize - diff

  const posX1 = x
  const posY1 = _x % 2 === 0 ? y + diffA : y + diffB
  const posX2 = x + tileSize
  const posY2 = _x % 2 === 0 ? y + diffB : y + diffA

  const points = [createVector(posX1, posY1)]
  for (let i = 1; i * tileSizePixel < tileSize; i++) {
    // ノイズで埋める
    points.push(
      createVector(x + i * tileSizePixel, points[i - 1].y + noise(trDataParams[13]) * 0.15 * trDataParams[14]),
    )
  }
  points.push(createVector(posX2, posY2))

  trDrawBlock(() => {
    noFill()
    stroke(strokeColor1)
    strokeWeight(map(trDataParams[13], 0, 99, 1, 10))
    beginShape()
    for (let i = 0; i < points.length; i++) {
      vertex(points[i].x, points[i].y)
    }
    endShape()
  })
}

function trDrawTilePattern11(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize

  const { color1: strokeColor1 } = trGetColor()

  const tileSizePixel = tileSize / 10
  const diff = tileSizePixel * map(trDataParams[14], 0, 99, 1, 8)

  const diffA = diff
  const diffB = tileSize - diff

  const posX1 = _y % 2 === 0 ? x + diffA : x + diffB
  const posY1 = y
  const posX2 = _y % 2 === 0 ? x + diffB : x + diffA
  const posY2 = y + tileSize

  const points = [createVector(posX1, posY1)]
  for (let i = 1; i * tileSizePixel < tileSize; i++) {
    // ノイズで埋める
    points.push(
      createVector(points[i - 1].x + noise(trDataParams[13]) * 0.15 * trDataParams[14], y + i * tileSizePixel),
    )
  }
  points.push(createVector(posX2, posY2))

  trDrawBlock(() => {
    noFill()
    stroke(strokeColor1)
    strokeWeight(map(trDataParams[13], 0, 99, 1, 10))
    beginShape()
    for (let i = 0; i < points.length; i++) {
      vertex(points[i].x, points[i].y)
    }
    endShape()
  })
}

function trDrawTilePattern12(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize

  const { color1: fillColor1 } = trGetColor()

  const tileSizePixel = tileSize / 10
  const diff = tileSizePixel * map(trDataParams[14], 0, 99, 1, 8)

  const diffA = diff
  const diffB = tileSize - diff

  const points = []

  points[0] = createVector(x + diffA, y)
  points[1] = createVector(x + tileSize, y)
  points[2] = createVector(x + tileSize, y + diffB)
  points[3] = createVector(x + diffB, y + tileSize)
  points[4] = createVector(x, y + tileSize)
  points[5] = createVector(x, y + diffA)

  trDrawBlock(() => {
    noStroke()
    fill(fillColor1)

    beginShape()
    for (let i = 0; i < points.length; i++) {
      vertex(points[i].x, points[i].y)
    }
    endShape(CLOSE)
  })
}

function trDrawTilePattern13(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize

  const { color1: fillColor1 } = trGetColor()

  trDrawBlock(() => {
    noStroke()

    fill(fillColor1)
    ellipse(x + tileSize / 2, y + tileSize / 2, tileSize)
  })
}

function trDrawTilePattern14(_x, _y, tileSize) {
  const x = _x * tileSize
  const y = _y * tileSize

  const { color1: fillColor1, color2: fillColor2 } = trGetColor()

  trDrawBlock(() => {
    noStroke()

    fill(fillColor1)
    ellipse(x + tileSize / 2, y + tileSize / 2, tileSize)

    fill(fillColor2)
    ellipse(x, y + tileSize / 2, tileSize)

    fill(fillColor1)
    ellipse(x + tileSize / 2, y + tileSize, tileSize)
  })
}
// バリーション

const trFuncArray = [
  // trDrawTilePattern1(0),
  // trDrawTilePattern1(1),
  // trDrawTilePattern2,
  // trDrawTilePattern3,
  // trDrawTilePattern4,
  // trDrawTilePattern5,
  // trDrawTilePattern6,
  // trDrawTilePattern7,
  // trDrawTilePattern8,
  // trDrawTilePattern9,
  // trDrawTilePattern10,
  // trDrawTilePattern11,
  // trDrawTilePattern12,
  // trDrawTilePattern13,
  trDrawTilePattern14,
]

/**
 * trDrawShape 関数は、指定された幅と高さに基づいて形状を描画します。
 * 幅と高さを100で割った値を使用して、trDataParams 配列の各パラメータに対して
 * 矩形を描画します。矩形は黒色で塗りつぶされ、指定された位置に描画されます。
 */
function trDrawShape() {
  // 画面全体をタイルで埋める
  const tileSize = width / map(trDataParams[15], 0, 99, 5, 20) // タイルの基本サイズ
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
