function _trDrawTilePattern1(func) {
  return function (_x, _y, tileSize) {
    trDrawBlock(() => {
      const x = _x * tileSize
      const y = _y * tileSize

      const { color1, color2, color3, color4, color5 } = trChromaticGetColor()

      const p1 = trDataParams[_x % trDataParams.length]
      const p2 = trDataParams[_y % trDataParams.length]
      const p3 = p1 + p2

      const v1 = ceil(_x + _y)
      const v2 = ceil(_x - _y) < 0 ? ceil(_x - _y) * -1 : ceil(_x - _y)

      const noiseList = []
      for (let i = 0.1; i <= 1; i += 0.1) {
        noiseList.push(i)
      }

      // frameCount で 0.1 から 1 から 0.1 までの範囲の値を取得
      // 0.1 から 1 まで
      // 1 から 0.1 まで
      // 線形補間
      const sineValue = sin(frameCount * 50 * 0.004)

      const gap = 1 - map(trDataParams[7], 0, 99, 0.1, 0.5)
      const _tileSize = tileSize * sineValue
      const tileSize2 = tileSize * gap
      const _tileSize2 = tileSize * gap * sineValue

      const squareSize = tileSize / sqrt(2)
      const _squareSize = squareSize * sineValue
      const squareSize2 = squareSize * gap
      const _squareSize2 = squareSize2 * sineValue

      trCalcSineCount(sineValue)

      trDrawBlock(() => {
        func({
          _x,
          _y,
          x,
          y,
          tileSize,
          _tileSize,
          tileSize2,
          _tileSize2,
          squareSize,
          _squareSize,
          squareSize2,
          _squareSize2,
          color1,
          color2,
          color3,
          color4,
          color5,
          sineValue,
          p1,
          p2,
          p3,
          v1,
          v2,
        })
      })
    })
  }
}

function _trDrawRectEllipseSquare(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize2, _tileSize2, squareSize2, _squareSize2, p1, p2 } = params

      noStroke()
      rectMode(CENTER)
      translate(x, y)

      func(params)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        switch ((p1 + p2) % 3) {
          case 0:
            rect(0, 0, _tileSize2)
            break
          case 1:
            rotate(PI / 4)
            rect(0, 0, _squareSize2)
            break
          default:
            ellipse(0, 0, _tileSize2)
            break
        }
      } else {
        switch ((p1 + p2) % 3) {
          case 0:
            rect(0, 0, tileSize2)
            break
          case 1:
            rotate(PI / 4)
            rect(0, 0, squareSize2)
            break
          default:
            ellipse(0, 0, tileSize2)
            break
        }
      }
    })
  })
}

const trDrawRectEllipseSquare11 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRectEllipseSquare12 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color2)
})

const trDrawRectEllipseSquare13 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color3)
})

const trDrawRectEllipseSquare14 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color4)
})

const trDrawRectEllipseSquare15 = _trDrawRectEllipseSquare((params) => {
  noStroke()
  fill(params.color5)
})

const trDrawRectEllipseSquare16 = _trDrawRectEllipseSquare((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawRectEllipseSquare17 = _trDrawRectEllipseSquare((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawRectEllipseSquare18 = _trDrawRectEllipseSquare((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawRectEllipseSquare21 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRectEllipseSquare22 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color2)
})

const trDrawRectEllipseSquare23 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color3)
})

const trDrawRectEllipseSquare24 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color4)
})

const trDrawRectEllipseSquare25 = _trDrawRectEllipseSquare((params) => {
  noFill()
  stroke(params.color5)
})

const trDrawRectEllipseSquare26 = _trDrawRectEllipseSquare((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawRectEllipseSquare27 = _trDrawRectEllipseSquare((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawRectEllipseSquare28 = _trDrawRectEllipseSquare((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

function _trDrawRect(func, func2) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize2, _tileSize2 } = params

      rectMode(CENTER)
      func(params)

      translate(x, y)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        rect(0, 0, _tileSize2)
      } else {
        rect(0, 0, tileSize2)
      }

      if (func2) {
        func2(params)
      }
    })
  })
}

const trDrawRect11 = _trDrawRect((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawRect12 = _trDrawRect((params) => {
  noStroke()
  fill(params.color2)
})

const trDrawRect13 = _trDrawRect((params) => {
  noStroke()
  fill(params.color3)
})

const trDrawRect14 = _trDrawRect((params) => {
  noStroke()
  fill(params.color4)
})

const trDrawRect15 = _trDrawRect((params) => {
  noStroke()
  fill(params.color5)
})

const trDrawRect16 = _trDrawRect((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawRect17 = _trDrawRect((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawRect18 = _trDrawRect((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawRect19 = _trDrawRect(
  (params) => {
    noStroke()
    fill(params.color1)
  },
  (params) => {
    if (trSineCount >= TR_SINE_ROOP_COUNT) {
      // 文字を描画
      const { _x, _y, tileSize } = params

      //上下左右真ん中寄せ
      textAlign(CENTER, CENTER)
      textSize(tileSize / 2)
      fill(params.color2)
      const aList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      const index = ceil(trDataParams[_x % trDataParams.length] + trDataParams[_y % trDataParams.length]) % aList.length
      const a = aList[index]

      text(a, 0, 0)
    }
  },
)

const trDrawRect21 = _trDrawRect((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawRect22 = _trDrawRect((params) => {
  noFill()
  stroke(params.color2)
})

const trDrawRect23 = _trDrawRect((params) => {
  noFill()
  stroke(params.color3)
})

const trDrawRect24 = _trDrawRect((params) => {
  noFill()
  stroke(params.color4)
})

const trDrawRect25 = _trDrawRect((params) => {
  noFill()
  stroke(params.color5)
})

const trDrawRect26 = _trDrawRect((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawRect27 = _trDrawRect((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawRect28 = _trDrawRect((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

const trDrawRect29 = _trDrawRect(
  (params) => {
    noFill()
    stroke(params.color1)
  },
  (params) => {
    if (trSineCount >= TR_SINE_ROOP_COUNT) {
      // 文字を描画
      const { _x, _y, tileSize } = params

      //上下左右真ん中寄せ
      textAlign(CENTER, CENTER)
      textSize(tileSize / 2)
      fill(params.color2)
      const aList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      const index = ceil(trDataParams[_x % trDataParams.length] + trDataParams[_y % trDataParams.length]) % aList.length
      const a = aList[index]

      text(a, 0, 0)
    }
  },
)

function _trDrawRectBig(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize, sineValue } = params
      rectMode(CENTER)
      noFill()
      func(params)
      translate(x, y)
      if (trSineCount < TR_SINE_ROOP_COUNT) {
        rect(0, 0, tileSize * 1.2 * sineValue)
      } else {
        rect(0, 0, tileSize * 1.2)
      }
    })
  })
}

const trDrawRectBig21 = _trDrawRectBig((params) => {
  stroke(params.color1)
})

const trDrawRectBig22 = _trDrawRectBig((params) => {
  stroke(params.color2)
})

const trDrawRectBig23 = _trDrawRectBig((params) => {
  stroke(params.color3)
})

const trDrawRectBig24 = _trDrawRectBig((params) => {
  stroke(params.color4)
})

const trDrawRectBig25 = _trDrawRectBig((params) => {
  stroke(params.color5)
})

const trDrawRectBig26 = _trDrawRectBig((params) => {
  const { color1, color2, v1 } = params
  stroke([color1, color2][v1 % 2])
})

const trDrawRectBig27 = _trDrawRectBig((params) => {
  const { color3, color4, _x } = params
  stroke([color3, color4][_x % 2])
})

const trDrawRectBig28 = _trDrawRectBig((params) => {
  const { color1, color5, _y } = params
  stroke([color5, color1][_y % 2])
})

function _trDrawSquare(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, squareSize, _squareSize } = params

      rectMode(CENTER)
      func(params)

      translate(x, y)

      rotate(PI / 4)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        rect(0, 0, _squareSize)
      } else {
        rect(0, 0, squareSize)
      }
    })
  })
}

const trDrawSquare11 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawSquare12 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color2)
})

const trDrawSquare13 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color3)
})

const trDrawSquare14 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color4)
})

const trDrawSquare15 = _trDrawSquare((params) => {
  noStroke()
  fill(params.color5)
})

const trDrawSquare16 = _trDrawSquare((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawSquare17 = _trDrawSquare((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawSquare18 = _trDrawSquare((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawSquare21 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawSquare22 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color2)
})

const trDrawSquare23 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color3)
})

const trDrawSquare24 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color4)
})

const trDrawSquare25 = _trDrawSquare((params) => {
  noFill()
  stroke(params.color5)
})

const trDrawSquare26 = _trDrawSquare((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawSquare27 = _trDrawSquare((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawSquare28 = _trDrawSquare((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

function trDrawSquareBig(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, squareSize, _squareSize } = params

      rectMode(CENTER)
      noFill()
      func(params)

      translate(x, y)

      rotate(PI / 4)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        rect(0, 0, _squareSize * 1.5)
      } else {
        rect(0, 0, squareSize * 1.5)
      }
    })
  })
}

const trDrawSquareBig21 = trDrawSquareBig((params) => {
  stroke(params.color1)
})

const trDrawSquareBig22 = trDrawSquareBig((params) => {
  stroke(params.color2)
})

const trDrawSquareBig23 = trDrawSquareBig((params) => {
  stroke(params.color3)
})

const trDrawSquareBig24 = trDrawSquareBig((params) => {
  stroke(params.color4)
})

const trDrawSquareBig25 = trDrawSquareBig((params) => {
  stroke(params.color5)
})

const trDrawSquareBig26 = trDrawSquareBig((params) => {
  const { color1, color2, v1 } = params
  stroke([color1, color2][v1 % 2])
})

const trDrawSquareBig27 = trDrawSquareBig((params) => {
  const { color3, color4, _x } = params
  stroke([color3, color4][_x % 2])
})

const trDrawSquareBig28 = trDrawSquareBig((params) => {
  const { color1, color5, _y } = params
  stroke([color5, color1][_y % 2])
})

function _trDrawEllipse(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize2, _tileSize2 } = params

      rectMode(CENTER)
      func(params)

      translate(x, y)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        ellipse(0, 0, _tileSize2)
      } else {
        ellipse(0, 0, tileSize2)
      }
    })
  })
}

const trDrawEllipse11 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color1)
})

const trDrawEllipse12 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color2)
})

const trDrawEllipse13 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color3)
})

const trDrawEllipse14 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color4)
})

const trDrawEllipse15 = _trDrawEllipse((params) => {
  noStroke()
  fill(params.color5)
})

const trDrawEllipse16 = _trDrawEllipse((params) => {
  const { color1, color2, v1 } = params
  noStroke()
  fill([color1, color2][v1 % 2])
})

const trDrawEllipse17 = _trDrawEllipse((params) => {
  const { color3, color4, _x } = params
  noStroke()
  fill([color3, color4][_x % 2])
})

const trDrawEllipse18 = _trDrawEllipse((params) => {
  const { color1, color5, _y } = params
  noStroke()
  fill([color5, color1][_y % 2])
})

const trDrawEllipse21 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color1)
})

const trDrawEllipse22 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color2)
})

const trDrawEllipse23 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color3)
})

const trDrawEllipse24 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color4)
})

const trDrawEllipse25 = _trDrawEllipse((params) => {
  noFill()
  stroke(params.color5)
})

const trDrawEllipse26 = _trDrawEllipse((params) => {
  const { color1, color2, v1 } = params
  noFill()
  stroke([color1, color2][v1 % 2])
})

const trDrawEllipse27 = _trDrawEllipse((params) => {
  const { color3, color4, _x } = params
  noFill()
  stroke([color3, color4][_x % 2])
})

const trDrawEllipse28 = _trDrawEllipse((params) => {
  const { color1, color5, _y } = params
  noFill()
  stroke([color5, color1][_y % 2])
})

function _trDrawEllipseBig(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize, _tileSize } = params

      rectMode(CENTER)
      noFill()
      func(params)

      translate(x, y)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        ellipse(0, 0, _tileSize * 1.2)
      } else {
        ellipse(0, 0, tileSize * 1.2)
      }
    })
  })
}

const trDrawEllipseBig21 = _trDrawEllipseBig((params) => {
  stroke(params.color1)
})

const trDrawEllipseBig22 = _trDrawEllipseBig((params) => {
  stroke(params.color2)
})

const trDrawEllipseBig23 = _trDrawEllipseBig((params) => {
  stroke(params.color3)
})

const trDrawEllipseBig24 = _trDrawEllipseBig((params) => {
  stroke(params.color4)
})

const trDrawEllipseBig25 = _trDrawEllipseBig((params) => {
  stroke(params.color5)
})

const trDrawEllipseBig26 = _trDrawEllipseBig((params) => {
  const { color1, color2, v1 } = params
  stroke([color1, color2][v1 % 2])
})

const trDrawEllipseBig27 = _trDrawEllipseBig((params) => {
  const { color3, color4, _x } = params
  stroke([color3, color4][_x % 2])
})

const trDrawEllipseBig28 = _trDrawEllipseBig((params) => {
  const { color1, color5, _y } = params
  stroke([color5, color1][_y % 2])
})

function _trDrawTilePattern2(func) {
  return function (_x, _y, tileSize) {
    trDrawBlock(() => {
      const x = _x * tileSize
      const y = _y * tileSize
      const centerPos = createVector(x + tileSize / 2, y + tileSize / 2)

      const { color1, color2, color3, color4, color5 } = trChromaticGetColor()

      const pointList = [
        { x: x + tileSize * 0.5, y: y },
        { x: x + tileSize, y: y + tileSize * 0.5 },
        { x: x + tileSize * 0.5, y: y + tileSize },
        { x: x, y: y + tileSize * 0.5 },
      ]

      const p1 =
        trDataParams[((_x + _y) * trDataParams[(_x + _y) % trDataParams.length]) % trDataParams.length] %
        pointList.length
      const p2 = (p1 + 1) % pointList.length
      const p3 = (p1 + 2) % pointList.length
      const p4 = (p1 + 3) % pointList.length

      const noiseList = []
      for (let i = 0.1; i <= 1; i += 0.1) {
        noiseList.push(i)
      }

      const sineValue = sin(frameCount * 50 * 0.004)

      trCalcSineCount(sineValue)

      const interpolationFactor = map(sineValue, -1, 1, 0.01, 1)

      const _tileSize = tileSize * interpolationFactor

      trDrawBlock(() => {
        func({
          _x,
          _y,
          x,
          y,
          tileSize,
          color1,
          color2,
          color3,
          color4,
          color5,
          _tileSize,
          pointList,
          p1,
          p2,
          p3,
          p4,
          centerPos,
          sineValue,
          interpolationFactor,
        })
      })
    })
  }
}

function _trDrawVerticalRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize, sineValue } = params

      noFill()
      strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
      strokeCap(SQUARE)

      const s1 = map(sineValue, -1, 1, 0, 1)
      func(params)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            line(x, y - 1, x, y + (tileSize / 2) * s1)
            line(x, y + 1, x, y - (tileSize / 2) * s1)
            break
          case 1:
            // 回転
            translate(x, y)
            rotate(PI * sineValue)
            line(0, 0 + 1, 0, 0 - tileSize / 2)
            line(0, 0 - 1, 0, 0 + tileSize / 2)
            break
          default:
            break
        }
      } else {
        line(x, y - 1, x, y + (tileSize / 2) * 1.01)
        line(x, y + 1, x, y - (tileSize / 2) * 1.01)

        if (trDataParams[3] % 2 === 0) {
          for (let i = 0; i < 4; i++) {
            strokeWeight(1)
            const currentX = x + (tileSize / 4) * i

            line(currentX, y - 1, currentX, y + (tileSize / 2) * 1.01)
            line(currentX, y + 1, currentX, y - (tileSize / 2) * 1.01)
          }
        }
      }
    })
  })
}

const trDrawVerticalRotate11 = _trDrawVerticalRotate((params) => {
  stroke(params.color1)
})

const trDrawVerticalRotate12 = _trDrawVerticalRotate((params) => {
  stroke(params.color2)
})

const trDrawVerticalRotate13 = _trDrawVerticalRotate((params) => {
  stroke(params.color3)
})

const trDrawVerticalRotate14 = _trDrawVerticalRotate((params) => {
  stroke(params.color4)
})

const trDrawVerticalRotate15 = _trDrawVerticalRotate((params) => {
  stroke(params.color5)
})

const trDrawVerticalRotate16 = _trDrawVerticalRotate((params) => {
  const { _y, color1, color2 } = params
  if (_y % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }
})

const trDrawVerticalRotate17 = _trDrawVerticalRotate((params) => {
  const { _x, color3, color4 } = params
  if (_x % 2 === 0) {
    stroke(color3)
  } else {
    stroke(color4)
  }
})

function trDrawHorizontalRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize, sineValue } = params

      noFill()
      strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))
      strokeCap(SQUARE)

      const s1 = map(sineValue, -1, 1, 0, 1)

      func(params)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            line(x - 1, y, x + (tileSize / 2) * s1, y)
            line(x + 1, y, x - (tileSize / 2) * s1, y)
            break
          case 1:
            // 回転
            translate(x, y)
            rotate(PI * sineValue)
            line(0 + 1, 0, 0 - tileSize / 2, 0)
            line(0 - 1, 0, 0 + tileSize / 2, 0)
            break
          default:
            break
        }
      } else {
        line(x - 1, y, x + (tileSize / 2) * 1.01, y)
        line(x + 1, y, x - (tileSize / 2) * 1.01, y)

        if (trDataParams[3] % 2 === 0) {
          for (let i = 0; i < 4; i++) {
            strokeWeight(1)
            const currentY = y + (tileSize / 4) * i

            line(x - 1, currentY, x + (tileSize / 2) * 1.01, currentY)
            line(x + 1, currentY, x - (tileSize / 2) * 1.01, currentY)
          }
        }
      }
    })
  })
}

const trDrawHorizontalRotate11 = trDrawHorizontalRotate((params) => {
  stroke(params.color1)
})

const trDrawHorizontalRotate12 = trDrawHorizontalRotate((params) => {
  stroke(params.color2)
})

const trDrawHorizontalRotate13 = trDrawHorizontalRotate((params) => {
  stroke(params.color3)
})

const trDrawHorizontalRotate14 = trDrawHorizontalRotate((params) => {
  stroke(params.color4)
})

const trDrawHorizontalRotate15 = trDrawHorizontalRotate((params) => {
  stroke(params.color5)
})

const trDrawHorizontalRotate16 = trDrawHorizontalRotate((params) => {
  const { _y, color1, color2 } = params
  if (_y % 2 === 0) {
    stroke(color1)
  } else {
    stroke(color2)
  }
})

const trDrawHorizontalRotate17 = trDrawHorizontalRotate((params) => {
  const { _x, color3, color4 } = params
  if (_x % 2 === 0) {
    stroke(color3)
  } else {
    stroke(color4)
  }
})

function trDrawDiagonalRightRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { _x, x, _y, y, tileSize, color1, color2, sineValue } = params

      const _strokeWeight = max((tileSize * trDataParams[5]) / 400, 1)

      noFill()
      strokeWeight(_strokeWeight)
      strokeCap(SQUARE)

      const currentX = x + tileSize * 1.01 * sineValue
      const currentY = y + tileSize * 1.01 * -sineValue

      func(params)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            line(x, y, currentX, currentY)
            break
          default:
            // 回転
            translate(x, y)
            rotate(PI * 0.75 + PI * -sineValue)
            line(0 - tileSize * 0.5, 0, 0 + tileSize * 0.5, 0)
            break
        }
      } else {
        switch (trDataParams[3] % 3) {
          case 0:
            for (let i = 0; i < 4; i++) {
              strokeWeight(1)
              const _currentX = _x * tileSize + (tileSize / 4) * i - (tileSize / 4) * i
              const _currentY = _y * tileSize + (tileSize / 4) * i

              line(_currentX, _currentY, _currentX + tileSize * 1.01, _currentY - tileSize * 1.01)
            }
            break
          case 1:
            for (let i = 0; i < 4; i++) {
              strokeWeight(1)
              const _currentX = _x * tileSize - (tileSize / 4) * i + (tileSize / 4) * i
              const _currentY = _y * tileSize - (tileSize / 4) * i

              line(_currentX, _currentY, _currentX - tileSize * 1.01, _currentY - tileSize * 1.01)
            }
            break
          default:
            break
        }

        strokeWeight(_strokeWeight)
        line(x, y, x + tileSize * 1.01, y - tileSize * 1.01)
      }
    })
  })
}

const trDrawDiagonalRightRotate11 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color1)
})

const trDrawDiagonalRightRotate12 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color2)
})

const trDrawDiagonalRightRotate13 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color3)
})

const trDrawDiagonalRightRotate14 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color4)
})

const trDrawDiagonalRightRotate15 = trDrawDiagonalRightRotate((params) => {
  stroke(params.color5)
})

const trDrawDiagonalRightRotate16 = trDrawDiagonalRightRotate((params) => {
  const { _x, color1, color2 } = params
  stroke(_x % 2 ? color1 : color2)
})

const trDrawDiagonalRightRotate17 = trDrawDiagonalRightRotate((params) => {
  const { _x, _y, color3, color4 } = params
  stroke((_x + _y) % 2 ? color3 : color4)
})

function _trDrawDiagonalLeftRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { _x, x, _y, y, tileSize, color1, color2, sineValue } = params

      const _strokeWeight = max((tileSize * trDataParams[5]) / 400, 1)

      noFill()
      strokeWeight(_strokeWeight)
      strokeCap(SQUARE)

      const currentX = x - tileSize * 1.01 * -sineValue
      const currentY = y + tileSize * 1.01 * sineValue

      func(params)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            line(x, y, currentX, currentY)
            break
          default:
            // 回転
            translate(x, y)
            rotate(PI * 0.25 - PI * sineValue)
            line(0 - tileSize * 0.5, 0, 0 + tileSize * 0.5, 0)
            break
        }
      } else {
        switch (trDataParams[3] % 3) {
          case 0:
            for (let i = 0; i < 4; i++) {
              strokeWeight(1)
              const _currentX = _x * tileSize - (tileSize / 4) * i + (tileSize / 4) * i
              const _currentY = _y * tileSize + (tileSize / 4) * i

              line(_currentX, _currentY, _currentX - tileSize * 1.01, _currentY - tileSize * 1.01)
            }
            break
          case 1:
            for (let i = 0; i < 4; i++) {
              strokeWeight(1)
              const _currentX = _x * tileSize + (tileSize / 4) * i - (tileSize / 4) * i
              const _currentY = _y * tileSize + (tileSize / 4) * i

              line(_currentX, _currentY, _currentX + tileSize * 1.01, _currentY - tileSize * 1.01)
            }
            break
          default:
            break
        }
        strokeWeight(_strokeWeight)
        line(x, y, x - tileSize * 1.01, y - tileSize * 1.01)
      }
    })
  })
}

const trDrawDiagonalLeftRotate11 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color1)
})

const trDrawDiagonalLeftRotate12 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color2)
})

const trDrawDiagonalLeftRotate13 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color3)
})

const trDrawDiagonalLeftRotate14 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color4)
})

const trDrawDiagonalLeftRotate15 = _trDrawDiagonalLeftRotate((params) => {
  stroke(params.color5)
})

const trDrawDiagonalLeftRotate16 = _trDrawDiagonalLeftRotate((params) => {
  const { _x, color1, color2 } = params
  stroke(_x % 2 ? color1 : color2)
})

const trDrawDiagonalLeftRotate17 = _trDrawDiagonalLeftRotate((params) => {
  const { _x, _y, color3, color4 } = params
  stroke((_x + _y) % 2 ? color3 : color4)
})

function trDrawEllipseStrokeRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, _tileSize, tileSize, sineValue } = params

      translate(x, y)

      noFill()
      rectMode(CENTER)

      const { color1, color2 } = func(params)

      strokeWeight(max((tileSize * trDataParams[5]) / 400, 1))

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            stroke(color1)
            arc(0 + _tileSize / 2, 0 + _tileSize / 2, _tileSize, _tileSize, PI, PI + HALF_PI)

            stroke(color2)
            arc(0 - _tileSize / 2, 0 - _tileSize / 2, _tileSize, _tileSize, 0, HALF_PI)
            break
          default:
            rotate(PI * sineValue)

            stroke(color1)
            arc(0 + tileSize / 2, 0 + tileSize / 2, tileSize, tileSize, PI, PI + HALF_PI)

            stroke(color2)
            arc(0 - tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, 0, HALF_PI)
            break
        }
      } else {
        stroke(color1)
        arc(0 - tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, 0, HALF_PI)

        stroke(color2)
        arc(0 + tileSize / 2, 0 + tileSize / 2, tileSize, tileSize, PI, PI + HALF_PI)
      }
    })
  })
}

const trDrawEllipseStrokeRotate11 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color1, color2: params.color2 }
})

const trDrawEllipseStrokeRotate12 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color2, color2: params.color3 }
})

const trDrawEllipseStrokeRotate13 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color3, color2: params.color4 }
})

const trDrawEllipseStrokeRotate14 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color4, color2: params.color5 }
})

const trDrawEllipseStrokeRotate15 = trDrawEllipseStrokeRotate((params) => {
  return { color1: params.color5, color2: params.color1 }
})

function _trDrawCrossRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, _tileSize, tileSize, sineValue } = params

      translate(x, y)

      const acceleration = tileSize * 0.4
      const { color1, color2 } = func(params)

      noFill()

      stroke(color1)
      strokeWeight(max((tileSize * trDataParams[5]) / 300, 1))
      strokeCap(SQUARE)

      if (trSineCount < TR_SINE_ROOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            stroke(color1)
            beginShape()
            vertex(0, 0 + _tileSize / 2)
            vertex(0, 0)
            endShape()

            stroke(color1)
            beginShape()
            vertex(0, 0 - _tileSize / 2)
            vertex(0, 0)
            endShape()

            stroke(color2)
            beginShape()
            vertex(0, 0)
            vertex(0 + _tileSize / 2, 0)
            endShape()

            stroke(color2)
            beginShape()
            vertex(0, 0)
            vertex(0 - _tileSize / 2, 0)
            endShape()
            break
          case 1:
            // 回転
            rotate(PI * sineValue)

            stroke(color1)
            beginShape()
            vertex(0, 0)
            vertex(0, 0 + acceleration)
            endShape()

            stroke(color1)
            beginShape()
            vertex(0, 0)
            vertex(0, 0 - acceleration)
            endShape()

            stroke(color2)
            beginShape()
            vertex(0 + acceleration, 0)
            vertex(0, 0)
            endShape()

            stroke(color2)
            beginShape()
            vertex(0 - acceleration, 0)
            vertex(0, 0)
            endShape()
            break
          default:
            break
        }
      } else {
        stroke(color1)
        beginShape()
        vertex(0, 0 + tileSize / 2)
        vertex(0, 0)
        endShape()

        stroke(color1)
        beginShape()
        vertex(0, 0 - tileSize / 2)
        vertex(0, 0)
        endShape()

        stroke(color2)
        beginShape()
        vertex(0, 0)
        vertex(0 + tileSize / 2, 0)
        endShape()

        stroke(color2)
        beginShape()
        vertex(0, 0)
        vertex(0 - tileSize / 2, 0)
        endShape()
      }
    })
  })
}

const trDrawCrossRotate11 = _trDrawCrossRotate((params) => {
  return { color1: params.color1, color2: params.color2 }
})

const trDrawCrossRotate12 = _trDrawCrossRotate((params) => {
  return { color1: params.color2, color2: params.color3 }
})

const trDrawCrossRotate13 = _trDrawCrossRotate((params) => {
  return { color1: params.color3, color2: params.color4 }
})

const trDrawCrossRotate14 = _trDrawCrossRotate((params) => {
  return { color1: params.color4, color2: params.color5 }
})

const trDrawCrossRotate15 = _trDrawCrossRotate((params) => {
  return { color1: params.color5, color2: params.color1 }
})

function _trDrawArc(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, centerPos, tileSize, _tileSize, color1, color2, color3, color4, color5 } = params

      rectMode(CENTER)

      const v = func(params)

      trDrawBlock(() => {
        noStroke()
        if (v % 2 === 0) {
          fill(color1)
          rect(centerPos.x, centerPos.y, tileSize * 1.01, tileSize * 1.01)
        } else {
          fill(color2)
          rect(centerPos.x, centerPos.y, tileSize * 1.01, tileSize * 1.01)
        }

        translate(x, y)

        let t
        if (trSineCount < TR_SINE_ROOP_COUNT) {
          t = _tileSize
        } else {
          t = tileSize
        }

        if (v % 2 === 0) {
          rotate(PI)
          fill(color4)
          arc(0, 0 + t / 2, t, t, HALF_PI, PI + HALF_PI)

          rotate(0)
          fill(color5)
          arc(0, 0 - t / 2, t, t, -HALF_PI, HALF_PI)
        } else {
          rotate(PI)
          fill(color3)
          arc(0, 0 - t / 2, t, t, -HALF_PI, HALF_PI)

          rotate(0)
          fill(color2)
          arc(0, 0 + t / 2, t, t, HALF_PI, PI + HALF_PI)
        }
      })
    })
  })
}

const trDrawArc11 = _trDrawArc((params) => {
  return params._x
})

const trDrawArc12 = _trDrawArc((params) => {
  return params._y
})

const trDrawArc13 = _trDrawArc((params) => {
  return params._x * params._y
})

const drawTriangle = (startIndex, _rectPointList, _color) => {
  trDrawBlock(() => {
    noStroke()
    fill(_color)
    beginShape()
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % _rectPointList.length
      vertex(_rectPointList[index].x, _rectPointList[index].y)
    }
    endShape(CLOSE)
  })
}

function _trDrawTriangle(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { _x, x, _y, y, tileSize, _tileSize, color1, color2 } = params

      let t
      if (trSineCount < TR_SINE_ROOP_COUNT) {
        t = _tileSize
      } else {
        t = tileSize
      }

      const rectPointList = [
        { x, y },
        { x: x + t, y },
        { x: x + t, y: y + t },
        { x, y: y + t },
      ]

      trDrawBlock(() => {
        noStroke()
        if ((_x + _y) % 2 === 0) {
          fill(color1)
          rect(x, y, t * 1.01)
        } else {
          fill(color2)
          rect(x, y, tileSize * 1.01)
        }
      })

      let a
      if (_x % 2 === 0) {
        a = ceil(_x + _y)
      } else {
        a = ceil(_x - _y < 0 ? 0 : _x - _y)
      }

      const colorList = func(params)
      drawTriangle(
        trGetDistributedValue(a, trDataParams),
        rectPointList,
        colorList[trGetDistributedValue(_x, trDataParams) % colorList.length],
      )
    })
  })
}

const trDrawTriangle11 = _trDrawTriangle((params) => {
  return [params.color1, params.color3, params.color4, params.color5]
})
