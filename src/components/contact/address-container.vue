<template lang="html">
  <div id="address"></div>
</template>

<script lang="js">
	export default {
		name: 'addressContainer',
		props: {
			street: String,
			streetnumber: String,
			postalcode: String,
			city: String,
			country: String
				},
		mounted() {
			this.getAddress();
		},
		data() {
			return {

			}
		},
		methods: {
			getAddress: function () {
				var txt = "";

				if (this.street != "" || this.street != null) {

					txt += "<div>" + this.street;

				} else if (typeof this.street === "undefined") {

					txt += "";

				}

				if (this.streetnumber != "" || this.streetnumber != null) {

					txt += " " + this.streetnumber;
					txt += "</div>";

				} else if (typeof this.streetnumber === "undefined") {

					txt += "";

				}

				if (this.postalcode != "" || this.postalcode != null) {

					txt += "<div>" + this.postalcode;

				} else if (typeof this.postalcode === "undefined") {

					txt += "";

				}

				if (this.city != "" || this.city != null) {

					txt += " " + this.city;
					txt += "</div>";

				} else if (typeof this.city === "undefined") {

					txt += "";

				}

				if (this.country != "" || this.country != null) {

					txt += "<div>" + this.country + "</div>";

				} else if (typeof this.country === "undefined") {

					txt += "";

				}

        var content = document.getElementById("address");
        content.innerHTML = txt;

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.address-container {

	}
</style>
