<template lang="html">
	<div :id="id"></div>
</template>

<script lang="js">
	export default {
		name: 'clockTime',
		props: {
			id: {
				type: String,
				default: "clocktime"
			}
		},
		mounted() {
			this.insertExternalSource(this.id);
		},
		data() {
			return {

			}
		},
		methods: {
			insertExternalSource: function (element) {

				var timer = function () {
					var d = new Date();
					var t = d.toLocaleTimeString();
					document.getElementById(element).innerHTML = t;

					setInterval(timer, 1000);
				}

				window.onload = timer();

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.clock-time {

	}
</style>
