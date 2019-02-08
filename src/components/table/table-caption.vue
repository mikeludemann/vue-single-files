<template lang="html">
  <caption
      v-bind:id="id"
      v-bind:class="classname"
    >
      <slot></slot>
    </caption>
</template>

<script lang="ts">
  export default  {
    name: 'tableCaption',
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
  .table-caption {

  }
</style>
