<template lang="html">
	<iframe id="youtube" :width="width" :height="height" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</template>

<script lang="js">
	export default {
		name: 'youtube-video-list',
		props: {
			videolistid: String,
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

				var video = document.getElementById("youtube");
				video.setAttribute("src", "https://www.youtube.com/embed/videoseries?list=" + this.videolistid);

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.youtube-video-list {

	}
</style>
