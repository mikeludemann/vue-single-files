<template lang="html">
  <nav id="title" class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="navbar-brand" v-if="visible">{{title}}</div>
    <div class="navbar-brand" v-else>Vue</div>
  </nav>
</template>

<script lang="ts">
  export default  {
    name: 'customHeader',
    props: ['title'],
    mounted() {

    },
    data() {
      return {
        title: "Vue Tutorial and Learning",
        visible: true
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .custom-header {

  }
</style>
