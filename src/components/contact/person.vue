<template lang="html">
	<div>{{ getPerson() }}</div>
</template>

<script lang="js">
	export default {
		name: 'person',
		props: {
			firstname: String,
			secondname: String,
			lastname: String
    	},
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {
			getPerson: function () {
				var txt = "";

				if (this.firstname != "" || this.firstname != null) {

					txt += this.firstname;

				} else if (typeof this.firstname === "undefined") {

					txt += "";

				}

				if (this.secondname != "" || this.secondname != null) {

					txt += " " + this.secondname;

				} else if (typeof this.secondname === "undefined") {

					txt += "";

				}

				if (this.lastname != "" || this.lastname != null) {

					txt += " " + this.lastname;

				} else if (typeof this.lastname === "undefined") {

					txt += "";

				}

				return txt;

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.person {

	}
</style>
