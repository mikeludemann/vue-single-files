<template lang="html">
	<audio
		v-bind:controls="controls"
		v-bind:crossOrigin="crossOrigin"
		v-bind:loop="loop"
		v-bind:muted="muted"
		v-bind:autoplay="autoplay"
		v-bind:preload="preload"
		v-bind:id="id"
		v-bind:title="title"
	>
		<slot></slot>
	</audio>
</template>

<script lang="ts">
	export default {
		name: 'audioContainer',
		props: {
			controls: Boolean,
			crossOrigin: String,
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
	.audio-container {

	}
</style>
