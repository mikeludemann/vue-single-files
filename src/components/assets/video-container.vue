<template lang="html">
	<video
		v-bind:controls="controls"
		v-bind:poster="poster"
		v-bind:loop="loop"
		v-bind:muted="muted"
		v-bind:autoplay="autoplay"
		v-bind:preload="preload"
		v-bind:id="id"
		v-bind:title="title"
	>
		<slot></slot>
	</video>
</template>

<script lang="ts">
	export default {
		name: 'video-container',
		props: {
			controls: Boolean,
			poster: String,
			loop: Boolean,
			muted: Boolean,
			autoplay: Boolean,
			preload: String,
			id: String,
			title: String
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
	.video-container {

	}
</style>
