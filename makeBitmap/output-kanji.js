const fs = require('fs').promises

// 漢字の文字コード範囲（CJK統合漢字）
const RANGES = [
  [0x4e00, 0x9fff], // CJK統合漢字
  // [0x3400, 0x4dbf], // CJK統合漢字拡張A
  // [0xf900, 0xfaff], // CJK互換漢字
]

async function generateKanjiList() {
  try {
    let allKanji = ''

    // 各範囲の漢字を生成
    for (const [start, end] of RANGES) {
      for (let code = start; code <= end; code++) {
        const kanji = String.fromCodePoint(code)
        allKanji += kanji
      }
    }

    // 一文字ずつ改行して出力
    const kanjiWithNewlines = Array.from(allKanji).join('\n')

    // ファイルに書き出し
    await fs.writeFile('kanji-list.txt', allKanji.trim(), 'utf8')
    console.log(`Successfully generated kanji list (${Array.from(allKanji.trim()).length} characters)`)
  } catch (error) {
    console.error('Error:', error)
  }
}

// スクリプトの実行
generateKanjiList()
