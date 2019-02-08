<template lang="html">
  <data
    v-bind:value="value"
  >
    {{this.text}}
  </data>
</template>

<script lang="ts">
  export default  {
    name: 'dataContainer',
    props: {
      value: String,
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
  .data-container {

  }
</style>
