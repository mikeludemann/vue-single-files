<template lang="html">
  <col
    v-bind:id="id"
    v-bind:class="classname"
    v-bind:span="size"
  >
    <slot></slot>
  </col>
</template>

<script lang="ts">
  export default  {
    name: 'tableColumnOfGroup',
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
  .table-column-of-group {

  }
</style>
