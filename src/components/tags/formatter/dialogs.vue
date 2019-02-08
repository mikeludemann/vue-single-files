<template lang="html">
  <dialog
    v-bind:compact="compact"
  >
    <slot></slot>
  </dialog>
</template>

<script lang="ts">
  export default  {
    name: 'dialogs',
    props: {
      compact: String
    },
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .dialogs {

  }
</style>
