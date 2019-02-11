<template lang="html">
	<div>{{ getPlatform }}</div>
</template>

<script lang="ts">
	export default {
		name: 'platform',
		props: [],
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {

		},
		computed: {
			getPlatform: function () {
				return navigator.platform;
			}
		}
}
</script>

<style scoped lang="scss">
	.platform {

	}
</style>
