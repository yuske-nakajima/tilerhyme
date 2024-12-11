const trFuncArray = [
  trDrawRectEllipseSquare16, // □○ひし形混合-2色交互
  trDrawRectEllipseSquare17, // □○ひし形混合-2色縦
  trDrawRectEllipseSquare18, // □○ひし形混合-2色横
  trDrawRectEllipseSquare26, // □○ひし形混合-線のみ-2色交互
  trDrawRectEllipseSquare27, // □○ひし形混合-線のみ-2色縦
  trDrawRectEllipseSquare28, // □○ひし形混合-線のみ-2色横
  trDrawRect16, // □-2色交互
  trDrawRect17, // □-2色縦
  trDrawRect18, // □-2色横
  trDrawRect19, // □-文字-単色1-文字
  trDrawRect26, // □-線のみ-2色交互
  trDrawRect27, // □-線のみ-2色縦
  trDrawRect28, // □-線のみ-2色横
  trDrawRect29, // □-文字-線のみ-文字
  trDrawRectBig26, // □大-線のみ-2色交互
  trDrawRectBig27, // □大-線のみ-2色縦
  trDrawRectBig28, // □大-線のみ-2色横
  trDrawSquare16, // ひし形オンリー-2色交互
  trDrawSquare17, // ひし形オンリー-2色縦
  trDrawSquare18, // ひし形オンリー-2色横
  trDrawSquare26, // ひし形-線のみ-2色交互
  trDrawSquare27, // ひし形-線のみ-2色縦
  trDrawSquare28, // ひし形-線のみ-2色横
  trDrawSquareBig26, // ひし形大-線のみ-2色交互
  trDrawSquareBig27, // ひし形大-線のみ-2色縦
  trDrawSquareBig28, // ひし形大-線のみ-2色横
  trDrawEllipse16, // ◯オンリー-2色交互
  trDrawEllipse17, // ◯オンリー-2色縦
  trDrawEllipse18, // ◯オンリー-2色横
  trDrawEllipse26, // ◯-線のみ-2色交互
  trDrawEllipse27, // ◯-線のみ-2色縦
  trDrawEllipse28, // ◯-線のみ-2色横
  trDrawEllipseBig26, // ◯大-線のみ-2色交互
  trDrawEllipseBig27, // ◯大-線のみ-2色縦
  trDrawEllipseBig28, // ◯大-線のみ-2色横
  trDrawVerticalRotate16, // 縦-回転-2色縦
  trDrawVerticalRotate17, // 縦-回転-2色横
  trDrawHorizontalRotate16, // 横-回転-2色縦
  trDrawHorizontalRotate17, // 横-回転-2色横
  trDrawDiagonalRightRotate16, // 右斜め回転-2色交互
  trDrawDiagonalRightRotate17, // 右斜め回転-2色交互2
  trDrawDiagonalLeftRotate16, // 左斜め回転-2色交互
  trDrawDiagonalLeftRotate17, // 左斜め回転-2色交互2
  trDrawEllipseStrokeRotate11, // 丸-回転-2色1
  trDrawEllipseStrokeRotate12, // 丸-回転-2色2
  trDrawEllipseStrokeRotate13, // 丸-回転-2色3
  trDrawCrossRotate11, // 十字-回転-2色1
  trDrawCrossRotate12, // 十字-回転-2色2
  trDrawCrossRotate13, // 十字-回転-2色3
  trDrawArc11, // 半円-縦
  trDrawArc12, // 半円-横
  trDrawArc13, // 半円-混合
  trDrawTriangle11, // 三角形-混合
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

  const value1 = trDataParams.filter((x) => x % 3 === 0).reduce((acc, cur) => acc + cur, 0)
  const mode1 = value1 % trFuncArray.length

  const value2 = trDataParams.filter((x) => x % 3 === 1).reduce((acc, cur) => acc + cur, 0)
  const mode2 = value2 % trFuncArray.length

  const value3 = trDataParams.filter((x) => x % 3 === 2).reduce((acc, cur) => acc + cur, 0)
  const mode3 = value3 % trFuncArray.length

  const v1 = value1 + value2
  const v2 = value2 + value3

  for (let y = 0; y <= h; y++) {
    for (let x = 0; x <= w; x++) {
      trFuncArray[mode1](x, y, tileSize)
    }
  }

  // for (let y = 0; y <= h; y++) {
  //   for (let x = 0; x <= w; x++) {
  //     switch (v1 % 3) {
  //       case 0:
  //         trFuncArray[mode1](x, y, tileSize)
  //         break
  //       case 1:
  //         trFuncArray[mode2](x, y, tileSize)
  //         break
  //       default:
  //         trFuncArray[mode3](x, y, tileSize)
  //         break
  //     }
  //   }
  // }

  // for (let y = 0; y <= h; y++) {
  //   for (let x = 0; x <= w; x++) {
  //     switch (v2 % 4) {
  //       case 0:
  //         trFuncArray[mode3](x, y, tileSize)
  //         break
  //       case 1:
  //         trFuncArray[mode2](x, y, tileSize)
  //         break
  //       case 2:
  //         trFuncArray[mode1](x, y, tileSize)
  //         break
  //       default:
  //         break
  //     }
  //   }
  // }
}
