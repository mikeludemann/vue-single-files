<template lang="html">
	<embed v-bind:src="url" v-bind:type="type" v-bind:width="width" v-bind:height="height"></embed>
</template>

<script lang="ts">
	export default {
		name: 'customEmbed',
		props: {
			url: String,
			type: String,
			width: String,
			height: String
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
	.custom-embed {

	}
</style>
