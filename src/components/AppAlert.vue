<template>
  <div class="alert" :class="type">
    <h3 v-if="msg.length" class="subtitle">{{ msg }}</h3>
    <slot />
    <button v-if="closable" class="btn danger" @click="$emit('onClose')">{{ closableText }}</button>
  </div>
</template>

<script>
export default {
  name: 'AppAlert',
  props: {
    type: {
      type: String,
      require: false,
      default: 'info'
    },
    msg: {
      type: String,
      require: false,
      default: ''
    },
    closable: {
      type: Boolean,
      require: false,
      default: false
    },
    closableText: {
      type: String,
      require: false,
      default: 'Close'
    }
  }
}
</script>

<style scoped>
button {
  margin-top: 20px;
}
</style>