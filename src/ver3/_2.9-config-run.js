let trFuncArray = [
  trDrawRectEllipseSquare16, // □○ひし形混合-カラフル
  trDrawRectEllipseSquare26, // □○ひし形混合-線のみ-カラフル
  trDrawRect16, // □-カラフル
  trDrawRect19, // □-文字-カラフル-文字
  trDrawRect26, // □-線のみ-カラフル
  trDrawRect29, // □-文字-線のみ-文字
  trDrawRectBig26, // □大-線のみ-カラフル
  trDrawSquare16, // ひし形オンリー-カラフル
  trDrawSquare26, // ひし形-線のみ-カラフル
  trDrawSquareBig26, // ひし形大-線のみ-カラフル
  trDrawEllipse16, // ◯オンリー-カラフル
  trDrawEllipse26, // ◯-線のみ-カラフル
  trDrawEllipseBig26, // ◯大-線のみ-2色交互
  trDrawDiagonalRightRotate16, // 右斜め回転-2色交互
  trDrawDiagonalLeftRotate16, // 左斜め回転-2色交互
  trDrawEllipseStrokeRightRotate11, // 丸-回転-右-2色1
  trDrawEllipseStrokeLeftRotate11, // 丸-回転-左-2色1
  trDrawCrossRotate11, // 十字-回転-2色1
  trDrawArc13, // 半円-混合
  trDrawTriangle11, // 三角形-混合
  trDrawSquareStrokeEllipse, // ひし形-◯混合-線のみ
  trDrawSquareEllipse, // ひし形-◯混合
  trDrawRectEllipse, // □◯混合
  trDrawRectStrokeEllipse, // □◯混合-線のみ
  trDrawEllipseStrokeRightEllipse, // 丸-右-◯混合-線のみ
  trDrawEllipseStrokeLeftEllipse, // 丸-左-◯混合-線のみ
  trDrawDiagonalRight, // 右斜め混合
  trDrawDiagonalLeft, // 左斜め混合
  trDrawEllipseParts, // 丸-部分
  trDrawRectAndStroke, // 四角形と線
  trDrawSquareCascade1, // 四角形-連続1
  trDrawSquareCascade2, // 四角形-連続2（同心）
  trDrawSquareCascade3, // 重なった四角形
  trDrawFillStar, // 星-塗りつぶし
  trDrawStrokeStar, // 星-線のみ
  trDrawFillPentagon, // 五角形-塗りつぶし
  trDrawStrokePentagon, // 五角形-線のみ
  trDrawFillHexagon, // 六角形-塗りつぶし
  trDrawStrokeHexagon, // 六角形-線のみ
]

// 合成関数を追加
let trComposeFuncList = []

if (trFuncArray.length >= 2) {
  const limit = trFuncArray.length > 6 ? trFuncArray.length / 1.8 : trFuncArray.length + 1
  for (let i = 2; i < limit; i++) {
    trComposeFuncList = [...trComposeFuncList, ...trCreateComposeTiles(trFuncArray, i)]
  }
}
/**
 * trDrawShape 関数は、指定された幅と高さに基づいて形状を描画します。
 * 幅と高さを100で割った値を使用して、trDataParams 配列の各パラメータに対して
 * 矩形を描画します。矩形は黒色で塗りつぶされ、指定された位置に描画されます。
 */
function trDrawShape() {
  // 画面全体をタイルで埋める
  const tileSize = min(width, height) / trTileSizeDivNum // タイルの基本サイズ
  const w = ceil(width / tileSize)
  const h = ceil(height / tileSize)

  const mode = trDataParams.reduce((acc, cur) => acc + cur, 0) % trComposeFuncList.length

  for (let y = 0; y <= h; y++) {
    for (let x = 0; x <= w; x++) {
      trComposeFuncList[mode](x, y, tileSize)
    }
  }
}
