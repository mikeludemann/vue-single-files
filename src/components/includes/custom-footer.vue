<template lang="html">
  <div>
    <div class="float-left">Copyright &copy; {{this.begindate}} - {{this.enddate}}</div>
    <div class="float-right">{{this.fullname}}</div>
  </div>
</template>

<script lang="ts">
  export default  {
    name: 'custom-footer',
    props: {
      fullname: String,
      begindate: String,
      enddate: String
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
  .custom-footer {

  }
</style>
