function _trDrawTilePattern1(func) {
  return function (_x, _y, tileSize) {
    trDrawBlock(() => {
      const x = _x * tileSize
      const y = _y * tileSize

      const { color1, color2, color3, color4, color5 } = trChromaticGetColor()
      const colorDict = trChromaticGetColor()
      const colorList = []
      for (const item of Object.values(colorDict)) {
        colorList.push(item)
      }

      const p1 = trDataParams[_x % trDataParams.length]
      const p2 = trDataParams[_y % trDataParams.length]
      const p3 = p1 + p2

      const v1 = ceil(_x + _y)
      const v2 = ceil(_x - _y) < 0 ? ceil(_x - _y) * -1 : ceil(_x - _y)

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

      const noiseVal = trGenerateNoiseValue(_x, _y)

      const strokeSize400 = (tileSize * trDataParams[noiseVal % trDataParams.length]) / 400
      const strokeSize600 = (tileSize * trDataParams[noiseVal % trDataParams.length]) / 600
      const strokeSize800 = (tileSize * trDataParams[noiseVal % trDataParams.length]) / 800
      const strokeSize1200 = (tileSize * trDataParams[noiseVal % trDataParams.length]) / 1200
      const strokeSize1600 = (tileSize * trDataParams[noiseVal % trDataParams.length]) / 1600

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
          colorDict,
          colorList,
          sineValue,
          noiseVal,
          strokeSize400,
          strokeSize600,
          strokeSize800,
          strokeSize1200,
          strokeSize1600,
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
      const { x, y, tileSize, _tileSize, squareSize, _squareSize, p1, p2, sineValue } = params

      const t = tileSize * 0.95
      const _t = _tileSize * 0.95 * sineValue
      const s = squareSize * 0.95
      const _s = _squareSize * 0.95 * sineValue

      noStroke()
      rectMode(CENTER)
      translate(x, y)

      func(params)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        switch ((p1 + p2) % 3) {
          case 0:
            rect(0, 0, _t)
            break
          case 1:
            rotate(PI / 4)
            rect(0, 0, _s)
            break
          default:
            ellipse(0, 0, _t)
            break
        }
      } else {
        switch ((p1 + p2) % 3) {
          case 0:
            rect(0, 0, t)
            break
          case 1:
            rotate(PI / 4)
            rect(0, 0, s)
            break
          default:
            ellipse(0, 0, t)
            break
        }
      }
    })
  })
}

const trDrawRectEllipseSquare16 = _trDrawRectEllipseSquare((params) => {
  const { colorList, noiseVal } = params
  noStroke()
  fill(colorList[noiseVal % colorList.length])
})

const trDrawRectEllipseSquare26 = _trDrawRectEllipseSquare((params) => {
  const { colorList, noiseVal, strokeSize400 } = params
  noFill()
  stroke(colorList[noiseVal % colorList.length])
  strokeWeight(min(strokeSize400, trStrokeWeight))
})

function _trDrawRect(func, func2) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize2, _tileSize2 } = params

      rectMode(CENTER)
      func(params)

      translate(x, y)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
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
  const { colorList, noiseVal } = params
  noStroke()
  fill(colorList[noiseVal % colorList.length])
})

const trDrawRect16 = _trDrawRect((params) => {
  const { colorList, noiseVal } = params
  noStroke()
  fill(colorList[noiseVal % colorList.length])
})

const trDrawRect19 = _trDrawRect(
  (params) => {
    const { colorList, noiseVal } = params
    noStroke()
    fill(colorList[noiseVal % colorList.length])
  },
  (params) => {
    if (trSineCount >= TR_SINE_LOOP_COUNT) {
      // 文字を描画
      const { colorList, noiseVal, tileSize } = params

      //上下左右真ん中寄せ
      textAlign(CENTER, CENTER)
      textSize(tileSize / 2)
      fill(colorList[trDataParams[noiseVal % trDataParams.length] % colorList.length])
      const aList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      const index =
        ceil(trDataParams[noiseVal % trDataParams.length] + trDataParams[noiseVal % trDataParams.length]) % aList.length
      const a = aList[index]

      text(a, 0, 0)
    }
  },
)

const trDrawRect21 = _trDrawRect((params) => {
  const { strokeSize1600, colorList, noiseVal } = params

  noFill()
  stroke(colorList[noiseVal % colorList.length])
  strokeWeight(min(strokeSize1600, trStrokeWeight))
})

const trDrawRect26 = _trDrawRect((params) => {
  const { strokeSize400, colorList, noiseVal } = params
  noFill()
  stroke(colorList[noiseVal % colorList.length])
  strokeWeight(min(strokeSize400, trStrokeWeight))
})

const trDrawRect29 = _trDrawRect(
  (params) => {
    const { colorList, noiseVal, strokeSize400 } = params
    noFill()
    stroke(colorList[noiseVal % colorList.length])
    strokeWeight(min(strokeSize400, trStrokeWeight))
  },
  (params) => {
    if (trSineCount >= TR_SINE_LOOP_COUNT) {
      // 文字を描画
      const { colorList, noiseVal, tileSize } = params

      //上下左右真ん中寄せ
      textAlign(CENTER, CENTER)
      textSize(tileSize / 2)
      fill(colorList[trDataParams[noiseVal % trDataParams.length] % colorList.length])
      const aList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      const index =
        ceil(trDataParams[noiseVal % trDataParams.length] + trDataParams[noiseVal % trDataParams.length]) % aList.length
      const a = aList[index]

      noStroke()
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
      if (trSineCount < TR_SINE_LOOP_COUNT) {
        rect(0, 0, tileSize * 1.2 * sineValue)
      } else {
        rect(0, 0, tileSize * 1.2)
      }
    })
  })
}

const trDrawRectBig26 = _trDrawRectBig((params) => {
  const { colorList, noiseVal, strokeSize400 } = params
  stroke(colorList[noiseVal % colorList.length])
  strokeWeight(min(strokeSize400, trStrokeWeight))
})

function _trDrawSquare(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, squareSize, _squareSize } = params

      rectMode(CENTER)
      func(params)

      translate(x, y)

      rotate(PI / 4)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        rect(0, 0, _squareSize)
      } else {
        rect(0, 0, squareSize)
      }
    })
  })
}

const trDrawSquare11 = _trDrawSquare((params) => {
  const { colorList, noiseVal } = params
  noStroke()
  fill(colorList[noiseVal % colorList.length])
})

const trDrawSquare16 = _trDrawSquare((params) => {
  const { colorList, noiseVal } = params
  noStroke()
  fill(colorList[noiseVal % colorList.length])
})

const trDrawSquare21 = _trDrawSquare((params) => {
  const { colorList, noiseVal, strokeSize1600 } = params
  noFill()
  stroke(colorList[noiseVal % colorList.length])
  strokeWeight(min(strokeSize1600, trStrokeWeight))
})

const trDrawSquare26 = _trDrawSquare((params) => {
  const { colorList, noiseVal, strokeSize1600 } = params
  noFill()
  stroke(colorList[trDataParams[noiseVal % trDataParams.length] % colorList.length])
  strokeWeight(min(strokeSize1600, trStrokeWeight))
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

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        rect(0, 0, _squareSize * 1.5)
      } else {
        rect(0, 0, squareSize * 1.5)
      }
    })
  })
}

const trDrawSquareBig26 = trDrawSquareBig((params) => {
  const { colorList, noiseVal, strokeSize400 } = params
  stroke(colorList[noiseVal % colorList.length])
  strokeWeight(min(strokeSize400, trStrokeWeight))
})

function _trDrawEllipse(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize2, _tileSize2 } = params

      rectMode(CENTER)
      func(params)

      translate(x, y)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        ellipse(0, 0, _tileSize2)
      } else {
        ellipse(0, 0, tileSize2)
      }
    })
  })
}

const trDrawEllipse16 = _trDrawEllipse((params) => {
  const { colorList, noiseVal } = params
  noStroke()
  fill(colorList[noiseVal % colorList.length])
})

const trDrawEllipse26 = _trDrawEllipse((params) => {
  const { colorList, noiseVal, strokeSize400 } = params
  noFill()
  stroke(colorList[noiseVal % colorList.length])
  strokeWeight(min(strokeSize400, trStrokeWeight))
})

function _trDrawEllipseSmall(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize, _tileSize } = params

      rectMode(CENTER)
      func(params)

      translate(x, y)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        ellipse(0, 0, _tileSize * 0.5)
      } else {
        ellipse(0, 0, tileSize * 0.5)
      }
    })
  })
}

const trDrawEllipseSmall11 = _trDrawEllipseSmall((params) => {
  const { colorList, noiseVal } = params
  noStroke()
  fill(colorList[(trDataParams[noiseVal % trDataParams.length] + noiseVal) % colorList.length])
})

function _trDrawEllipseBig(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      const { x, y, tileSize, _tileSize } = params

      rectMode(CENTER)
      noFill()
      func(params)

      translate(x, y)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        ellipse(0, 0, _tileSize * 1.2)
      } else {
        ellipse(0, 0, tileSize * 1.2)
      }
    })
  })
}

const trDrawEllipseBig26 = _trDrawEllipseBig((params) => {
  const { tileSize, color1, color2, v1 } = params
  stroke([color1, color2][v1 % 2])
  strokeWeight(min((tileSize * trDataParams[5]) / 1600, trStrokeWeight))
})

function _trDrawTilePattern2(func) {
  return function (_x, _y, tileSize) {
    trDrawBlock(() => {
      const x = _x * tileSize
      const y = _y * tileSize
      const centerPos = createVector(x + tileSize / 2, y + tileSize / 2)

      const { color1, color2, color3, color4, color5 } = trChromaticGetColor()
      const colorDict = trChromaticGetColor()
      const colorList = []
      for (const item of Object.values(colorDict)) {
        colorList.push(item)
      }
      const noiseVal = trGenerateNoiseValue(_x, _y)

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
          colorDict,
          colorList,
          _tileSize,
          pointList,
          noiseVal,
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

function trDrawDiagonalRightRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { _x, x, _y, y, tileSize, sineValue } = params

      const _strokeWeight = min((tileSize * trDataParams[5]) / 400, trStrokeWeight)

      noFill()
      strokeWeight(_strokeWeight)
      strokeCap(SQUARE)

      const currentX = x + tileSize * 1.01 * sineValue
      const currentY = y + tileSize * 1.01 * -sineValue

      func(params)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            line(x, y, currentX, currentY)
            break
          default:
            // 回転
            translate(x, y)
            rotate(PI * 0.75 + PI * -sineValue)
            line(0 - tileSize * 0.5, 0, tileSize * 0.5, 0)
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

const trDrawDiagonalRightRotate16 = trDrawDiagonalRightRotate((params) => {
  const { _x, color1, color2 } = params
  stroke(_x % 2 ? color1 : color2)
})

function _trDrawDiagonalLeftRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { _x, x, _y, y, tileSize, sineValue } = params

      const _strokeWeight = max((tileSize * trDataParams[5]) / 400, 1)

      noFill()
      strokeWeight(_strokeWeight)
      strokeCap(SQUARE)

      const currentX = x - tileSize * 1.01 * -sineValue
      const currentY = y + tileSize * 1.01 * sineValue

      func(params)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            line(x, y, currentX, currentY)
            break
          default:
            // 回転
            translate(x, y)
            rotate(PI * 0.25 - PI * sineValue)
            line(0 - tileSize * 0.5, 0, tileSize * 0.5, 0)
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

const trDrawDiagonalLeftRotate16 = _trDrawDiagonalLeftRotate((params) => {
  const { _x, color1, color2 } = params
  stroke(_x % 2 ? color1 : color2)
})

function trDrawEllipseStrokeRightRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, _tileSize, tileSize, sineValue } = params

      translate(x, y)

      noFill()
      rectMode(CENTER)

      const { color1, color2 } = func(params)

      strokeWeight(min((tileSize * trDataParams[5]) / 400, trStrokeWeight))

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            stroke(color1)
            arc(_tileSize / 2, _tileSize / 2, _tileSize, _tileSize, PI, PI + HALF_PI)

            stroke(color2)
            arc(0 - _tileSize / 2, 0 - _tileSize / 2, _tileSize, _tileSize, 0, HALF_PI)
            break
          default:
            rotate(PI * sineValue)

            stroke(color1)
            arc(tileSize / 2, tileSize / 2, tileSize, tileSize, PI, PI + HALF_PI)

            stroke(color2)
            arc(0 - tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, 0, HALF_PI)
            break
        }
      } else {
        stroke(color1)
        arc(0 - tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, 0, HALF_PI)

        stroke(color2)
        arc(tileSize / 2, tileSize / 2, tileSize, tileSize, PI, PI + HALF_PI)
      }
    })
  })
}

const trDrawEllipseStrokeRightRotate11 = trDrawEllipseStrokeRightRotate((params) => {
  return { color1: params.color1, color2: params.color2 }
})

function trDrawEllipseStrokeLeftRotate(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, _tileSize, tileSize, sineValue } = params

      translate(x, y)

      noFill()
      rectMode(CENTER)

      const { color1, color2 } = func(params)

      strokeWeight(min((tileSize * trDataParams[5]) / 400, trStrokeWeight))

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            stroke(color1)
            arc(0 - _tileSize / 2, _tileSize / 2, _tileSize, _tileSize, PI + HALF_PI, TWO_PI)

            stroke(color2)
            arc(_tileSize / 2, 0 - _tileSize / 2, _tileSize, _tileSize, HALF_PI, PI)
            break
          default:
            rotate(-PI * sineValue) // 回転方向を反転

            stroke(color1)
            arc(0 - tileSize / 2, tileSize / 2, tileSize, tileSize, PI + HALF_PI, TWO_PI)

            stroke(color2)
            arc(tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, HALF_PI, PI)
            break
        }
      } else {
        stroke(color1)
        arc(tileSize / 2, 0 - tileSize / 2, tileSize, tileSize, HALF_PI, PI)

        stroke(color2)
        arc(0 - tileSize / 2, tileSize / 2, tileSize, tileSize, PI + HALF_PI, TWO_PI)
      }
    })
  })
}

const trDrawEllipseStrokeLeftRotate11 = trDrawEllipseStrokeLeftRotate((params) => {
  return { color1: params.color1, color2: params.color2 }
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
      strokeWeight(min((tileSize * trDataParams[5]) / 300, trStrokeWeight))
      strokeCap(SQUARE)

      if (trSineCount < TR_SINE_LOOP_COUNT) {
        switch (trSineCount % 2) {
          case 0:
            stroke(color1)
            beginShape()
            vertex(0, _tileSize / 2)
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
            vertex(_tileSize / 2, 0)
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
            vertex(0, acceleration)
            endShape()

            stroke(color1)
            beginShape()
            vertex(0, 0)
            vertex(0, 0 - acceleration)
            endShape()

            stroke(color2)
            beginShape()
            vertex(acceleration, 0)
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
        vertex(0, tileSize / 2)
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
        vertex(tileSize / 2, 0)
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

function _trDrawArc(func) {
  return _trDrawTilePattern2((params) => {
    trDrawBlock(() => {
      const { x, y, centerPos, tileSize, _tileSize, colorList, noiseVal, color1, color2, color3, color4, color5 } =
        params

      rectMode(CENTER)

      const v = func(params)

      trDrawBlock(() => {
        noStroke()
        if (noiseVal % 2 === 0) {
          fill(colorList[noiseVal % colorList.length])
          rect(centerPos.x, centerPos.y, tileSize * 1.01, tileSize * 1.01)
        }

        translate(x, y)

        let t
        if (trSineCount < TR_SINE_LOOP_COUNT) {
          t = _tileSize
        } else {
          t = tileSize
        }

        if (v % 2 === 0) {
          rotate(PI)
          fill(colorList[noiseVal % 4])
          arc(0, t / 2, t, t, HALF_PI, PI + HALF_PI)

          rotate(0)
          fill(colorList[noiseVal % 5])
          arc(0, 0 - t / 2, t, t, -HALF_PI, HALF_PI)
        } else {
          rotate(PI)
          fill(colorList[noiseVal % 3])
          arc(0, 0 - t / 2, t, t, -HALF_PI, HALF_PI)

          rotate(0)
          fill(colorList[noiseVal % 2])
          arc(0, t / 2, t, t, HALF_PI, PI + HALF_PI)
        }
      })
    })
  })
}

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
      if (trSineCount < TR_SINE_LOOP_COUNT) {
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

const trDrawSquareEllipse = (x, y, tileSize) => {
  trDrawBlock(() => {
    trDrawSquare11(x, y, tileSize)
    trDrawEllipseSmall11(x, y, tileSize)
  })
}

const trDrawSquareStrokeEllipse = (x, y, tileSize) => {
  trDrawSquare21(x, y, tileSize)
  trDrawEllipseSmall11(x, y, tileSize)
}

const trDrawRectEllipse = (x, y, tileSize) => {
  trDrawRect11(x, y, tileSize)
  trDrawEllipseSmall11(x, y, tileSize)
}

const trDrawRectStrokeEllipse = (x, y, tileSize) => {
  trDrawRect21(x, y, tileSize)
  trDrawEllipseSmall11(x, y, tileSize)
}

const trDrawEllipseStrokeRightEllipse = (x, y, tileSize) => {
  trDrawEllipseSmall11(x, y, tileSize)
  trDrawEllipseStrokeRightRotate11(x, y, tileSize)
}

const trDrawEllipseStrokeLeftEllipse = (x, y, tileSize) => {
  trDrawEllipseSmall11(x, y, tileSize)
  trDrawEllipseStrokeLeftRotate11(x, y, tileSize)
}

function _trDrawTilePattern(func) {
  return function (xi, yi, tileSize) {
    const { color1, color2, color3, color4, color5 } = trChromaticGetColor()

    const sineValue = sin(frameCount * 50 * 0.004)
    trCalcSineCount(sineValue)
    const _tileSize = tileSize * map(sineValue, -1, 1, 0.01, 1)

    let tileSizeAdjusted
    if (trSineCount < TR_SINE_LOOP_COUNT) {
      tileSizeAdjusted = _tileSize
    } else {
      tileSizeAdjusted = tileSize
    }

    const x = xi * tileSize
    const y = yi * tileSize

    const tileSize2 = tileSizeAdjusted / 2

    noStroke()
    fill(color5)
    rect(x, y, tileSizeAdjusted)

    const patternIndex = func(xi, yi)
    switch (patternIndex % 4) {
      case 0:
        trDrawBlock(() => {
          noStroke()

          if ((trDataParams[3] + xi) % 2 === 0) {
            fill(color2)
            arc(x, y, tileSizeAdjusted * 2, tileSizeAdjusted * 2, 0, PI * (1 / 2))
          } else {
            fill(color1)
            rect(x, y, tileSizeAdjusted)
          }
        })
        break
      case 1:
        trDrawBlock(() => {
          noStroke()
          fill(color4)
          rect(x, y, tileSizeAdjusted)

          if ((trDataParams[4] + xi) % 2 === 0) {
            fill(color3)
            arc(x + tileSizeAdjusted, y, tileSizeAdjusted * 2, tileSizeAdjusted * 2, HALF_PI, PI)
          } else {
            fill(color2)
            ellipseMode(CORNER)
            ellipse(x, y, tileSizeAdjusted, tileSizeAdjusted)
          }
        })
        break
      case 2:
        trDrawBlock(() => {
          noStroke()
          // 半円
          if ((trDataParams[2] + xi) % 2 === 0) {
            fill(color5)
            arc(x, y, tileSizeAdjusted * 2, tileSizeAdjusted * 2, PI, PI * (3 / 2))
          }
        })
        break
      default:
        for (let xj = 0; xj < 2; xj++) {
          for (let yj = 0; yj < 2; yj++) {
            trDrawBlock(() => {
              noStroke()
              fill(
                [
                  [color1, color2],
                  [color3, color4],
                ][xj][yj],
              )
              rect(x + xj * tileSize2, y + yj * tileSize2, tileSize2)
            })
          }
        }
        break
    }
  }
}

const trDrawDiagonalRight = _trDrawTilePattern((xi, yi) => {
  return trDataParams[0] + trDataParams[1] + xi + yi
})

const trDrawDiagonalLeft = _trDrawTilePattern((xi, yi) => {
  return abs(trDataParams[0] + trDataParams[1] + xi - yi)
})

function trDrawEllipseParts(xi, yi, tileSize) {
  const { color1, color2, color3, color5 } = trChromaticGetColor()
  const centerPos = createVector(xi * tileSize + tileSize / 2, yi * tileSize + tileSize / 2)

  const sineValue = sin(frameCount * 50 * 0.004)
  trCalcSineCount(sineValue)
  const _tileSize = tileSize * map(sineValue, -1, 1, 0.01, 1)

  let tileSizeAdjusted = tileSize
  if (trSineCount < TR_SINE_LOOP_COUNT) {
    tileSizeAdjusted = _tileSize
  } else {
    tileSizeAdjusted = tileSize
  }

  trDrawBlock(() => {
    noStroke()

    fill(xi % 2 === yi % 2 ? color1 : color5)
    ellipse(centerPos.x, centerPos.y, tileSizeAdjusted / 2)
  })

  trDrawBlock(() => {
    noFill()
    stroke(color3)
    strokeWeight(tileSizeAdjusted / 4)

    const startAngle = (trDataParams[3] + xi + yi) % 2 === 0 ? HALF_PI : PI + HALF_PI
    const endAngle = startAngle + PI
    arc(centerPos.x, centerPos.y, tileSizeAdjusted, tileSizeAdjusted, startAngle, endAngle)
    arc(centerPos.x, centerPos.y, tileSizeAdjusted, tileSizeAdjusted, PI + HALF_PI, TWO_PI + HALF_PI)
  })

  if ((xi + yi) % 2 === 0) {
    trDrawBlock(() => {
      noStroke()
      fill(color2)
      ellipse(centerPos.x, centerPos.y, tileSizeAdjusted / 4)
    })
  }
}

function trDrawSimpleLine(centerPos, angle, length) {
  const x1 = centerPos.x + cos(angle) * length
  const y1 = centerPos.y + sin(angle) * length
  const x2 = centerPos.x - cos(angle) * length
  const y2 = centerPos.y - sin(angle) * length
  line(x1, y1, x2, y2)
}

function trDrawRectAndStroke(xi, yi, tileSize) {
  const { color1, color2, color3, color4, color5 } = trChromaticGetColor()
  const centerPos = createVector(xi * tileSize + tileSize / 2, yi * tileSize + tileSize / 2)

  const sineValue = sin(frameCount * 50 * 0.004)
  trCalcSineCount(sineValue)
  let _sineValue = 1
  if (trSineCount < TR_SINE_LOOP_COUNT) {
    _sineValue = sineValue
  }

  trDrawBlock(() => {
    rectMode(CENTER)
    noFill()
    stroke([color1, color2, color3, color4, color5][(xi + yi) % 5])
    strokeWeight(min(tileSize / 10, trStrokeWeight))
    rect(centerPos.x, centerPos.y, tileSize * 0.8, tileSize * 0.8)

    // 真ん中(centerPos)から左上に向かって線を引く cos/sin を使って
    let angle = PI / trDataParams[0] + trDataParams[1] + trDataParams[1] + xi + yi * _sineValue
    const length = tileSize * 0.3
    trDrawSimpleLine(centerPos, angle, length)
    angle = PI / trDataParams[3] + trDataParams[4] + trDataParams[5] + trDataParams[6] + xi + yi * _sineValue
    trDrawSimpleLine(centerPos, angle, length)
    angle = PI / trDataParams[7] + trDataParams[8] + trDataParams[9] + trDataParams[10] + xi + yi * _sineValue
    trDrawSimpleLine(centerPos, angle, length)
  })
}

function _trDrawSquareCascade(func) {
  return _trDrawTilePattern1((params) => {
    trDrawBlock(() => {
      let t = params.tileSize
      if (trSineCount < TR_SINE_LOOP_COUNT) {
        t = params._tileSize
      }

      rectMode(CENTER)
      func({ ...params, t })
    })
  })
}

const trDrawSquareCascade1 = _trDrawSquareCascade((params) => {
  trDrawBlock(() => {
    const { x, y, t, tileSize, colorList, noiseVal } = params
    noFill()
    strokeWeight(min((tileSize * trDataParams[5]) / 800, trStrokeWeight))

    rectMode(CORNER)
    for (let i = 4; i >= 1; i--) {
      stroke(colorList[(noiseVal + i) % colorList.length])
      rect(x, y, t * 0.2 * i)
    }
  })
})

const trDrawSquareCascade2 = _trDrawSquareCascade((params) => {
  trDrawBlock(() => {
    const { x, y, t, colorList, noiseVal } = params
    noStroke()

    for (let i = 4; i >= 1; i--) {
      fill(colorList[(noiseVal + i) % colorList.length])
      rect(x, y, t * 0.2 * i)
    }
  })
})
