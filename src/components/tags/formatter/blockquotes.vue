<template lang="html">
  <blockquote
    v-bind:cite="url"
  >
    <slot></slot>
  </blockquote>
</template>

<script lang="ts">
  export default  {
    name: 'blockquotes',
    props: ['url'],
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
  .blockquotes {

  }
</style>
