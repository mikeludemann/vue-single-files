<template lang="html">
  <video controls>
    <track v-for="track in tracks" v-bind:src="track.url" v-bind:kind="track.kind" v-bind:srclang="track.srclang" v-bind:label="track.label">
  </video>
</template>

<script lang="ts">
  export default  {
    name: 'trackList',
    props: ['tracks'],
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
  .track-list {

  }
</style>
