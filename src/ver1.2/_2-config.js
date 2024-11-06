// ------------------------------------------------------------
// --- 定数
// ------------------------------------------------------------
const TR_APP_NAME = 'TILERHYME'
const TR_VERSION = '1.2'
const TR_VERSION_NAME = 'RIP'

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

const TR_COLOR_ARRAY = [
  {
    _1: '#ffffff',
    _2: '#000000',
    _3: '#aaaaaa',
  },

  {
    _1: '#dff2fc',
    _2: '#504c94',
    _3: '#3c73a8',
  },
  {
    _1: '#f9cfcf',
    _2: '#f5b19b',
    _3: '#c95784',
  },
  {
    _1: '#fff2ad',
    _2: '#5391c8',
    _3: '#0f1d3e',
  },
  {
    _1: '#34455c',
    _2: '#88513e',
    _3: '#b1585b',
  },
  {
    _1: '#ea903a',
    _2: '#e99aad',
    _3: '#7faf7b',
  },
  {
    _1: '#ffeb00',
    _2: '#64c2c5',
    _3: '#00629b',
  },
  {
    _1: '#1f9cb7',
    _2: '#1757a7',
    _3: '#fff2cc',
  },
  {
    _1: '#faf054',
    _2: '#224e29',
    _3: '#e7242e',
  },
]

const TR_SOFT_UI_WIDTH = 200
const TR_SOFT_UI_CELL_WIDTH = TR_SOFT_UI_WIDTH / 8

const TR_COLORS = {}

const TR_WALLPAPER_MODE = {
  FULL: 0,
  INFO: 1,
}

const TR_WALLPAPER_SIZE = 1080
// ------------------------------------------------------------
// --- 変数
// ------------------------------------------------------------
let lastTapTime = 0

let trCanvas

let trWindowSize

let trWindowGap

let trCalcDataGridResult = {
  key0: 0,
  key1: 0,
  key2: 0,
  key3: 0,
}

let trColor = TR_COLOR_ARRAY[0]

let trCellDivNum

let trIsNoDevice = false

let trSoftUiStartPos

let trDataGrid = trGetOrInitializeValue(`trDataGrid-ver${TR_VERSION}`, TR_INIT_DATA_GRID)

let trIsDataGridClickable = true

// ------------------------------------------------------------
// --- 関数
// ------------------------------------------------------------
/**
 * データグリッドを計算する関数
 * @param {Array.<{group: number, isPressed: boolean, calcValue: number}>} dataGrid - キーのデータグリッド
 * @returns {{key0: number, key1: number, key2: number, key3: number}} - 計算結果のオブジェクト
 */
function trCalcDataGrid(dataGrid) {
  const result = new Map()
  for (let i = 0; i < 4; i++) {
    result.set(i, 0)
  }
  for (const item of dataGrid) {
    const nowValue = result.get(item.group)
    if (item.isPressed && nowValue !== undefined) {
      result.set(item.group, nowValue + item.calcValue)
    }
  }

  return {
    key0: result.get(0) ?? 0,
    key1: result.get(1) ?? 0,
    key2: result.get(2) ?? 0,
    key3: result.get(3) ?? 0,
  }
}

/**
 * 楕円の四角形を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawEllipseSquare(pos, width) {
  ellipse(pos.x - width / 3, pos.y - width / 3, width / 3)
  ellipse(pos.x + width / 3, pos.y - width / 3, width / 3)
  ellipse(pos.x - width / 3, pos.y + width / 3, width / 3)
  ellipse(pos.x + width / 3, pos.y + width / 3, width / 3)
}

/**
 * 菱形の楕円を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawEllipseRhombus(pos, width) {
  ellipse(pos.x - width / 3, pos.y, width / 3)
  ellipse(pos.x + width / 3, pos.y, width / 3)
  ellipse(pos.x, pos.y - width / 3, width / 3)
  ellipse(pos.x, pos.y + width / 3, width / 3)
}

/**
 * 半円（上）を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawHalfEllipseTop(pos, width) {
  arc(pos.x, pos.y, width, width, PI, TWO_PI)
}

/**
 * 半円（下）を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawHalfEllipseBottom(pos, width) {
  arc(pos.x, pos.y, width, width, 0, PI)
}

/**
 * 四角形を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawRect(pos, width) {
  rectMode(CENTER)
  rect(pos.x, pos.y, width)
}

/**
 * 四角形を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawRectSquare(pos, width) {
  trDrawRect(createVector(pos.x - width / 3, pos.y - width / 3), width / 3)
  trDrawRect(createVector(pos.x + width / 3, pos.y - width / 3), width / 3)
  trDrawRect(createVector(pos.x - width / 3, pos.y + width / 3), width / 3)
  trDrawRect(createVector(pos.x + width / 3, pos.y + width / 3), width / 3)
}

/**
 * 菱形の四角形を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawRectRhombus(pos, width) {
  trDrawRect(createVector(pos.x - width / 3, pos.y), width / 3)
  trDrawRect(createVector(pos.x + width / 3, pos.y), width / 3)
  trDrawRect(createVector(pos.x, pos.y - width / 3), width / 3)
  trDrawRect(createVector(pos.x, pos.y + width / 3), width / 3)
}

/**
 * 菱形を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawRhombus(pos, width) {
  beginShape()
  vertex(pos.x, pos.y - width)
  vertex(pos.x + width, pos.y)
  vertex(pos.x, pos.y + width)
  vertex(pos.x - width, pos.y)
  endShape(CLOSE)
}

/**
 * 菱形の四角形を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawRhombusSquare(pos, width) {
  trDrawRhombus(createVector(pos.x - width / 3, pos.y - width / 3), width / 3)
  trDrawRhombus(createVector(pos.x + width / 3, pos.y - width / 3), width / 3)
  trDrawRhombus(createVector(pos.x - width / 3, pos.y + width / 3), width / 3)
  trDrawRhombus(createVector(pos.x + width / 3, pos.y + width / 3), width / 3)
}

/**
 * 菱形の菱形を描画する関数
 * @param {{x: number, y: number}} pos - 位置ベクトル
 * @param {number} width - 幅
 */
function trDrawRhombusRhombus(pos, width) {
  trDrawRhombus(createVector(pos.x - width / 3, pos.y), width / 3)
  trDrawRhombus(createVector(pos.x + width / 3, pos.y), width / 3)
  trDrawRhombus(createVector(pos.x, pos.y - width / 3), width / 3)
  trDrawRhombus(createVector(pos.x, pos.y + width / 3), width / 3)
}

/**
 * 指定されたパラメータに基づいて描画関数の配列を生成します。
 *
 * @param {Object} pos - 位置オブジェクト。
 * @param {number} pos.x - x座標。
 * @param {number} pos.y - y座標。
 * @param {number} width - 形状の幅。
 * @param {number} rate - 形状のスケーリング率。
 * @param {boolean} isFill - 形状が塗りつぶされるか輪郭のみかを決定します。
 * @returns {Array<Function>} 入力パラメータに基づいてさまざまな形状を描画する関数の配列。
 */
function trFuncArray(
  pos, // {x: number, y: number}
  width, // number
  rate, // number
  isFill, // boolean
) {
  const { x, y } = pos
  const leftTopPos = createVector(x * width, y * width)
  const centerPos = createVector(x * width + width / 2, y * width + width / 2)

  const result = []

  const commonFuncList = [
    () => {
      // ずらした四角1
      if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
        trDrawRect(centerPos, width * rate)
      }
    },
    () => {
      // ずらした四角2
      if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
        trDrawRect(centerPos, width * rate)
      }
    },
    () => {
      // ずらしたひし形1
      if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
        trDrawRhombus(centerPos, (width / 2) * rate)
      }
    },
    () => {
      // ずらしたひし形2
      if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
        trDrawRhombus(centerPos, (width / 2) * rate)
      }
    },
  ]

  for (const func of commonFuncList) {
    result.push(func)
  }

  if (isFill) {
    for (const func of [
      // 円系
      () => {
        ellipse(centerPos.x, centerPos.y, width * rate)
      },
      () => {
        // ずらした円1
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          ellipse(centerPos.x, centerPos.y, width * rate)
        }
      },
      () => {
        // ずらした円2
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          ellipse(centerPos.x, centerPos.y, width * rate)
        }
      },
      () => {
        // 四隅に円
        trDrawEllipseSquare(centerPos, width)
      },
      () => {
        //四隅に円（ずらした）1
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          trDrawEllipseSquare(centerPos, width)
        }
      },
      () => {
        //四隅に円（ずらした）2
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          trDrawEllipseSquare(centerPos, width)
        }
      },
      () => {
        // ひし形に円を配置（4つ）
        trDrawEllipseRhombus(centerPos, width)
      },
      () => {
        // ひし形に円を配置（4つ）（ずらした）1
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          trDrawEllipseRhombus(centerPos, width)
        }
      },
      () => {
        // ひし形に円を配置（4つ）（ずらした）2
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          trDrawEllipseRhombus(centerPos, width)
        }
      },
      // 半円（上）
      () => {
        trDrawHalfEllipseTop(centerPos, width * rate)
      },
      // 半円（下）
      () => {
        trDrawHalfEllipseBottom(centerPos, width * rate)
      },
      () => {
        // ずらした半円1（下）
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          trDrawHalfEllipseBottom(centerPos, width * rate)
        }
      },
      () => {
        // ずらした半円2（下）
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          trDrawHalfEllipseBottom(centerPos, width * rate)
        }
      },
      // 四角系
      () => {
        // 四角
        trDrawRect(centerPos, width * rate)
      },
      () => {
        // 四隅に四角
        trDrawRectSquare(centerPos, width)
      },
      () => {
        // 四隅に四角（ずらした）1
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          trDrawRectSquare(centerPos, width)
        }
      },
      () => {
        // 四隅に四角（ずらした）2
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          trDrawRectSquare(centerPos, width)
        }
      },
      () => {
        // ひし形に四角を配置（4つ）
        trDrawRectRhombus(centerPos, width)
      },
      () => {
        // ひし形に四角を配置（4つ）（ずらした）1
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          trDrawRectRhombus(centerPos, width)
        }
      },
      () => {
        // ひし形に四角を配置（4つ）（ずらした）2
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          trDrawRectRhombus(centerPos, width)
        }
      },
      // ひし形
      () => {
        trDrawRhombus(centerPos, (width / 2) * rate)
      },
      () => {
        // 四隅にひし形
        trDrawRhombusSquare(centerPos, width)
      },
      () => {
        // 四隅にひし形（ずらした）1
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          trDrawRhombusSquare(centerPos, width)
        }
      },
      () => {
        // 四隅にひし形（ずらした）2
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          trDrawRhombusSquare(centerPos, width)
        }
      },
      () => {
        // ひし形にひし形を配置（4つ）
        trDrawRhombusRhombus(centerPos, width)
      },
      () => {
        // ひし形にひし形を配置（4つ）（ずらした）1
        if ((y % 2 === 0 && x % 2 === 1) || (y % 2 === 1 && x % 2 === 0)) {
          trDrawRhombusRhombus(centerPos, width)
        }
      },
      () => {
        // ひし形にひし形を配置（4つ）（ずらした）2
        if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          trDrawRhombusRhombus(centerPos, width)
        }
      },
    ]) {
      result.push(func)
    }
  }

  if (!isFill) {
    for (const func of [
      // 線形
      () => {
        // バッテン
        line(leftTopPos.x + width, leftTopPos.y, leftTopPos.x, leftTopPos.y + width)
        line(leftTopPos.x, leftTopPos.y, leftTopPos.x + width, leftTopPos.y + width)
      },
      () => {
        // 左上から左下
        line(leftTopPos.x, leftTopPos.y, leftTopPos.x, leftTopPos.y + width)
        // 左下から右下
        line(leftTopPos.x, leftTopPos.y + width, leftTopPos.x + width, leftTopPos.y + width)
      },
    ]) {
      result.push(func)
    }
  }

  return result
}

/**
 * 指定されたパラメータに基づいて形状を描画する関数
 * @param {number} value - 形状の値
 * @param {number} shapeCount - 形状の数
 * @param {number} rate - 形状のスケーリング率
 * @param {string} color - 形状の色
 * @param {boolean} isFill - 形状が塗りつぶされるか輪郭のみかを決定します
 */
function trDrawShape(value, shapeCount, rate, color, isFill) {
  if (value === 0) {
    return
  }

  const _count = Math.ceil(shapeCount)
  const _width = width / _count
  const count = createVector(_count, height / _width)

  const loopFunc = (pos) => {
    const _funcArray = trFuncArray(pos, _width, rate, isFill)
    const func = _funcArray.at(value % _funcArray.length)
    if (!func) {
      return
    }
    trDrawBlock(func)
  }

  trDrawBlock(() => {
    if (isFill) {
      noStroke()
      fill(color)
    } else {
      noFill()
      stroke(color)
      strokeWeight(1)
    }

    for (let x = 0; x < count.x; x++) {
      for (let y = 0; y < count.y; y++) {
        loopFunc(createVector(x, y))
      }
    }
  })
}

/**
 * データグリッドのisPressedプロパティを設定する関数
 * @param {number} value - 設定する値
 * @param {boolean} isPressed - 設定するisPressedの値
 */
function trSetDataGridIsPressed(value, isPressed) {
  for (let i = 0; i < trDataGrid.length; i++) {
    if (trDataGrid[i].value === value) {
      trDataGrid[i].isPressed = isPressed
      trSaveToLocalStorage(`trDataGrid-ver${TR_VERSION}`, trDataGrid)
    }
  }
}

/**
 * trDataGridの色を計算結果に基づいて設定する関数。
 * `trCalcDataGrid`関数を使用してデータグリッドの結果を計算し、
 * 結果のキーに基づいて`TR_COLOR_ARRAY`から色を選択します。
 * 有効な色が見つかった場合、それを`trColor`に割り当てます。
 */
function trSetColor() {
  trCalcDataGridResult = trCalcDataGrid(trDataGrid)
  const _color = TR_COLOR_ARRAY.at(trCalcDataGridResult.key0 % TR_COLOR_ARRAY.length)
  if (!_color) {
    return
  }
  trColor = _color
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
      for (let xi = 0; xi < 8; xi++) {
        for (let yi = 0; yi < 8; yi++) {
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
