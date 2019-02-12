<template lang="html">
	<img
		v-bind:id="id"
		v-bind:class="classname"
		v-bind:src="url"
		v-bind:alt="alt"
		v-bind:width="width"
		v-bind:height="height"
		v-bind:usemap="mapname"
	/>
</template>

<script lang="ts">
	export default {
		name: 'image',
		props: {
			id: String,
			classname: String,
			url: String,
			alt: String,
			width: String,
			height: String,
			mapname: String
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
	.image {

	}
</style>
