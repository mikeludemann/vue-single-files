<template lang="html">
	<div :class="element">
		<slot></slot>
	</div>
</template>

<script lang="js">
	export default {
		name: 'slick',
		props: {
			options: String,
			element: String
		},
		mounted() {
			this.insertExternalSource();
		},
		data() {
			return {

			}
		},
		methods: {
			insertExternalSource: function () {

				var slick_options = document.createElement("script");

				if (typeof this.options === "undefined") {
					this.options = "";
				}

				slick_options.innerHTML = '$(document).ready(function() { $(".' + this.element + '").slick(' + this.options + '); });';

				document.getElementsByTagName("head").item(0).appendChild(slick_options);

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.slick-slider {

	}
</style>
