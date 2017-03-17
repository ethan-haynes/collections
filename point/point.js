const Point = function(x_point=0, y_point=0) {
  const x = x_point
  const y = y_point

  return {
    get x {
      return x
    },
    get y {
      return y
    },
    get r {
      return Math.sqrt(x*x + y*y)
    }
  }
}
module.exports = Point
