<template lang="html">
  <fieldset
    v-bind:disabled="disabled"
    v-bind:form="formname"
    v-bind:name="name"
  >
    <slot></slot>
  </fieldset>
</template>

<script lang="ts">
  export default  {
    name: 'formBorder',
    props: {
      disabled: Boolean,
      formname: String,
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
  .form-border {

  }
</style>
