<template>
  <div class="add-point">
    <div class="add-point__item">
      <div class="add-point__item-label">Х:</div>
      <input
        type="text"
        v-model="splitedPoint[0]"
        @keyup="saveChanges($event, 0)"
      />
    </div>
    <div class="add-point__item">
      <div class="add-point__item-label">Y:</div>
      <input
        type="text"
        v-model="splitedPoint[1]"
        @keyup="saveChanges($event, 1)"
      />
    </div>
    <div class="add-point__error" v-if="isError">
      <div class="add-point__error-item">Поле не должно содержать буквы</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPoint',
  props: ['point', 'index'],
  data() {
    return {
      splitedPoint: this.point.split(';'),
      isError: false
    }
  },
  methods: {
    saveChanges(event, type) {
      event.target.classList.remove('error')
      this.isError = false

      if (event.target.value.match(/[a-zA-Z]/, 'g')) {
        event.target.classList.add('error')
        this.isError = true
      } else {
        const newPoint = [...this.splitedPoint]
        newPoint[type] = event.target.value

        this.$emit('update:point', {
          index: this.index,
          data: newPoint.join(';')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-point {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 14px 0;

  &__item {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    &-label {
      font-size: 14px;
      min-width: 30px;
    }

    input {
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0 6px;
      width: 100px;
      height: 22px;

      &.error {
        border-color: #e74c3c;
      }
    }
  }

  &__error {
    font-size: 12px;
    color: #e74c3c;
  }
}
</style>
