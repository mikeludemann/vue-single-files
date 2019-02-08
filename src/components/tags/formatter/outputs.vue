<template lang="html">
  <output
    v-bind:name="name"
    v-bind:form="form"
    v-bind:for="for"
  >
  </output>
</template>

<script lang="ts">
  export default  {
    name: 'outputs',
    props: {
      name: String,
      form: String,
      for: String
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
  .outputs {

  }
</style>
