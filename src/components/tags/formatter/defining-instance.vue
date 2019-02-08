<template lang="html">
  <dfn
    v-bind:id="id"
    v-bind:title="title"
  >
    <slot></slot>
  </dfn>
</template>

<script lang="ts">
  export default  {
    name: 'definingInstance',
    props: {
      id: String,
      title: String,
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
  .defining-instance {

  }
</style>
