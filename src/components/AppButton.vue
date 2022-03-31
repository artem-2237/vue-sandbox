<template>
  <button
      class="btn"
      :class="type"
      @click="$emit('onClick')"
      :style="{width: width}"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      require: false,
      default: 'Button'
    },
    type: {
      type: String,
      require: false,
      default: 'info'
    },
    width: {
      type: String,
      require: false,
      default: 'auto'
    }
  }
}
</script>

<style scoped>

</style>