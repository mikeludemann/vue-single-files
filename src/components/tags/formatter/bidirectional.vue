<template lang="html">
  <bdo
    v-bind:dir="direction"
  >
    {{this.text}}
  </bdo>
</template>

<script lang="ts">
  export default  {
    name: 'bidirectional',
    props: {
      direction: String,
      text: String,
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
  .bidirectional {

  }
</style>
