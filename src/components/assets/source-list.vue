<template lang="html">
  <video controls>
    <source v-for="(key, value) in sources" v-bind:src="value" v-bind:type="key">
  </video>
</template>

<script lang="ts">
  export default  {
    name: 'sourceList',
    props: ['sources'],
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
  .source-list {

  }
</style>
