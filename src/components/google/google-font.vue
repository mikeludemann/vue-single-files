<template lang="html">

</template>

<script lang="js">
	export default {
		name: 'googleFont',
		props: {
			font: String
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

				var link = document.createElement("link");

				link.setAttribute("rel", "stylesheet");
				link.setAttribute("href", "https://fonts.googleapis.com/css?family=" + this.font);

				document.getElementsByTagName("head").item(0).appendChild(link);
			}
		},
		computed: {

		}
  }
</script>

<style scoped lang="scss">
	.google-font {

	}
</style>
