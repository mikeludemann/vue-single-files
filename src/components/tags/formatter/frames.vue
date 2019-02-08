<template lang="html">
  <frame
    v-bind:border="border"
    v-bind:longdesc="urllong"
    v-bind:url="url"
    v-bind:marginHeight="height"
    v-bind:marginWidth="width"
    v-bind:name="name"
    v-bind:noresize="noresize"
    v-bind:scrolling="scrolling"
  />
</template>

<script lang="ts">
  export default  {
    name: 'frames',
    props: {
      border: String,
      urllong: String,
      url: String,
      width: String,
      height: String,
      name: String,
      noresize: String,
      scrolling: String
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
  .frames {

  }
</style>
