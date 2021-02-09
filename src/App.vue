<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

.flex {
  display: flex;
}

@for $i from 0 through 5 {
  .m {
    &-#{$i} {
      margin: $i + rem !important;
    }

    &l-#{$i} {
      margin-left: $i + rem !important;
    }

    &r-#{$i} {
      margin-right: $i + rem !important;
    }

    &b-#{$i} {
      margin-bottom: $i + rem !important;
    }

    &t-#{$i} {
      margin-top: $i + rem !important;
    }
  }
}

.btn {
  display: flex;
  align-self: center;
  justify-content: center;
  text-align: center;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 6px;
  padding: 12px 18px;
  color: #fff;

  &-primary {
    background: #568ea6;
  }

  &-secondary {
    background: #16a085;
  }

  &-small {
    font-size: 14px;
    padding: 6px 10px;
  }
}
</style>
