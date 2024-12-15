const trFuncArray = [
  trDrawRectEllipseSquare16, // □○ひし形混合-2色交互
  trDrawRectEllipseSquare26, // □○ひし形混合-線のみ-2色交互
  trDrawRect16, // □-2色交互
  trDrawRect19, // □-文字-単色1-文字
  trDrawRect26, // □-線のみ-2色交互
  trDrawRect29, // □-文字-線のみ-文字
  trDrawRectBig26, // □大-線のみ-2色交互
  trDrawSquare16, // ひし形オンリー-2色交互
  trDrawSquare26, // ひし形-線のみ-2色交互
  trDrawSquareBig26, // ひし形大-線のみ-2色交互
  trDrawEllipse16, // ◯オンリー-2色交互
  trDrawEllipse26, // ◯-線のみ-2色交互
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
]

/**
 * trDrawShape 関数は、指定された幅と高さに基づいて形状を描画します。
 * 幅と高さを100で割った値を使用して、trDataParams 配列の各パラメータに対して
 * 矩形を描画します。矩形は黒色で塗りつぶされ、指定された位置に描画されます。
 */
function trDrawShape() {
  // 画面全体をタイルで埋める
  // const tileSize = width / map(trDataParams[15], 0, 99, 5, 20) // タイルの基本サイズ
  const tileSize = width / 8 // タイルの基本サイズ
  const w = ceil(width / tileSize)
  const h = ceil(height / tileSize)

  const mode = trDataParams.reduce((acc, cur) => acc + cur, 0) % trFuncArray.length

  for (let y = 0; y <= h; y++) {
    for (let x = 0; x <= w; x++) {
      trFuncArray[mode](x, y, tileSize)
    }
  }

  trNoiseFilter()
}
