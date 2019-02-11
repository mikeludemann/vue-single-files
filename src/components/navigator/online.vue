<template lang="html">
	<div>{{ getOnLine }}</div>
</template>

<script lang="ts">
	export default {
		name: 'online',
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
			getOnLine: function () {
				return navigator.onLine;
			}
		}
}
</script>

<style scoped lang="scss">
	.online {

	}
</style>
