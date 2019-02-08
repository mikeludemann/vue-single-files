<template lang="html">
  <table
    v-bind:id="id"
    v-bind:class="classname"
  >
    <slot></slot>
  </table>
</template>

<script lang="ts">
  export default  {
    name: 'tableContainer',
    props: {
      id: String,
      classname: String
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
  .table-container {

  }
</style>
