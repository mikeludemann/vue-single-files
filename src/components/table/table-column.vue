<template lang="html">
  <td
    v-bind:id="id"
    v-bind:class="classname"
    v-bind:colspan="columnsize"
    v-bind:rowspan="rowsize"
    v-bind:headers="headers"
  >
    <slot></slot>
  </td>
</template>

<script lang="ts">
  export default  {
    name: 'tableColumn',
    props: {
      id: String,
      classname: String,
      columnsize: String,
      rowsize: String,
      headers: String
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
  .table-column {

  }
</style>
