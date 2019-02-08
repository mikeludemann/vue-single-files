<template lang="html">
  <meter
    v-bind:min="min"
    v-bind:max="max"
    v-bind:value="value"
  >
    {{this.text}}
  </meter>
</template>

<script lang="ts">
  export default  {
    name: 'meters',
    props: {
      value: String,
      min: String,
      max: String,
      text: String
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
  .meters {

  }
</style>
