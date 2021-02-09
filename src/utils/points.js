const compaireNumeric = (a, b) => {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b) return -1
}

export const sort = (points, sortBy) => {
  const pointsX = []
  const objectByX = {}
  const sortedPoints = []
  const indexOfSortBy = sortBy === 'x' ? 0 : 1

  points.forEach(point => {
    const x = +point.split(';')[indexOfSortBy]

    pointsX.push(x)
    objectByX[x] = point
  })

  pointsX.sort(compaireNumeric).forEach(pointX => {
    sortedPoints.push(objectByX[pointX])
  })

  return sortedPoints
}
