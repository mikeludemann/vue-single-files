<template lang="html">
  <progress
    v-bind:max="max"
    v-bind:value="value"
  >
  </progress>
</template>

<script lang="ts">
  export default  {
    name: 'progressBar',
    props: {
      value: String,
      max: String
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
  .progress-bar {

  }
</style>
