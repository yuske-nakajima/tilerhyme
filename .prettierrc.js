module.exports = {
  trailingComma: 'all', // オブジェクトや配列の末尾にカンマをつける
  tabWidth: 2, // インデントに使用するタブまたはスペースの数を2に設定する
  semi: false, // セミコロンを使用しない
  singleQuote: true, // シングルクォートを使用する
  jsxSingleQuote: true, // JSX内でもシングルクォートを使用する
  printWidth: 120, // 行の最大幅を80に設定する
  useTabs: false, // インデントにタブを使用しない
  quoteProps: 'as-needed', // オブジェクトのプロパティ名を引用符で囲む場合、必要に応じてのみ囲む
  bracketSpacing: true, // オブジェクトの{}内や配列の[]内のスペースを追加する
  bracketSameLine: false, // オブジェクトや配列の開始括弧と最初の要素を同じ行に記述しない
  htmlWhitespaceSensitivity: 'css', // HTMLの空白文字の扱い方を指定する。'css'はCSSと同じように扱うことを意味する。
  endOfLine: 'lf', // 改行文字をLFにする
  embeddedLanguageFormatting: 'auto', // 言語固有のフォーマッタを自動的に使用する
}
