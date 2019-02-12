<template lang="html">
  <div class="legalForm--container">
    <div class="legalForm--headline">
      {{this.headline}}
    </div>
    <div class="legalForm--commercial--register">
      <span class="register--title">{{this.register_title}}</span><br />
      <span class="register">{{this.register_form}}</span>
    </div>
    <div class="legalForm--vat--identification--number">
      <span class="vat--title">{{this.vat_title}}</span><br />
      <span class="vat">{{this.vat_form}}</span>
    </div>
    <div class="legalForm--tax">
      <span class="tax--title">{{this.tax_title}}</span><br />
      <span class="tax">{{this.tax}}</span>
    </div>
    <div class="legalForm--law">
      <span class="law--title">{{this.law_title}}</span><br />
      <span class="law">{{this.law_name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
  export default  {
    name: 'legalForm',
    props: {
      headline: String,
      register_title: String,
      register_form: String,
      vat_title: String,
      vat_form: String,
      tax_title: String,
      tax: String,
      law_title: String,
      law_name: String
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
  .legal-form {

  }
</style>
