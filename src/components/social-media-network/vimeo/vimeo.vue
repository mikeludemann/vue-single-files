<template lang="html">
	<iframe id="vimeo" :width="width" :height="height" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</template>

<script lang="js">
	export default {
		name: 'vimeo',
		props: {
			videoid: String,
			width: String,
			height: String
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

				var video = document.getElementById("vimeo");
				video.setAttribute("src", "https://player.vimeo.com/video/" + this.videoid);

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.vimeo {

	}
</style>
