// ------------------------------------------------------------
// --- 定数
// ------------------------------------------------------------
const TR_APP_NAME = 'TILERHYME'
const TR_VERSION = '2.2'
const TR_VERSION_NAME = 'KICK'

const TR_FUNCTION_CODE = {
  IS_DARK: 19,
  IS_CHROMATIC: 29,
  IS_NOISE_FILTER: 39,
  IS_GRAY_SCALE: 49,
  IS_RANDOM_FILTER_PARAMS: 59,
  IS_RANDOM_SHAPE_PARAMS: 69,
  RANDOM_FILTER_PARAMS: 79,
  RANDOM_SHAPE_PARAMS: 89,
  STROKE_WEIGHT_UP: 91,
  STROKE_WEIGHT_DOWN: 92,
  HUE_SHIFT_UP: 93,
  HUE_SHIFT_DOWN: 94,
  TILE_SIZE_DIV_UP: 95,
  TILE_SIZE_DIV_DOWN: 96,
  RANDOM_TILE: 97,
  RANDOM_FONT_TILE: 98,
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
  { value: TR_FUNCTION_CODE.IS_DARK, isPressed: false },
  { value: TR_FUNCTION_CODE.IS_CHROMATIC, isPressed: false },
  { value: TR_FUNCTION_CODE.IS_GRAY_SCALE, isPressed: false },
  { value: TR_FUNCTION_CODE.IS_NOISE_FILTER, isPressed: false },
  { value: TR_FUNCTION_CODE.IS_RANDOM_FILTER_PARAMS, isPressed: false },
  { value: TR_FUNCTION_CODE.RANDOM_SHAPE_PARAMS, isPressed: false },
  { value: TR_FUNCTION_CODE.IS_RANDOM_SHAPE_PARAMS, isPressed: false },
  { value: TR_FUNCTION_CODE.RANDOM_FILTER_PARAMS, isPressed: false },
  { value: TR_FUNCTION_CODE.STROKE_WEIGHT_UP, isPressed: false },
  { value: TR_FUNCTION_CODE.STROKE_WEIGHT_DOWN, isPressed: false },
  { value: TR_FUNCTION_CODE.HUE_SHIFT_UP, isPressed: false },
  { value: TR_FUNCTION_CODE.HUE_SHIFT_DOWN, isPressed: false },
  { value: TR_FUNCTION_CODE.TILE_SIZE_DIV_UP, isPressed: false },
  { value: TR_FUNCTION_CODE.TILE_SIZE_DIV_DOWN, isPressed: false },
  { value: TR_FUNCTION_CODE.RANDOM_TILE, isPressed: false },
  { value: TR_FUNCTION_CODE.RANDOM_FONT_TILE, isPressed: false },
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

const TR_TOFU_GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

const TR_SOFT_UI_WIDTH = 100
const TR_SOFT_UI_WIDTH_GAP = TR_SOFT_UI_WIDTH / 20
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
  FONT_AUTO: 2,
  FONT_2_AUTO: 3,
}

const TR_AUTO_MODE_INTERVAL = 60

const TR_SINE_LOOP_COUNT = 2

const TR_BACKGROUND_MODE = {
  LIGHT: 0,
  DARK: 1,
  CHROMATIC: 2,
  CHROMATIC_DARK: 3,
}

const TR_GRAY_FILTER = {
  NONE: 0,
  GRAY: 1,
}

const TR_NOISE_FILTER = {
  NONE: 0,
  NOISE: 1,
}

const TR_RANDOM_SHAPE_PARAMS_MODE = {
  NONE: 0,
  RANDOM: 1,
}

const TR_RANDOM_FILTER_PARAMS_MODE = {
  NONE: 0,
  RANDOM: 1,
}

const TR_STROKE_WEIGHT = {
  MIN: 1,
  MAX: 30,
}
const TR_STROKE_WEIGHT_STEP = 2

const TR_HUE_SHIFT = {
  MIN: 0,
  MAX: 360,
}

const TR_HUE_SHIFT_STEP = 10

const TR_WINDOW_TYPE = {
  SQUARE: 0,
  FULL: 1,
}

const TR_SET_DATA_PARAMS_LENGTH = 20

const TR_TILE_SIZE_DIV = {
  MIN: 2,
  MAX: 12,
  DEFAULT: 6,
  STEP: 1,
}

const TR_SINE_SPEED = {
  MIN: 0.5,
  MAX: 2.0,
  STEP: 0.05,
  DEFAULT: 1.0,
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

let trFont2AutoText = trGetOrInitializeValue('trFont2AutoText', '')

let trFont2AutoCount = 0

let trFont2AutoBitmapList = []

// life gameの初期値はランダム値
let trModeLifeGameGrid = Array.from({ length: 64 }, () => Math.floor(Math.random() * 2)).join('')

let trModeLifeGameGridHistory = []

let trDataParams = []

let trSineData = []
let trSineCount = 0

// light | dark | chromatic
let trBackgroundMode = TR_BACKGROUND_MODE.LIGHT

// none | gray
let trGrayFilter = TR_GRAY_FILTER.NONE

let trNoiseFilter = TR_NOISE_FILTER.NONE

// 線幅の係数
let trStrokeWeight = 4

let trNoiseGraphic

let trHueShift = 0

let trTileSizeDivNum = TR_TILE_SIZE_DIV.DEFAULT

let trMidiAccess

let trBitMapFontData

let trSineSpeed = TR_SINE_SPEED.DEFAULT

let trRandomShapeParamsMode = TR_RANDOM_SHAPE_PARAMS_MODE.NONE

let trRandomFilterParamsMode = TR_RANDOM_FILTER_PARAMS_MODE.NONE
// ------------------------------------------------------------
// --- 関数
// ------------------------------------------------------------

const trProgrammerModeSetup = createLaunchpadSetup({
  noteRange: { min: 11, max: 99 },
  incrementButtonCodeList: [
    TR_FUNCTION_CODE.STROKE_WEIGHT_UP, // 線幅を増加
    TR_FUNCTION_CODE.STROKE_WEIGHT_DOWN, // 線幅を減少
    TR_FUNCTION_CODE.HUE_SHIFT_UP, // 色相シフトを増加
    TR_FUNCTION_CODE.HUE_SHIFT_DOWN, // 色相シフトを減少
    TR_FUNCTION_CODE.TILE_SIZE_DIV_UP, // タイルサイズ分割を増加
    TR_FUNCTION_CODE.TILE_SIZE_DIV_DOWN, // タイルサイズ分割を減少
    TR_FUNCTION_CODE.RANDOM_FILTER_PARAMS, // ランダムフィルターパラメータ
    TR_FUNCTION_CODE.RANDOM_SHAPE_PARAMS, // ランダムパラメータ
    TR_FUNCTION_CODE.RANDOM_TILE, // ランダムタイル
    TR_FUNCTION_CODE.RANDOM_FONT_TILE, // ランダムフォントタイル
  ],
  functionButtonCodeList: [
    TR_FUNCTION_CODE.IS_DARK, // ダークモード
    TR_FUNCTION_CODE.IS_CHROMATIC, // クロマチックモード
    TR_FUNCTION_CODE.IS_GRAY_SCALE, // グレースケール
    TR_FUNCTION_CODE.IS_NOISE_FILTER, // ノイズフィルター
    TR_FUNCTION_CODE.IS_RANDOM_FILTER_PARAMS, // ランダムフィルターパラメータモード
    TR_FUNCTION_CODE.IS_RANDOM_SHAPE_PARAMS, // ランダム形状パラメータモード
  ],
  noneButtonCodeList: [],
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
    // TODO: 押した時にONになる処理
    console.clear()
    console.log(`ON: ${value}`)
    switch (value) {
      case TR_FUNCTION_CODE.IS_DARK:
        trBackgroundMode = trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed
          ? TR_BACKGROUND_MODE.CHROMATIC_DARK
          : TR_BACKGROUND_MODE.DARK
        break
      case TR_FUNCTION_CODE.IS_CHROMATIC:
        trBackgroundMode = trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_DARK).isPressed
          ? TR_BACKGROUND_MODE.CHROMATIC_DARK
          : TR_BACKGROUND_MODE.CHROMATIC
        break
      case TR_FUNCTION_CODE.IS_GRAY_SCALE:
        trGrayFilter = TR_GRAY_FILTER.GRAY
        break
      case TR_FUNCTION_CODE.IS_RANDOM_FILTER_PARAMS:
        trRandomFilterParamsMode = TR_RANDOM_FILTER_PARAMS_MODE.RANDOM
        break
      case TR_FUNCTION_CODE.IS_RANDOM_SHAPE_PARAMS:
        trRandomShapeParamsMode = TR_RANDOM_SHAPE_PARAMS_MODE.RANDOM
        break
      case TR_FUNCTION_CODE.IS_NOISE_FILTER:
        trNoiseFilter = TR_NOISE_FILTER.NOISE
        break
      default:
        break
    }
  } else {
    // OFF
    // TODO: 押した時にOFFになる処理を実装する
    console.clear()
    console.log(`OFF: ${value}`)
    switch (value) {
      case TR_FUNCTION_CODE.IS_DARK:
        trBackgroundMode = trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed
          ? TR_BACKGROUND_MODE.CHROMATIC
          : TR_BACKGROUND_MODE.LIGHT
        break
      case TR_FUNCTION_CODE.IS_CHROMATIC:
        trBackgroundMode = trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_DARK).isPressed
          ? TR_BACKGROUND_MODE.DARK
          : TR_BACKGROUND_MODE.LIGHT
        break
      case TR_FUNCTION_CODE.IS_GRAY_SCALE:
        trGrayFilter = TR_GRAY_FILTER.NONE
        break
      case TR_FUNCTION_CODE.IS_NOISE_FILTER:
        trNoiseFilter = TR_NOISE_FILTER.NONE
        break
      case TR_FUNCTION_CODE.IS_RANDOM_FILTER_PARAMS:
        trRandomFilterParamsMode = TR_RANDOM_FILTER_PARAMS_MODE.NONE
        break
      case TR_FUNCTION_CODE.IS_RANDOM_SHAPE_PARAMS:
        trRandomShapeParamsMode = TR_RANDOM_SHAPE_PARAMS_MODE.NONE
        break
      default:
        break
    }
  }

  switch (value) {
    case TR_FUNCTION_CODE.STROKE_WEIGHT_UP:
      trStrokeWeight =
        trStrokeWeight + TR_STROKE_WEIGHT_STEP <= TR_STROKE_WEIGHT.MAX
          ? trStrokeWeight + TR_STROKE_WEIGHT_STEP
          : TR_STROKE_WEIGHT.MAX
      break
    case TR_FUNCTION_CODE.STROKE_WEIGHT_DOWN:
      trStrokeWeight =
        trStrokeWeight - TR_STROKE_WEIGHT_STEP >= TR_STROKE_WEIGHT.MIN
          ? trStrokeWeight - TR_STROKE_WEIGHT_STEP
          : TR_STROKE_WEIGHT.MIN
      break
    case TR_FUNCTION_CODE.HUE_SHIFT_UP:
      trHueShift = (trHueShift + TR_HUE_SHIFT_STEP) % TR_HUE_SHIFT.MAX
      break
    case TR_FUNCTION_CODE.HUE_SHIFT_DOWN:
      trHueShift =
        trHueShift - TR_HUE_SHIFT_STEP < TR_HUE_SHIFT.MIN
          ? TR_HUE_SHIFT.MAX - TR_HUE_SHIFT_STEP
          : trHueShift - TR_HUE_SHIFT_STEP
      break
    case TR_FUNCTION_CODE.TILE_SIZE_DIV_UP:
      trTileSizeDivNum = min(trTileSizeDivNum + TR_TILE_SIZE_DIV.STEP, TR_TILE_SIZE_DIV.MAX)
      break
    case TR_FUNCTION_CODE.TILE_SIZE_DIV_DOWN:
      trTileSizeDivNum = max(trTileSizeDivNum - TR_TILE_SIZE_DIV.STEP, TR_TILE_SIZE_DIV.MIN)
      break
    case TR_FUNCTION_CODE.RANDOM_FILTER_PARAMS:
      trFunctionFilterParamsRandomize()
      trSetInitUrlAndMidi()
      break
    case TR_FUNCTION_CODE.RANDOM_SHAPE_PARAMS:
      trFunctionShapeParamsRandomize()
      trSetInitUrlAndMidi()
      break
    case TR_FUNCTION_CODE.RANDOM_TILE:
      // オートモード時は無効
      if (trMode !== TR_MODE.NORMAL) {
        break
      }

      if (trRandomShapeParamsMode === TR_RANDOM_SHAPE_PARAMS_MODE.RANDOM) {
        trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_RANDOM_SHAPE_PARAMS).isPressed = true
        trFunctionShapeParamsRandomize()
      }
      if (trRandomFilterParamsMode === TR_RANDOM_FILTER_PARAMS_MODE.RANDOM) {
        trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_RANDOM_FILTER_PARAMS).isPressed = true
        trFunctionFilterParamsRandomize()
      }

      trDataGrid = trDataGrid.map((item, i) => {
        if (i >= TR_DATA_GRID_SIZE) {
          return item
        }
        item.isPressed = random() > 0.5
        return item
      })
      trSetInitUrlAndMidi()
      break
    case TR_FUNCTION_CODE.RANDOM_FONT_TILE:
      // オートモード時は無効
      if (trMode !== TR_MODE.NORMAL) {
        break
      }

      if (trRandomShapeParamsMode === TR_RANDOM_SHAPE_PARAMS_MODE.RANDOM) {
        trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_RANDOM_SHAPE_PARAMS).isPressed = true
        trFunctionShapeParamsRandomize()
      }
      if (trRandomFilterParamsMode === TR_RANDOM_FILTER_PARAMS_MODE.RANDOM) {
        trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_RANDOM_FILTER_PARAMS).isPressed = true
        trFunctionFilterParamsRandomize()
      }

      const randomFontBitmap = trBitMapFontData.getRandomBitmap().bitmap
      for (let yi = 0; yi < 8; yi++) {
        for (let xi = 0; xi < 8; xi++) {
          const gridIndex = TR_MAPPING_GRID[yi][xi]
          const trDataGridIndex = trDataGrid.findIndex((item) => item.value === gridIndex)
          trDataGrid[trDataGridIndex].isPressed = randomFontBitmap[yi][xi] === 1
        }
      }
      trSetInitUrlAndMidi()
      break
    default:
      break
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
  const position = createVector(width / 2, height / 2)
  const softUiStartPos = createVector(position.x - TR_SOFT_UI_WIDTH / 2, position.y - TR_SOFT_UI_WIDTH / 2)

  trDrawBlock(() => {
    stroke(TR_COLORS.device)
    strokeWeight(1)
    rectMode(CENTER)

    fill(TR_COLORS.device)
    rect(
      position.x,
      position.y,
      TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP * 2,
      TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP * 2,
    )
    rect(position.x, position.y, TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP, TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP)
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
            fill(TR_COLORS.cellMain)
          } else {
            fill(TR_COLORS.cellNormal)
          }

          rectMode(CORNER)
          rect(
            softUiStartPos.x + TR_SOFT_UI_CELL_SIZE * xi,
            softUiStartPos.y + TR_SOFT_UI_CELL_SIZE * yi,
            TR_SOFT_UI_CELL_SIZE,
            TR_SOFT_UI_CELL_SIZE,
          )
        })
      }
    }
  })
}

/**
 * ダミーデバイスの描画を行う関数。
 * 指定された位置とデータグリッドを使用してデバイスのUIを描画します。
 *
 * @param {p5.Vector} [position] - 描画する位置。デフォルトは画面の中央。
 * @param {Array} [dataGrid] - 使用するデータグリッド。デフォルトは `trDataGrid`。
 */
function trDeviceDummyDraw(position = undefined, dataGrid = undefined) {
  if (!position) {
    position = createVector(width / 2, height / 2)
  }

  const softUiStartPos = createVector(position.x - TR_SOFT_UI_WIDTH / 2, position.y - TR_SOFT_UI_WIDTH / 2)

  if (!dataGrid) {
    dataGrid = trDataGrid
  }

  trDrawBlock(() => {
    stroke(TR_COLORS.device)
    strokeWeight(1)
    rectMode(CENTER)

    fill(TR_COLORS.device)
    rect(
      position.x,
      position.y,
      TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP * 2,
      TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP * 2,
    )
    rect(position.x, position.y, TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP, TR_SOFT_UI_WIDTH + TR_SOFT_UI_WIDTH_GAP)
  })
  trDrawBlock(() => {
    for (let xi = 0; xi < TR_DEVICE_GRID_NUM; xi++) {
      for (let yi = 0; yi < TR_DEVICE_GRID_NUM; yi++) {
        trDrawBlock(() => {
          strokeWeight(1)
          if (dataGrid[yi][xi]) {
            fill(TR_COLORS.cellSub)
            stroke(TR_COLORS.cellSub)
          } else {
            fill(TR_COLORS.device)
            stroke(TR_COLORS.device)
          }

          rectMode(CORNER)
          rect(
            softUiStartPos.x + TR_SOFT_UI_CELL_SIZE * xi,
            softUiStartPos.y + TR_SOFT_UI_CELL_SIZE * yi,
            TR_SOFT_UI_CELL_SIZE,
            TR_SOFT_UI_CELL_SIZE,
          )
        })
      }
    }
  })
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

function trChangeBackgroundButton(mode) {
  switch (mode) {
    case TR_BACKGROUND_MODE.LIGHT:
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_DARK).isPressed = false
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed = false
      break
    case TR_BACKGROUND_MODE.DARK:
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_DARK).isPressed = true
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed = false
      break
    case TR_BACKGROUND_MODE.CHROMATIC:
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_DARK).isPressed = false
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed = true
      break
    case TR_BACKGROUND_MODE.CHROMATIC_DARK:
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_DARK).isPressed = true
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_CHROMATIC).isPressed = true
      break
    default:
      break
  }
}

/**
 * URLのクエリパラメータからデータを取得し、trDataGridを更新する関数。
 * URLに'data'パラメータが含まれている場合、その値を解析してtrDataGridを更新する。
 * 'data'パラメータが存在しない場合、trDataGridを初期データに設定する。
 */
function trUrlToData() {
  const url = new URL(window.location.href)

  // data
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

  // background
  const background = url.searchParams.get('background')
  const isValidBackground = background && Object.values(TR_BACKGROUND_MODE).includes(parseInt(background))
  if (isValidBackground) {
    trBackgroundMode = parseInt(background)
    trChangeBackgroundButton(trBackgroundMode)
  } else {
    trBackgroundMode = TR_BACKGROUND_MODE.LIGHT
  }

  // gray filter
  const grayScale = url.searchParams.get('gray-scale')
  const isValidGrayScale = grayScale && Object.values(TR_GRAY_FILTER).includes(parseInt(grayScale))
  if (isValidGrayScale) {
    trGrayFilter = parseInt(grayScale)
    if (trGrayFilter === TR_GRAY_FILTER.GRAY) {
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_GRAY_SCALE).isPressed = true
    }
  } else {
    trGrayFilter = TR_GRAY_FILTER.NONE
  }

  // noise filter
  const noiseFilter = url.searchParams.get('noise-filter')
  const isValidNoiseFilter = noiseFilter && Object.values(TR_NOISE_FILTER).includes(parseInt(noiseFilter))
  if (isValidNoiseFilter) {
    trNoiseFilter = parseInt(noiseFilter)
    if (trNoiseFilter === TR_NOISE_FILTER.NOISE) {
      trDataGrid.find((item) => item.value === TR_FUNCTION_CODE.IS_NOISE_FILTER).isPressed = true
    }
  } else {
    trNoiseFilter = TR_NOISE_FILTER.NONE
  }

  // stroke weight
  const _strokeWeight = url.searchParams.get('stroke-weight')
  const isValidTrStrokeWeight =
    _strokeWeight && _strokeWeight >= TR_STROKE_WEIGHT.MIN && _strokeWeight <= TR_STROKE_WEIGHT.MAX
  if (isValidTrStrokeWeight) {
    trStrokeWeight = parseInt(_strokeWeight)
  }

  // hue shift
  const hueShift = url.searchParams.get('hue-shift')
  const isValidHueShift = hueShift && hueShift >= TR_HUE_SHIFT.MIN && hueShift <= TR_HUE_SHIFT.MAX
  if (isValidHueShift) {
    trHueShift = parseInt(hueShift)
  }

  // タイルの分割数
  const tileSizeDivNum = url.searchParams.get('tile-size-div')
  const isValidTileSizeDivNum =
    tileSizeDivNum && tileSizeDivNum >= TR_TILE_SIZE_DIV.MIN && tileSizeDivNum <= TR_TILE_SIZE_DIV.MAX
  if (isValidTileSizeDivNum) {
    trTileSizeDivNum = parseInt(tileSizeDivNum)
  }

  if (
    !isValidData ||
    !isValidBackground ||
    !isValidGrayScale ||
    !isValidNoiseFilter ||
    !isValidTrStrokeWeight ||
    !isValidHueShift ||
    !isValidTileSizeDivNum
  ) {
    trUpdateUrl()
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

  // URLの検索パラメータを設定
  url.searchParams.set('background', trBackgroundMode)
  url.searchParams.set('gray-scale', trGrayFilter)
  url.searchParams.set('noise-filter', trNoiseFilter)
  url.searchParams.set('stroke-weight', trStrokeWeight)
  url.searchParams.set('hue-shift', trHueShift)
  url.searchParams.set('tile-size-div', trTileSizeDivNum)
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
 * 4. ハッシュを20個のパラメータに分割し、それぞれ0-99の範囲にします。
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

  if (hashInput === 'all_off') {
    trDataParams = Array(TR_SET_DATA_PARAMS_LENGTH).fill(0)
  } else {
    // SHA-256ハッシュを生成
    const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(hashInput))
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

    // ハッシュをTR_SET_DATA_PARAMS_LENGTH個のパラメータに分割（各パラメータは0-99の範囲）
    trDataParams = []
    for (let i = 0; i < TR_SET_DATA_PARAMS_LENGTH; i++) {
      const part = hashHex.substring(i * 3, i * 3 + 3)
      trDataParams.push(parseInt(part, 16) % 100)
    }
  }
}

/**
 * trSineCountをリセットする関数。
 */
function trSineCountReset() {
  trSineCount = 0
}

/**
 * trChromaticGetColor 関数は、trDataParams 配列の値に基づいて色を生成します。
 * 各色は HSL カラーモデルを使用して計算され、色相、彩度、明度の値が設定されます。
 *
 * @returns {Object} colors - 生成された色のオブジェクト。キーは 'color1', 'color2', ... の形式。
 */
function trChromaticGetColor() {
  const colors = {}

  // カラ���
  for (let i = 1; i <= trDataParams.length - 3; i++) {
    colors[`color${i}`] = color(
      (map(trDataParams[i] * 4, 0, 99 * 4, 0, 360) + trHueShift) % 360,
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
 * 指定されたパラメータを使用して値を生成する関数。
 *
 * @param {number} x - 入力値。
 * @param {number[]} params - パラメータの配列。
 * @returns {number} 生成された値。
 */
function trGetDistributedValue(x, params) {
  // パラメータのインデックスを動的に選択
  const index1 = x % 20 // 0-19でループ
  const index2 = (x + 7) % 20 // オフセット付きでループ
  const index3 = (x * 13) % 20 // 別のパターンでループ

  // 選択したパラメータを使用して値を生成
  let value = x

  // 1段階目: 最初のパラメータを使用
  value = ((value * params[index1] + 0x45d9f3b) >>> 0) % 1000

  // 2段階目: 2つ目のパラメータで変調
  value = ((value + params[index2] * 0x45d9f3b) >>> 0) % 1000

  // 3段階目: 3つ目のパラメータで更に変調
  value = ((value ^ (params[index3] * 0x45d9f3b)) >>> 0) % 1000

  return value
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
function trDrawNoiseFilter() {
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

/**
 * 指定された座標に基づいてノイズ値を生成する関数。
 *
 * @param {number} x - X座標
 * @param {number} y - Y座標
 * @returns {number} 生成されたノイズ値
 */
function trGenerateNoiseValue(x, y) {
  return trGetDistributedValue(
    trDataParams.at(x % trDataParams.length) * trDataParams.at(y % trDataParams.length),
    trDataParams,
  )
}

/**
 * ランダムな形状パラメータを設定する関数。
 * 線幅とタイルサイズの分割数をランダムに設定します。
 */
function trFunctionShapeParamsRandomize() {
  trStrokeWeight = ceil(random(TR_STROKE_WEIGHT.MIN, TR_STROKE_WEIGHT.MAX))
  trTileSizeDivNum = ceil(random(TR_TILE_SIZE_DIV.MIN, TR_TILE_SIZE_DIV.MAX))
}

/**
 * フィルターパラメータをランダムに設定する関数。
 * 色相シフト、背景モード、グレイスケールフィルター、ノイズフィルターをランダムに設定します。
 * グレイスケールフィルターは、フレームカウントが4の倍数のときにのみランダムに設定されます。
 */
function trFunctionFilterParamsRandomize() {
  trHueShift = ceil(random(TR_HUE_SHIFT.MIN, TR_HUE_SHIFT.MAX))
  trBackgroundMode = random(Object.values(TR_BACKGROUND_MODE))
  trNoiseFilter = random(Object.values(TR_NOISE_FILTER))
}

/**
 * trSetInitUrlAndMidi 関数は、URLとMIDIの初期設定を行います。
 * URLを更新し、QRコードを生成し、パターン変更フレームを設定し、
 * データパラメータを設定します。
 * その後、プログラマーモードのセットアップを行います。
 */
function trSetInitUrlAndMidi() {
  trUpdateUrl()
  trCreateQrCode()
  trChangePatternFrame = frameCount
  trSetDataParams().then(() => {
    trSineCountReset()
    trUrlToData()

    trProgrammerModeSetup(
      async (i) => {
        trUtilityDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
        trSetDataGridIsPressed(i, !trGetPressedKeyList(trDataGrid).includes(i))
        await trSetDataParams()
      },
      () => {
        trIsNoDevice = true
      },
      trSetDataParams,
      trDataGrid,
      trMidiAccess,
      () => {
        if (trMode !== TR_MODE.AUTO) {
          trSineCountReset()
        }
      },
    ).then()
  })
}

/**
 * BitmapUtils クラスは、ビットマップデータを管理し、ランダムまたは特定のビットマップを取得するためのユーティリティを提供します。
 */
class BitmapUtils {
  /**
   * BitmapUtils のコンストラクタ
   * @param {Object} jsonData - ビットマップデータを含む JSON オブジ���クト
   */
  constructor(jsonData) {
    this.data = jsonData
    this.characters = Object.keys(jsonData.bitmaps)
  }

  /**
   * ランダムに1文字のビットマップを取得
   * @returns {{character: string, bitmap: number[][]}} ランダムに選ばれた文字とそのビットマップ
   */
  getRandomBitmap() {
    const randomChar = this.characters[Math.floor(Math.random() * this.characters.length)]
    return {
      character: randomChar,
      bitmap: this.data.bitmaps[randomChar].bitmap,
    }
  }

  /**
   * 指定した数のビットマップをランダムに取得
   * @param {number} count - 取得する文字数
   * @returns {Array<{character: string, bitmap: number[][]}>} ランダムに選ばれた文字とそのビットマップの配列
   */
  getRandomBitmaps(count = 1) {
    return Array.from({ length: count }, () => this.getRandomBitmap())
  }

  /**
   * 特定の文字のビットマップを取得
   * @param {string} character - 取得したい文字
   * @returns {{character: string, bitmap: number[][]}} 指定された文字とそのビットマップ
   */
  getBitmap(character) {
    if (this.data.bitmaps[character]) {
      return {
        character,
        bitmap: this.data.bitmaps[character].bitmap,
      }
    }
    return undefined
  }
}

/**
 * サイン波の計算を行う関数。
 * 現在のフレーム数とサイン波の速度を使用してサイン波の値を計算します。
 *
 * @returns {number} サイン波の値
 */
function trSineCalc() {
  return sin(frameCount * 50 * 0.004 * trSineSpeed)
}
