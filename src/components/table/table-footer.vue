<template lang="html">
  <tfoot
    v-bind:id="id"
    v-bind:class="classname"
  >
    <slot></slot>
  </tfoot>
</template>

<script lang="ts">
  export default  {
    name: 'tableFooter',
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
  .table-footer {

  }
</style>
