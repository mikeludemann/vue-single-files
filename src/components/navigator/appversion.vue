<template lang="html">
	<div>{{ getAppVersion }}</div>
</template>

<script lang="ts">
	export default {
		name: 'appversion',
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
			getAppVersion: function () {
				return navigator.appVersion;
			}
		}
}
</script>

<style scoped lang="scss">
	.appversion {

	}
</style>
