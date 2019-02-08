<template lang="html">
  <colgroup
    v-bind:id="id"
    v-bind:class="classname"
    v-bind:span="size"
  >
    <slot></slot>
  </colgroup>
</template>

<script lang="ts">
  export default  {
    name: 'tableColumnGroup',
    props: {
      id: String,
      classname: String,
      size: String
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
  .table-column-group {

  }
</style>
