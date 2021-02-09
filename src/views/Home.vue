<template>
  <div class="container">
    <Canvas
      :canvasId="canvasId"
      :points="points"
      :enterNewPoints="isAddPoint"
      @processed="handleEnterMode"
    />

    <button class="btn btn-primary" v-if="!isAddPoint" @click="setPoints">
      Задать входные данные
    </button>

    <div v-if="isAddPoint">
      <AddPoint
        v-for="(point, index) in points"
        :index="index"
        :key="`point_${index}`"
        :point="point"
        @update:point="setPoint"
      />
      <div class="flex mt-1">
        <button class="btn btn-secondary mr-1" @click="incrementAddPoint">
          Добавить точку
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'
import AddPoint from '@/components/AddPoint'
import {toClearHolst} from '@/utils/canvas'

export default {
  name: 'Home',
  data() {
    return {
      isAddPoint: false,
      points: require('@/points.json'),
      canvasId: 'canvas'
    }
  },
  components: {
    Canvas,
    AddPoint
  },
  methods: {
    setPoints() {
      const canvas = document.getElementById(this.canvasId)
      const ctx = canvas.getContext('2d')

      toClearHolst(canvas, ctx)

      this.points = []
      this.handleEnterMode()
      this.incrementAddPoint()
    },
    incrementAddPoint() {
      this.points.push('0;0')
    },
    setPoint(e) {
      this.$set(this.points, e.index, e.data)
    },
    handleEnterMode() {
      this.isAddPoint = !this.isAddPoint
    }
  }
}
</script>

<style lang="scss"></style>
