<template lang="html">
	<source
		v-bind:src="url"
		v-bind:srcset="urlset"
		v-bind:media="media"
		v-bind:sizes="size"
		v-bind:type="type"
	/>
</template>

<script lang="ts">
	export default {
		name: 'sourceContainer',
		props: {
			url: String,
			urlset: String,
			media: String,
			size: String,
			type: String
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
	.source-container {

	}
</style>
