<template>
  <app-alert
      v-if="alert"
      type="warning"
      closable
      closable-text="Close alert"
      msg="This is warning alert"
      @onClose="toggleAlert"
  >
  </app-alert>
  <div class="card">
    <AppButton
        type="info"
        :text="alert ? 'Close' : 'Open'"
        width="130px"
        @onClick="toggleAlert"
    />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppAlert from '@/components/AppAlert'
import alertMixin from '@/mixins/alertMixin'

export default {
  name: 'AppBlock',
  components: {
    AppButton,
    AppAlert,
  },
  mixins: [alertMixin]
}
</script>

<style scoped>

</style>