<template lang="html">
	<div class="g-recaptcha"></div>
</template>

<script lang="js">
	export default {
		name: 'googleRecaptcha',
		props: {
			code: String
		},
		mounted() {
			this.insertExternalSource();
		},
		data() {
			return {

			}
		},
		methods: {
			insertExternalSource: function () {

				var script = document.createElement("script");

				script.setAttribute("src", "https://www.google.com/recaptcha/api.js");
				script.setAttribute("async", "true");
				script.setAttribute("defer", "true");

				document.getElementsByTagName("head").item(0).appendChild(script);

				document.getElementsByClassName("g-recaptcha")[0].setAttribute("data-sitekey", this.code);

			}
		},
		computed: {

		}
  }
</script>

<style scoped lang="scss">
	.google-recaptcha {

	}
</style>