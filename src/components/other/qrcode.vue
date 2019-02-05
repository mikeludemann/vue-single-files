<template lang="html">
	<div id="qrcode"></div>
</template>

<script lang="js">
	export default {
		name: 'qrcode',
		props: {
			width: {
				type: Number,
				required: true
			},
			height: {
				type: Number,
				required: true
			},
			data: {
				type: String,
				required: true
			},
			format: {
				default: "UTF-8"
			},
			correction: {
				default: "L"
			}
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

				var image = document.createElement("img");

				var url = "https://chart.googleapis.com/chart?cht=qr&chs=" + this.width + "x" + this.height + "&chl=" + this.data + "&choe=" + this.format + "&chld=" + this.correction + "";

				image.setAttribute("src", url);

				document.getElementById("qrcode").appendChild(image);

				}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.qrcode {

	}
</style>
