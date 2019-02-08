<template lang="html">
  <frameset
    v-bind:cols="cols"
    v-bind:rows="rows"
  >
    <slot></slot>
  </frameset>
</template>

<script lang="ts">
  export default  {
    name: 'frameSet',
    props: {
      rows: String,
      cols: String
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
  .frame-set {

  }
</style>
