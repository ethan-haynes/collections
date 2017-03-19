const Point = function(x_point=0, y_point=0) {
  const x = x_point
  const y = y_point

  return {
    get x() {
      return x
    },
    get y() {
      return y
    },
    /* get polar radius */
    get r() {
      return Math.sqrt(x*x + y*y)
    },
    /* returns the angle theta of an (x, y) point */
    theta() {
        return Math.atan2(y, x)
    },
    /* angle between two points */
    angleTo(to) {
        dx = to.x - x
        dy = to.y - y
        return Math.atan2(dy, dx)
    }
  }
}
module.exports = Point
