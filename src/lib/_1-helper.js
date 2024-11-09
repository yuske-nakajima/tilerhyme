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

/**
 * [Launchpad Mini MK3]のセットアップを行う関数
 * @param {function(number): void} pressedCallback - ボタンが押されたときのコールバック関数
 * @param {Array.<{isPressed: boolean, value: number}>} dataGrid - キーのデータグリッド
 * @returns {Promise<string|undefined>} - エラーメッセージまたはundefined
 */
async function trLpSetup(pressedCallback, failedCallback, deviceSetColor, dataGrid) {
  try {
    const access = await navigator.requestMIDIAccess()

    const input = Array.from(access.inputs.values())
      .filter((input) => {
        return (
          input.name === 'Launchpad Mini MK3 LPMiniMK3 MIDI Out' || // mac
          input.name === 'MIDIIN2 (LPMiniMK3 MIDI)' // windows
        )
      })
      .at(0)
    if (!input) {
      const errorMessage = 'inputが見つかりません'
      new Error(errorMessage)
    }

    const output = Array.from(access.outputs.values())
      .filter((output) => {
        return (
          output.name === 'Launchpad Mini MK3 LPMiniMK3 MIDI In' || // mac
          output.name === 'MIDIOUT2 (LPMiniMK3 MIDI)' // windows
        )
      })
      .at(0)
    if (!output) {
      const errorMessage = 'outputが見つかりません'
      new Error(errorMessage)
    }

    for (let i = 36; i <= 99; i++) {
      const isPressed = trGetPressedKeyList(dataGrid).includes(i)
      if (isPressed) {
        output.send([0x90, i, 41 /* 色コード */])
        deviceSetColor()
      } else {
        output.send([0x90, i, 0])
      }
    }

    input.onmidimessage = function (event) {
      const status = event.data[0]
      const note = event.data[1]
      const velocity = event.data[2]

      // 有効なデータのみ処理する
      if (!status || !note || !velocity) {
        return
      }

      for (let i = 36; i <= 99; i++) {
        if (note !== i) {
          continue
        }

        if (trLpIsPressed(velocity)) {
          pressedCallback(note)
        }

        if (trGetPressedKeyList(dataGrid).includes(i)) {
          output.send([0x90, i, 41 /* 色コード */])
        } else {
          output.send([0x90, i, 0])
        }
      }
    }
  } catch (e) {
    failedCallback()
  }
}

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
