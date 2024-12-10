const trFuncArray = [
  trDrawRectEllipseSquare11, // □○ひし形混合-単色1
  // trDrawRectEllipseSquare12, // □○ひし形混合-単色2
  // trDrawRectEllipseSquare13, // □○ひし形混合-単色3
  // trDrawRectEllipseSquare14, // □○ひし形混合-単色4
  // trDrawRectEllipseSquare15, // □○ひし形混合-単色5
  trDrawRectEllipseSquare16, // □○ひし形混合-2色交互
  trDrawRectEllipseSquare17, // □○ひし形混合-2色縦
  trDrawRectEllipseSquare18, // □○ひし形混合-2色横
  trDrawRectEllipseSquare21, // □○ひし形混合-線のみ-単色1
  // trDrawRectEllipseSquare22, // □○ひし形混合-線のみ-単色2
  // trDrawRectEllipseSquare23, // □○ひし形混合-線のみ-単色3
  // trDrawRectEllipseSquare24, // □○ひし形混合-線のみ-単色4
  // trDrawRectEllipseSquare25, // □○ひし形混合-線のみ-単色5
  trDrawRectEllipseSquare26, // □○ひし形混合-線のみ-2色交互
  trDrawRectEllipseSquare27, // □○ひし形混合-線のみ-2色縦
  trDrawRectEllipseSquare28, // □○ひし形混合-線のみ-2色横
  trDrawRect11, // □-単色1
  // trDrawRect12, // □-単色2
  // trDrawRect13, // □-単色3
  // trDrawRect14, // □-単色4
  // trDrawRect15, // □-単色5
  trDrawRect16, // □-2色交互
  trDrawRect17, // □-2色縦
  trDrawRect18, // □-2色横
  trDrawRect19, // □-文字-単色1-文字
  trDrawRect21, // □-線のみ-単色1
  // trDrawRect22, // □-線のみ-単色2
  // trDrawRect23, // □-線のみ-単色3
  // trDrawRect24, // □-線のみ-単色4
  // trDrawRect25, // □-線のみ-単色5
  trDrawRect26, // □-線のみ-2色交互
  trDrawRect27, // □-線のみ-2色縦
  trDrawRect28, // □-線のみ-2色横
  trDrawRect29, // □-文字-線のみ-文字
  trDrawRectBig21, // □大-線のみ-単色1
  // trDrawRectBig22, // □大-線のみ-単色2
  // trDrawRectBig23, // □大-線のみ-単色3
  // trDrawRectBig24, // □大-線のみ-単色4
  // trDrawRectBig25, // □大-線のみ-単色5
  trDrawRectBig26, // □大-線のみ-2色交互
  trDrawRectBig27, // □大-線のみ-2色縦
  trDrawRectBig28, // □大-線のみ-2色横
  trDrawSquare11, // ひし形オンリー-単色1
  // trDrawSquare12, // ひし形オンリー-単色2
  // trDrawSquare13, // ひし形オンリー-単色3
  // trDrawSquare14, // ひし形オンリー-単色4
  // trDrawSquare15, // ひし形オンリー-単色5
  trDrawSquare16, // ひし形オンリー-2色交互
  trDrawSquare17, // ひし形オンリー-2色縦
  trDrawSquare18, // ひし形オンリー-2色横
  trDrawSquare21, // ひし形-線のみ-単色1
  // trDrawSquare22, // ひし形-線のみ-単色2
  // trDrawSquare23, // ひし形-線のみ-単色3
  // trDrawSquare24, // ひし形-線のみ-単色4
  // trDrawSquare25, // ひし形-線のみ-単色5
  trDrawSquare26, // ひし形-線のみ-2色交互
  trDrawSquare27, // ひし形-線のみ-2色縦
  trDrawSquare28, // ひし形-線のみ-2色横
  trDrawSquareBig21, // ひし形大-線のみ-単色1
  // trDrawSquareBig22, // ひし形大-線のみ-単色2
  // trDrawSquareBig23, // ひし形大-線のみ-単色3
  // trDrawSquareBig24, // ひし形大-線のみ-単色4
  // trDrawSquareBig25, // ひし形大-線のみ-単色5
  trDrawSquareBig26, // ひし形大-線のみ-2色交互
  trDrawSquareBig27, // ひし形大-線のみ-2色縦
  trDrawSquareBig28, // ひし形大-線のみ-2色横
  trDrawEllipse11, // ◯オンリー-単色1
  // trDrawEllipse12, // ◯オンリー-単色2
  // trDrawEllipse13, // ◯オンリー-単色3
  // trDrawEllipse14, // ◯オンリー-単色4
  // trDrawEllipse15, // ◯オンリー-単色5
  trDrawEllipse16, // ◯オンリー-2色交互
  trDrawEllipse17, // ◯オンリー-2色縦
  trDrawEllipse18, // ◯オンリー-2色横
  trDrawEllipse21, // ◯-線のみ-単色1
  // trDrawEllipse22, // ◯-線のみ-単色2
  // trDrawEllipse23, // ◯-線のみ-単色3
  // trDrawEllipse24, // ◯-線のみ-単色4
  // trDrawEllipse25, // ◯-線のみ-単色5
  trDrawEllipse26, // ◯-線のみ-2色交互
  trDrawEllipse27, // ◯-線のみ-2色縦
  trDrawEllipse28, // ◯-線のみ-2色横
  trDrawEllipseBig21, // ◯大-線のみ-単色1
  // trDrawEllipseBig22, // ◯大-線のみ-単色2
  // trDrawEllipseBig23, // ◯大-線のみ-単色3
  // trDrawEllipseBig24, // ◯大-線のみ-単色4
  // trDrawEllipseBig25, // ◯大-線のみ-単色5
  trDrawEllipseBig26, // ◯大-線のみ-2色交互
  trDrawEllipseBig27, // ◯大-線のみ-2色縦
  trDrawEllipseBig28, // ◯大-線のみ-2色横
  trDrawVerticalRotate11, // 縦-回転-単色1
  // trDrawVerticalRotate12, // 縦-回転-単色2
  // trDrawVerticalRotate13, // 縦-回転-単色3
  // trDrawVerticalRotate14, // 縦-回転-単色4
  // trDrawVerticalRotate15, // 縦-回転-単色5
  trDrawVerticalRotate16, // 縦-回転-2色縦
  trDrawVerticalRotate17, // 縦-回転-2色横
  trDrawHorizontalRotate11, // 横-回転-単色1
  // trDrawHorizontalRotate12, // 横-回転-単色2
  // trDrawHorizontalRotate13, // 横-回転-単色3
  // trDrawHorizontalRotate14, // 横-回転-単色4
  // trDrawHorizontalRotate15, // 横-回転-単色5
  trDrawHorizontalRotate16, // 横-回転-2色縦
  trDrawHorizontalRotate17, // 横-回転-2色横
  trDrawDiagonalRightRotate11, // 右斜め回転-単色1
  // trDrawDiagonalRightRotate12, // 右斜め回転-単色2
  // trDrawDiagonalRightRotate13, // 右斜め回転-単色3
  // trDrawDiagonalRightRotate14, // 右斜め回転-単色4
  // trDrawDiagonalRightRotate15, // 右斜め回転-単色5
  trDrawDiagonalRightRotate16, // 右斜め回転-2色交互
  trDrawDiagonalRightRotate17, // 右斜め回転-2色交互2
  trDrawDiagonalLeftRotate11, // 左斜め回転-単色1
  // trDrawDiagonalLeftRotate12, // 左斜め回転-単色2
  // trDrawDiagonalLeftRotate13, // 左斜め回転-単色3
  // trDrawDiagonalLeftRotate14, // 左斜め回転-単色4
  // trDrawDiagonalLeftRotate15, // 左斜め回転-単色5
  trDrawDiagonalLeftRotate16, // 左斜め回転-2色交互
  trDrawDiagonalLeftRotate17, // 左斜め回転-2色交互2
  trDrawEllipseStrokeRotate11, // 丸-回転-2色1
  trDrawEllipseStrokeRotate12, // 丸-回転-2色2
  trDrawEllipseStrokeRotate13, // 丸-回転-2色3
  // trDrawEllipseStrokeRotate14, // 丸-回転-2色4
  // trDrawEllipseStrokeRotate15, // 丸-回転-2色5
  trDrawCrossRotate11, // 十字-回転-2色1
  trDrawCrossRotate12, // 十字-回転-2色2
  trDrawCrossRotate13, // 十字-回転-2色3
  // trDrawCrossRotate14, // 十字-回転-2色4
  // trDrawCrossRotate15, // 十字-回転-2色5
  trDrawArc11, // 半円-縦
  trDrawArc12, // 半円-横
  trDrawArc13, // 半円-混合
  trDrawTriangle, // 三角形-混合
  trDrawTriangle, // 三角形-混合
]

// const trFuncArray = [
//   trDrawTriangle, // 三角形
// ]

/**
 * trDrawShape 関数は、指定された幅と高さに基づいて形状を描画します。
 * 幅と高さを100で割った値を使用して、trDataParams 配列の各パラメータに対して
 * 矩形を描画します。矩形は黒色で塗りつぶされ、指定された位置に描画されます。
 */
function trDrawShape() {
  // 画面全体をタイルで埋める
  // const tileSize = width / map(trDataParams[15], 0, 99, 5, 20) // タイルの基本サイズ
  const tileSize = width / 20 // タイルの基本サイズ
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
