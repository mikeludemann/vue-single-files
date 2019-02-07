<template lang="html">
  <select>
    <option v-for="(text, value) in options" :value="text">
      {{ text }}
    </option>
  </select>
</template>

<script lang="js">
  export default  {
    name: 'optionList',
    props: ['options'],
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
  .option-list {

  }
</style>
