<template lang="html">
  <tbody
    v-bind:id="id"
    v-bind:class="classname"
  >
    <slot></slot>
  </tbody>
</template>

<script lang="ts">
  export default  {
    name: 'tableBody',
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
  .table-body {

  }
</style>
