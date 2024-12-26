/**
 * 他描画に影響範囲が及ばないようにpushとpopで囲む
 * @param {function} func - 描画関数
 */
function trDrawBlock(func) {
  push()
  func()
  pop()
}

/**
 * @param {Object} pos - 位置オブジェクト
 * @param {number} pos.x - x座標
 * @param {number} pos.y - y座標
 * @param {Object} size - サイズオブジェクト
 * @param {number} size.width - 幅
 * @param {number} size.height - 高さ
 * @param {function} func - 実行する関数
 */
function trMousePressedBlock(pos, size, func) {
  if (pos.x <= mouseX && mouseX <= pos.x + size.width && pos.y <= mouseY && mouseY <= pos.y + size.height) {
    func()
  }
}

/**
 * ローカルストレージから値を取得または初期化する関数
 * @param {string} key - ローカルストレージのキー
 * @param {*} defaultValue - デフォルト値
 * @returns {*} - 取得した値またはデフォルト値
 */
function trGetOrInitializeValue(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  if (storedValue !== null) {
    return JSON.parse(storedValue)
  }
  trSaveToLocalStorage(key, defaultValue)
  return defaultValue
}

/**
 * ローカルストレージに値を保存する関数
 * @param {string} key - ローカルストレージのキー
 * @param {*} value - 保存する値
 * @returns {*} - 保存した値
 */
function trSaveToLocalStorage(key, value) {
  const existingValue = localStorage.getItem(key)
  if (existingValue !== null) {
    localStorage.removeItem(key)
  }
  localStorage.setItem(key, JSON.stringify(value))
  return value
}

/**
 * LounchPadのボタンが押されたかどうかを判定する関数
 * @param {number} data - ボタンのデータ
 * @returns {boolean} - 押されたかどうか
 */
function trLpIsPressed(data) {
  return data === 127
}

/**
 * @param {Array.<{isPressed: boolean, value: number}>} dataGrid - キーのデータグリッド
 * @returns {number[]} - 押されたキーのリスト
 */
function trGetPressedKeyList(dataGrid) {
  const result = []
  for (const item of dataGrid) {
    if (item.isPressed) {
      result.push(item.value)
    }
  }
  return result
}

function createLaunchpadSetup(userConfig = {}) {
  // デフォルト設定とユーザー設定をマージ
  const config = {
    ...{
      // デフォルト設定
      inputNames: ['Launchpad Mini MK3 LPMiniMK3 MIDI Out', 'MIDIIN2 (LPMiniMK3 MIDI)'],
      outputNames: ['Launchpad Mini MK3 LPMiniMK3 MIDI In', 'MIDIOUT2 (LPMiniMK3 MIDI)'],
      noteRange: { min: 36, max: 99 },
      incrementButtonCodeList: [],
      functionButtonCodeList: [],
      noneButtonCodeList: [],
      activeColor: 12,
      functionButtonColor: 96,
      incrementButtonColor: 72,
      inactiveColor: 0,
    },
    ...userConfig,
  }

  // 以降は設定を使って処理を行う
  return async (
    pressedCallback,
    failedCallback,
    setDataParams,
    dataGrid,
    _access,
    patternButtonClickAction = () => {},
  ) => {
    try {
      const access = _access || (await navigator.requestMIDIAccess())

      const input = Array.from(access.inputs.values()).find((input) => config.inputNames.includes(input.name))
      if (!input) {
        const errorMessage = 'inputが見つかりません'
        new Error(errorMessage)
      }

      const output = Array.from(access.outputs.values()).find((output) => config.outputNames.includes(output.name))
      if (!output) {
        const errorMessage = 'outputが見つかりません'
        new Error(errorMessage)
      }

      // 初期状態の設定
      for (let i = config.noteRange.min; i <= config.noteRange.max; i++) {
        const isPressed = trGetPressedKeyList(dataGrid).includes(i)
        if (isPressed) {
          if (config.functionButtonCodeList.includes(i)) {
            output.send([0x90, i, config.functionButtonColor /* 色コード */])
          } else {
            output.send([0x90, i, config.activeColor /* 色コード */])
          }
          await setDataParams()
        } else {
          output.send([0x90, i, config.inactiveColor])
        }
      }

      input.onmidimessage = function (event) {
        const status = event.data[0]
        const note = event.data[1]
        const velocity = event.data[2]

        if (!status || !note) {
          return
        }

        if (config.incrementButtonCodeList.includes(note)) {
          if (trLpIsPressed(velocity)) {
            pressedCallback(note)
            output.send([0x90, note, config.incrementButtonColor /* 色コード */])
          } else {
            output.send([0x90, note, 0])
          }
          return
        }

        if (config.noneButtonCodeList.includes(note)) {
          if (trLpIsPressed(velocity)) {
            output.send([0x90, note, 0])
          }
          return
        }

        if (!velocity) {
          return
        }

        // ON/OFFボタンの処理
        for (let i = config.noteRange.min; i <= config.noteRange.max; i++) {
          if (note !== i) {
            continue
          }

          if (trLpIsPressed(velocity)) {
            pressedCallback(note)
          }

          if (trGetPressedKeyList(dataGrid).includes(i)) {
            if (config.functionButtonCodeList.includes(i)) {
              output.send([0x90, i, config.functionButtonColor /* 色コード */])
            } else {
              output.send([0x90, i, config.activeColor /* 色コード */])
              patternButtonClickAction()
            }
          } else {
            output.send([0x90, i, 0])
            if (!config.functionButtonCodeList.includes(i)) {
              patternButtonClickAction()
            }
          }
        }
      }
    } catch (e) {
      failedCallback()
    }
  }
}

/**
 * [Launchpad Mini MK3]のセットアップを行う関数
 * @param {function(number): void} pressedCallback - ボタンが押されたときのコールバック関数
 * @param {Array.<{isPressed: boolean, value: number}>} dataGrid - キーのデータグリッド
 * @returns {Promise<string|undefined>} - エラーメッセージまたはundefined
 */
const trLpSetup = createLaunchpadSetup()

/**
 * 指定されたキャンバスを画像として保存します。
 * ファイル名は現在の日時を基に生成され、拡張子は '.tilerhyme' です。
 *
 * @param {HTMLCanvasElement} canvas - 保存するキャンバス要素
 */
function trSaveImage(canvas) {
  const fileName =
    new Date()
      .toISOString()
      .replace(/[:\-T]/g, '_')
      .split('.')[0] + '.tilerhyme'
  saveCanvas(canvas, fileName, 'png')
}

function trRandomSeed() {
  const randomList = []
  for (let i = 8; i <= 8; i++) {
    randomList.push(i)
    randomList.push(-i)
  }

  // randomListの中からランダムに1つ選ぶ
  const r = Math.random() * randomList.length
  return randomList[Math.floor(r)]
}
