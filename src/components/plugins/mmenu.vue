<template lang="html">
	<nav :id="id">
		<slot></slot>
	</nav>
</template>

<script lang="js">
	export default {
		name: 'mmenu',
		props: {
			options: String,
			id: String
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

				var mmenu_options = document.createElement("script");

				if (typeof this.options === "undefined") {
					this.options = "";
				}

				mmenu_options.innerHTML = 'jQuery(document).ready(function( $ ) { $("#' + this.id + '").mmenu(' + this.options + '); });';

				document.getElementsByTagName("head").item(0).appendChild(mmenu_options);

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.mmenu {

	}
</style>
