<template lang="html">
	<video controls>
		<source v-bind:src="url" v-bind:type="type">
			{{defaulttext}}
	</video>
</template>

<script lang="ts">
	export default {
		name: 'customVideo',
		props: {
			url: String,
			type: String,
			defaulttext: String
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
	.custom-video {

	}
</style>
