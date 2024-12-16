// ------------------------------------------------------------
// --- 定数
// ------------------------------------------------------------
const TR_APP_NAME = 'TILERHYME'
const TR_VERSION = '2.2'
const TR_VERSION_NAME = 'KICK'

const TR_FUNCTION_CODE = {
  IS_LIGHT: 19,
  IS_CHROMATIC: 29,
  STROKE_WEIGHT_UP: 91,
  STROKE_WEIGHT_DOWN: 92,
}

const TR_DATA_GRID_SIZE = 64

// 使用例
const TR_INIT_DATA_GRID = [
  { value: 11, isPressed: false },
  { value: 12, isPressed: false },
  { value: 13, isPressed: false },
  { value: 14, isPressed: false },
  { value: 15, isPressed: false },
  { value: 16, isPressed: false },
  { value: 17, isPressed: false },
  { value: 18, isPressed: false },
  { value: 21, isPressed: false },
  { value: 22, isPressed: false },
  { value: 23, isPressed: false },
  { value: 24, isPressed: false },
  { value: 25, isPressed: false },
  { value: 26, isPressed: false },
  { value: 27, isPressed: false },
  { value: 28, isPressed: false },
  { value: 31, isPressed: false },
  { value: 32, isPressed: false },
  { value: 33, isPressed: false },
  { value: 34, isPressed: false },
  { value: 35, isPressed: false },
  { value: 36, isPressed: false },
  { value: 37, isPressed: false },
  { value: 38, isPressed: false },
  { value: 41, isPressed: false },
  { value: 42, isPressed: false },
  { value: 43, isPressed: false },
  { value: 44, isPressed: false },
  { value: 45, isPressed: false },
  { value: 46, isPressed: false },
  { value: 47, isPressed: false },
  { value: 48, isPressed: false },
  { value: 51, isPressed: false },
  { value: 52, isPressed: false },
  { value: 53, isPressed: false },
  { value: 54, isPressed: false },
  { value: 55, isPressed: false },
  { value: 56, isPressed: false },
  { value: 57, isPressed: false },
  { value: 58, isPressed: false },
  { value: 61, isPressed: false },
  { value: 62, isPressed: false },
  { value: 63, isPressed: false },
  { value: 64, isPressed: false },
  { value: 65, isPressed: false },
  { value: 66, isPressed: false },
  { value: 67, isPressed: false },
  { value: 68, isPressed: false },
  { value: 71, isPressed: false },
  { value: 72, isPressed: false },
  { value: 73, isPressed: false },
  { value: 74, isPressed: false },
  { value: 75, isPressed: false },
  { value: 76, isPressed: false },
  { value: 77, isPressed: false },
  { value: 78, isPressed: false },
  { value: 81, isPressed: false },
  { value: 82, isPressed: false },
  { value: 83, isPressed: false },
  { value: 84, isPressed: false },
  { value: 85, isPressed: false },
  { value: 86, isPressed: false },
  { value: 87, isPressed: false },
  { value: 88, isPressed: false },
  // 以下は機能コード
  { value: TR_FUNCTION_CODE.IS_LIGHT, isPressed: false },
  { value: TR_FUNCTION_CODE.IS_CHROMATIC, isPressed: false },
  { value: 39, isPressed: false },
  { value: 49, isPressed: false },
  { value: 59, isPressed: false },
  { value: 69, isPressed: false },
  { value: 79, isPressed: false },
  { value: 89, isPressed: false },
  { value: 91, isPressed: false },
  { value: 92, isPressed: false },
  { value: 93, isPressed: false },
  { value: 94, isPressed: false },
  { value: 95, isPressed: false },
  { value: 96, isPressed: false },
  { value: 97, isPressed: false },
  { value: 98, isPressed: false },
  { value: 99, isPressed: false },
]

const TR_MAPPING_GRID = [
  [81, 82, 83, 84, 85, 86, 87, 88],
  [71, 72, 73, 74, 75, 76, 77, 78],
  [61, 62, 63, 64, 65, 66, 67, 68],
  [51, 52, 53, 54, 55, 56, 57, 58],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [31, 32, 33, 34, 35, 36, 37, 38],
  [21, 22, 23, 24, 25, 26, 27, 28],
  [11, 12, 13, 14, 15, 16, 17, 18],
]

const TR_SOFT_UI_WIDTH = 200
const TR_SOFT_UI_CELL_SIZE = TR_SOFT_UI_WIDTH / 8

const TR_COLORS = {}

const TR_WALLPAPER_MODE = {
  FULL: 0,
  INFO: 1,
}

const TR_WALLPAPER_SIZE = 1080

const TR_ROTATE_NUM = 4

const TR_DEVICE_GRID_NUM = 8

const TR_MODE = {
  NORMAL: 0,
  AUTO: 1,
}

const TR_AUTO_MODE_INTERVAL = 90

const TR_SINE_LOOP_COUNT = 2

const TR_BACKGROUND_MODE = {
  LIGHT: 0,
  DARK: 1,
  CHROMATIC: 2,
}

const TR_STROKE_WEIGHT_STEP = 1

const TR_WINDOW_TYPE = {
  SQUARE: 0,
  FULL: 1,
}
// ------------------------------------------------------------
// --- 変数
// ------------------------------------------------------------
let trCanvas

let trWindowSize

let trWindowGap

let trCellDivNum

let trIsNoDevice = false

let trSoftUiStartPos

let trDataGrid = TR_INIT_DATA_GRID

let trIsDataGridClickable = true

let trChangePatternFrame = 0

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

// light | dark | chromatic
let trBackgroundMode = TR_BACKGROUND_MODE.DARK

// 線幅の係数
let trStrokeWeight = 4

let trNoiseGraphic
// ------------------------------------------------------------
// --- 関数
// ------------------------------------------------------------

const trProgrammerModeSetup = createLaunchpadSetup({
  noteRange: { min: 11, max: 99 },
  incrementButtonCodeList: [TR_FUNCTION_CODE.STROKE_WEIGHT_UP, TR_FUNCTION_CODE.STROKE_WEIGHT_DOWN],
})

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
      trSetDataParams().then()
    }
  }
}

function trUtilityDataGridIsPressed(value, isPressed) {
  if (isPressed) {
    // ON
    // TODO: 押した時の処理を実装する
    console.log(`ON: ${value}`)
    switch (value) {
      case TR_FUNCTION_CODE.IS_LIGHT:
        trBackgroundMode = trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed
          ? TR_BACKGROUND_MODE.CHROMATIC
          : TR_BACKGROUND_MODE.LIGHT
        break
      case TR_FUNCTION_CODE.IS_CHROMATIC:
        trBackgroundMode = TR_BACKGROUND_MODE.CHROMATIC
        break
      case TR_FUNCTION_CODE.STROKE_WEIGHT_UP:
        trStrokeWeight += TR_STROKE_WEIGHT_STEP
        break
      case TR_FUNCTION_CODE.STROKE_WEIGHT_DOWN:
        trStrokeWeight -= TR_STROKE_WEIGHT_STEP
        if (trStrokeWeight <= 0) {
          trStrokeWeight = 1
        }
        break
      default:
        break
    }
  } else {
    // OFF
    // TODO: 押した時の処理を実装する
    console.log(`OFF: ${value}`)
    switch (value) {
      case TR_FUNCTION_CODE.IS_LIGHT:
        trBackgroundMode = trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed
          ? TR_BACKGROUND_MODE.CHROMATIC
          : TR_BACKGROUND_MODE.DARK
        break
      case TR_FUNCTION_CODE.IS_CHROMATIC:
        trBackgroundMode = trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_LIGHT).isPressed
          ? TR_BACKGROUND_MODE.LIGHT
          : TR_BACKGROUND_MODE.DARK
        break
      case TR_FUNCTION_CODE.STROKE_WEIGHT_UP:
        trStrokeWeight += TR_STROKE_WEIGHT_STEP
        break
      case TR_FUNCTION_CODE.STROKE_WEIGHT_DOWN:
        trStrokeWeight -= TR_STROKE_WEIGHT_STEP
        if (trStrokeWeight <= 0) {
          trStrokeWeight = 1
        }
        break
      default:
        break
    }
  }
}

/**
 * ウィンドウサイズを計算
 */
function trCalcWindowSize(params = {}) {
  const _windowWidth = windowWidth - trWindowGap
  const _windowHeight = windowHeight - trWindowGap

  const _defaultValue = { width: _windowWidth, height: _windowHeight }

  if (!params.type || params.type === TR_WINDOW_TYPE.FULL) {
    return _defaultValue
  }

  if (params.type === TR_WINDOW_TYPE.SQUARE) {
    const squareSize = max(min(_windowWidth, _windowHeight) - 200, 320)
    return { width: squareSize, height: squareSize }
  } else {
    return _defaultValue
  }
}

/**
 * デバイスの描画を行う関数
 */
function trDeviceDraw() {
  if (trIsNoDevice) {
    const frameColor = color(map(trDataParams[0], 0, 99, 0, 360), 40, 95)

    trDrawBlock(() => {
      const gap = 10

      // noStroke()
      stroke(TR_COLORS.cellMain)
      strokeWeight(2)
      rectMode(CENTER)

      fill(frameColor)
      rect(width / 2, height / 2, TR_SOFT_UI_WIDTH + gap * 2, TR_SOFT_UI_WIDTH + gap * 2, 10, 10, 10, 10)

      fill(TR_COLORS.device)
      rect(width / 2, height / 2, TR_SOFT_UI_WIDTH + gap, TR_SOFT_UI_WIDTH + gap, 10, 10, 10, 10)
    })
    trDrawBlock(() => {
      stroke(TR_COLORS.lineMain)
      strokeWeight(2)
      for (let xi = 0; xi < TR_DEVICE_GRID_NUM; xi++) {
        for (let yi = 0; yi < TR_DEVICE_GRID_NUM; yi++) {
          const value = TR_MAPPING_GRID[yi][xi]
          const getIndex = trDataGrid.findIndex((item) => item.value === value)
          if (getIndex === undefined) {
            continue
          }

          trDrawBlock(() => {
            if (trDataGrid[getIndex].isPressed) {
              fill(frameColor)
            } else {
              fill(TR_COLORS.cellNormal)
            }

            ellipseMode(CORNER)
            ellipse(
              trSoftUiStartPos.x + TR_SOFT_UI_CELL_SIZE * xi,
              trSoftUiStartPos.y + TR_SOFT_UI_CELL_SIZE * yi,
              TR_SOFT_UI_CELL_SIZE,
              TR_SOFT_UI_CELL_SIZE,
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

  const windowSize = trCalcWindowSize(TR_WINDOW_TYPE.FULL)
  resizeCanvas(windowSize.width, windowSize.height)

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
  const infoSize = 30

  trDrawBlock(() => {
    if (trBackgroundMode === TR_BACKGROUND_MODE.LIGHT) {
      fill(TR_COLORS.lineMain)
    } else {
      fill(TR_COLORS.lineMainDark)
    }
    textSize(12)

    // データ情報
    textAlign(LEFT, CENTER)
    text(trGridDataToString(), infoSize / 4, infoSize / 2)

    // バージョン情報
    textAlign(RIGHT, CENTER)
    text(
      `${TR_APP_NAME} - ${TR_VERSION_NAME}(${TR_VERSION}) CREATED BY YUSKE`,
      width - infoSize / 4,
      height - infoSize / 2,
    )
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
    .slice(0, 64)
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
    const dataGrid = data.split('').map((item) => item === '1')
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
  qrDiv.innerHTML = qr.createImgTag(2, 0)

  // QRコードの画像を読み込む
  const imgElement = qrDiv.querySelector('img')
  trQrImage = loadImage(imgElement.src)
}

/**
 * QRコードを描画する関数
 */
function trQrDraw() {
  trDrawBlock(() => {
    imageMode(CENTER)
    const gap = createVector(trQrImage.width / 2 + 10, trQrImage.width / 2 + 30)
    image(trQrImage, width - gap.x, height - gap.y)
  })
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
    const part = hashHex.substring(i * 3, i * 3 + 3)
    trDataParams.push(parseInt(part, 16) % 100)
  }

  trSineCount = 0
}

function trChromaticGetColor() {
  const colors = {}

  // カラー
  for (let i = 1; i <= 14; i++) {
    colors[`color${i}`] = color(
      map(trDataParams[i] * 4, 0, 99 * 4, 0, 360),
      map(trDataParams[1 + i], 0, 99, 20, 80),
      map(trDataParams[2 + i], 0, 99, 80, 100),
    )
  }

  return colors
}

/**
 * サインカウントを計算する関数。
 *
 * @param {number} sineValue - 新しいサイン値。
 */
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

/**
 * 指定されたパラメータを使用して分散値を計算します。
 *
 * @param {number} x - 基本となる値。
 * @param {number[]} params - 計算に使用するパラメータの配列。
 *   - params[2]: モジュロ演算に使用する値。
 *   - params[3]: 最後の調整に使用する値。
 *   - params[5]: モジュロ演算に使用する値。
 *   - params[8]: 加算に使用する値。
 *   - params[10]: 乗算に使用する値。
 *   - params[15]: XOR演算に使用する値。
 * @returns {number} 計算された分散値。結果が0の場合は1を返します。
 */
function trGetDistributedValue(x, params) {
  // 大きな素数を使用してより良い分散を得る
  const PRIME1 = 31
  const PRIME2 = 83
  const PRIME3 = 97

  // パラメータの値を利用して複数の演算を組み合わせる
  let value = x

  // 1. 乗算でばらつきを作る
  value = value * params[10] * PRIME1

  // 2. 加算でオフセットを付ける
  value = value + params[8] * PRIME2

  // 3. XORで分布を更に複雑にする
  value = value ^ (params[15] * PRIME3)

  // 4. モジュロで範囲を制限しながら、さらにばらつきを加える
  value = value % (params[5] * params[2])

  // 5. 最後の調整
  value = Math.abs(Math.ceil(value / params[3]))

  // 6. 結果が0の場合は1を返す
  if (!isFinite(value)) {
    return 1
  }
  return Math.ceil(value) || 1
}

/**
 * ノイズを生成する関数。
 * trNoiseGraphic のピクセルデータをランダムなノイズ値で更新します。
 */
function trGenerateNoise() {
  trNoiseGraphic.loadPixels()
  for (let i = 0; i < trNoiseGraphic.pixels.length; i += 4) {
    let noiseVal = random(0, 255)
    trNoiseGraphic.pixels[i] = noiseVal
    trNoiseGraphic.pixels[i + 1] = noiseVal
    trNoiseGraphic.pixels[i + 2] = noiseVal
    trNoiseGraphic.pixels[i + 3] = 25 // 透明度
  }
  trNoiseGraphic.updatePixels()
}

/**
 * ノイズフィルターを適用する関数。
 * 現在の背景モードに応じてブレンドモードを設定し、ノイズグラフィックを描画します。
 */
function trNoiseFilter() {
  trDrawBlock(() => {
    switch (trBackgroundMode) {
      case TR_BACKGROUND_MODE.LIGHT || TR_BACKGROUND_MODE.CHROMATIC:
        blendMode(OVERLAY)
        break
      case TR_BACKGROUND_MODE.DARK:
        blendMode(SCREEN)
        break
      default:
        break
    }
    image(trNoiseGraphic, 0, 0, width, height)
  })
}
