<template lang="html">
  <div>{{ toString }}</div>
</template>

<script lang="js">
  export default  {
    name: 'month',
    props: {
      text: String
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
      toString: function () {
        if (this.text == "true") {
          var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          return months[new Date().getMonth()];

        } else {
          return new Date().getMonth() + 1;
        }
      }
    }
}
</script>

<style scoped lang="scss">
  .month {

  }
</style>
