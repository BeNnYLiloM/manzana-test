export const drowLine = ({context, fromX, fromY, toX, toY}) => {
  context.beginPath()
  context.moveTo(fromX, fromY)
  context.lineTo(toX, toY)
  context.stroke()
}

export const toClearHolst = (canvas, context) => {
  context.clearRect(0, 0, canvas.width, canvas.height)
}
