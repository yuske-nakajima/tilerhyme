function _trDrawComposeTiles(func) {
  return function (xi, yi, tileSize) {
    const noiseVal = trGenerateNoiseValue(xi, yi)

    trDrawBlock(() => {
      func({ xi, yi, tileSize, noiseVal })
    })
  }
}

// 効率的な合成関数
// 指定した数の関数を組み合わせる合成関数を生成
function trCreateComposeTiles(funcList, funcNum) {
  if (funcNum < 2) {
    throw new Error('Number of functions must be between 2 and 6')
  }

  const patterns = []
  const maxValue = Math.pow(2, funcNum) - 1
  const baseLength = funcList.length

  // ビット演算で組み合わせを生成
  for (let i = 0; i < baseLength; i++) {
    const selectedFuncs = []
    selectedFuncs.push(funcList[i]) // 最初の関数を追加

    // 残りの関数を選択
    let remaining = funcNum - 1
    let startIdx = (i + 1) % baseLength

    while (remaining > 0) {
      selectedFuncs.push(funcList[startIdx])
      startIdx = (startIdx + 1) % baseLength
      remaining--
    }

    // 生成された組み合わせから合成関数を作成
    patterns.push(
      _trDrawComposeTiles((params) => {
        const { xi, yi, tileSize, noiseVal } = params

        // noiseValをビットパターンとして使用
        const patternIndex = (noiseVal & maxValue) % selectedFuncs.length
        selectedFuncs[patternIndex](xi, yi, tileSize)
      }),
    )
  }

  return patterns
}
