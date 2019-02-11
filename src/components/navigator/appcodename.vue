<template lang="html">
	<div>{{ getAppCodeName }}</div>
</template>

<script lang="ts">
	export default {
		name: 'appcodename',
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
			getAppCodeName: function () {
				return navigator.appCodeName;
			}
		}
}
</script>

<style scoped lang="scss">
	.appcodename {

	}
</style>
