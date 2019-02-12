<template lang="html">
	<area
		v-bind:shape="format"
		v-bind:coords="coordination"
		v-bind:src="url"
		v-bind:alt="alttext"
	/>
</template>

<script lang="ts">
	export default {
		name: 'mapArea',
		props: {
			format: String,
			coordination: String,
			url: String,
			alttext: String
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
	.map-area {

	}
</style>
