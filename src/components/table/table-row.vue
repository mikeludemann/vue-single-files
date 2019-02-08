<template lang="html">
  <tr
    v-bind:id="id"
    v-bind:class="classname"
  >
    <slot></slot>
  </tr>
</template>

<script lang="ts">
  export default  {
    name: 'tableRow',
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
  .table-row {

  }
</style>
