<template lang="html">
  <q
    v-bind:cite="url"
  >
    <slot></slot>
  </q>
</template>

<script lang="ts">
  export default  {
    name: 'quote',
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
  .quote {

  }
</style>
