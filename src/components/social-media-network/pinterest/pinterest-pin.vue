<template lang="html">
	<div id="container">
		<a id="pinterest" data-pin-do="embedPin" :data-pin-width="size" :data-pin-terse="descriptionHide"></a>
	</div>
</template>

<script lang="js">
	export default {
		name: 'pinterestPin',
		props: {
			size: String,
			descriptionHide: Boolean,
			pinid: String
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

				var js = document.createElement("script"),
				pin = document.getElementById("pinterest");

				js.setAttribute("async", "true");
				js.setAttribute("defer", "true");
				js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");
				document.getElementsByTagName("head").item(0).appendChild(js);

				if (this.pinid != "" || this.pinid != null) {

					pin.setAttribute("href", "https://www.pinterest.com/pin/" + this.pinid);

				}

				document.getElementsByTagName("head").item(0).appendChild(js);

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.pinterest-pin {

	}
</style>
