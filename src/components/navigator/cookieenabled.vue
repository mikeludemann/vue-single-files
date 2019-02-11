<template lang="html">
	<div>{{ getCookieEnabled }}</div>
</template>

<script lang="ts">
	export default {
		name: 'cookieenabled',
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
			getCookieEnabled: function () {
				return navigator.cookieEnabled;
			}
		}
}
</script>

<style scoped lang="scss">
	.cookieenabled {

	}
</style>
