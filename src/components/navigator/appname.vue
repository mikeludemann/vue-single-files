<template lang="html">
	<div>{{ getAppName }}</div>
</template>

<script lang="ts">
	export default {
		name: 'appname',
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
			getAppName: function () {
				return navigator.appName;
			}
		}
}
</script>

<style scoped lang="scss">
	.appname {

	}
</style>
