<template>
  <div>
    <canvas :id="canvasId"></canvas>
    <button class="btn btn-primary" @click="handleDrow" v-if="enterNewPoints">
      Обработать
    </button>
  </div>
</template>

<script>
import {drowLine} from '@/utils/canvas'
import {sort as sortPoints} from '@/utils/points'

export default {
  name: 'Canvas',
  props: {
    canvasId: {
      type: String,
      required: true
    },
    points: {
      type: Array,
      required: true
    },
    enterNewPoints: {
      type: Boolean
    }
  },
  data() {
    return {
      canvas: null,
      context: null
    }
  },
  mounted() {
    this.canvas = document.getElementById(this.canvasId)
    this.context = this.canvas.getContext('2d')
    this.context.transform(1, 0, 0, -1, 0, this.canvas.height)
    this.drowDiagram()
  },
  methods: {
    drowDiagram() {
      const sortedPoints = sortPoints(this.points, 'x')

      sortedPoints.forEach((point, index) => {
        if (sortedPoints[index + 1]) {
          const pointArr = point.split(';')
          const nextPointArr = sortedPoints[index + 1].split(';')

          drowLine({
            context: this.context,
            fromX: pointArr[0],
            fromY: pointArr[1],
            toX: nextPointArr[0],
            toY: nextPointArr[1]
          })
        }
      })
    },
    handleDrow() {
      this.drowDiagram()
      this.$emit('processed')
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 240px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
</style>
