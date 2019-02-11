<template lang="html">
	<div>{{ getUserAgent }}</div>
</template>

<script lang="ts">
	export default {
		name: 'useragent',
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
			getUserAgent: function () {
				return navigator.userAgent;
			}
		}
}
</script>

<style scoped lang="scss">
	.useragent {

	}
</style>
