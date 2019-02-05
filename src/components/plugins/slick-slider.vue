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
			version: String,
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

				var script = document.createElement("script");

				script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.version + "/slick.js");

				document.getElementsByTagName("head").item(0).appendChild(script);

				var link = document.createElement("link");

				link.setAttribute("rel", "stylesheet");
				link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.version + "/slick-theme.css");

				document.getElementsByTagName("head").item(0).appendChild(link);

				var link2 = document.createElement("link");

				link2.setAttribute("rel", "stylesheet");
				link2.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.version + "/slick.css");

				document.getElementsByTagName("head").item(0).appendChild(link2);

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
