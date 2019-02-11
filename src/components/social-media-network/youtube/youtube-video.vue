<template lang="html">
	<iframe id="youtube" :width="width" :height="height" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</template>

<script lang="ts">
	export default {
		name: 'youtubeVideo',
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

				var video: any = document.getElementById("youtube");
				video.setAttribute("src", "https://www.youtube.com/embed/" + this.videoid);

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.youtube-video {

	}
</style>
