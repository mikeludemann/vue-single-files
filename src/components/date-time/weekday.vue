<template lang="html">
	<div>{{ toString }}</div>
</template>

<script lang="js">
	export default {
		name: 'weekday',
		props: {
			text: String
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
			toString: function () {
				if (this.text == "true") {
					var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
					return days[new Date().getDay()];

				} else {
					return new Date().getDay();
				}
			}
		}
}
</script>

<style scoped lang="scss">
	.weekday {

	}
</style>
