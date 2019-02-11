<template lang="html">
	<basefont
		v-bind:color="color"
		v-bind:face="fontfamily"
		v-bind:size="size"
	/>
</template>

<script lang="ts">
	export default {
		name: 'baseFont',
		props: {
			color: String,
			fontfamily: String,
			size: String
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
	.base-font {

	}
</style>
