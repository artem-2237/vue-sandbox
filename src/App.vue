<template>
  <div class="container">
    <div class="alert" :class="{'alert-show': alert}">
      <h2 class="subtitle">Alert</h2>
    </div>
    <div class="card">
      <h2 v-color:[type]="color" class="title">Заголовок</h2>
      <input type="text">
      <div class="btn-wrapper">
        <AppButton :text="alert ? 'Close' : 'Open'" @onClick="toggleAlert" />
        <AppButton text="Change color" @onClick="toggleColor" />
        <AppButton text="Change type" @onClick="type = type === 'color' ? 'backgroundColor' : 'color'" />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import alertMixin from '@/mixins/alertMixin'
import colorDirective from '@/diresctives/colorDirective'
import focusDirective from '@/diresctives/focusDirective'

export default {
  name: 'App',
  components: {
    AppButton,
  },
  mixins: [alertMixin],
  data() {
    return {
      color: '#fda053',
      type: 'color'
    }
  },
  methods: {
    toggleColor() {
      if (this.color === '#fda053') {
        this.color = '#329898'
      } else {
        this.color = '#fda053'
      }
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

<style lang="scss">
#app {

}
</style>
