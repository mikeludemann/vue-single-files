<template lang="html">
  <abbr
    v-bind:title="title"
  >
    <slot></slot>
  </abbr>
</template>

<script lang="ts">
  export default  {
    name: 'abbreviation',
    props: ['title'],
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
  .abbreviation {

  }
</style>
