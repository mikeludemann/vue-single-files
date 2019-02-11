<template lang="html">
  <div v-for="(text, value) in lists" :value="text">
    {{ text }}
  </div>
</template>

<script lang="ts">
  export default  {
    name: 'modernList',
    props: ['lists'],
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
  .modern-list {

  }
</style>
