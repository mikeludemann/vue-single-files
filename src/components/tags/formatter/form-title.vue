<template lang="html">
  <legend
    v-bind:align="position"
  >
    <slot></slot>
  </legend>
</template>

<script lang="ts">
  export default  {
    name: 'formTitle',
    props: {
      position: String
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
  .form-title {

  }
</style>
