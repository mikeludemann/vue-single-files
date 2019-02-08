<template lang="html">
  <applet
    v-bind:code="url"
    v-bind:object="objectname"
    v-bind:align="position"
    v-bind:archive="archiveurl"
    v-bind:codebase="codebaseurl"
    v-bind:hspace="spacehorizontal"
    v-bind:vspace="spacevertical"
    v-bind:height={this.props.height}
    v-bind:width={this.props.width}
    v-bind:name={this.props.name}
  >
    <slot></slot>
  </applet>
</template>

<script lang="ts">
  export default  {
    name: 'applet-container',
    props: {
      url: String,
      objectname: String,
      position: String,
      alttext: String,
      archiveurl: String,
      codebaseurl: String,
      spacehorizontal: String,
      spacevertical: String,
      height: String,
      width: String,
      name: String
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
  .applet-container {

  }
</style>
