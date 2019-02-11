<template lang="html">
	<div>{{ getGeolocation }}</div>
</template>

<script lang="ts">
	export default {
		name: 'geolocation',
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
			getGeolocation: function () {
				if (navigator.geolocation) {

					return "Browser Geolocation is supported and available";

				} else {

					return "Browser Geolocation is not supported and not available";

				}
			}
		}
}
</script>

<style scoped lang="scss">
	.geolocation {

	}
</style>
