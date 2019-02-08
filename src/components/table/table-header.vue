<template lang="html">
  <thead
    v-bind:id="id"
    v-bind:class="classname"
    v-bind:colspan="columnsize"
    v-bind:rowspan="rowsize"
    v-bind:headers="headers"
    v-bind:abbr="abbreviation"
    v-bind:scope="scope"
  >
    <slot></slot>
  </thead>
</template>

<script lang="ts">
  export default  {
    name: 'tableHeader',
    props: {
      id: String,
      classname: String,
      columnsize: String,
      rowsize: String,
      headers: String,
      abbreviation: String,
      scope: String
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
  .table-header {

  }
</style>
