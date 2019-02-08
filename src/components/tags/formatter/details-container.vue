<template lang="html">
  <details
    v-bind:open="open"
  >
    <slot></slot>
  </details>
</template>

<script lang="ts">
  export default  {
    name: 'detailsContainer',
    props: {
      open: Boolean,
      text: String,
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
  .details-container {

  }
</style>
