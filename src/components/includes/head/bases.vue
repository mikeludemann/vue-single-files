<template lang="html">
	<base
		v-bind:src="url"
		v-bind:target="target"
	/>
</template>

<script lang="ts">
	export default {
		name: 'bases',
		props: {
			url: String,
			target: String
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
	.bases {

	}
</style>
