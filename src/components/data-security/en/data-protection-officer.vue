<template lang="html">
	<div>
		<h2>Data protection officer</h2>
		<h3>Statutory data protection officer</h3>
		<p>We have appointed a data protection officer for our company.</p>
		<p>{{this.firstname}} {{this.lastname}}
		<br /> {{this.street}} {{this.streetnumber}}
		<br /> {{this.postalcode}} {{this.city}}</p>
		<p>Telephone: {{this.telephone}}
		<br /> Email: {{this.email}}</p>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'dataProtectionOfficer',
		props: {
			firstname: {
				type: String
			},
			lastname: {
				type: String
			},
			street: {
				type: String
			},
			streetnumber: {
				type: String
			},
			postalcode: {
				type: String
			},
			city: {
				type: String
			},
			telephone: {
				type: String
			},
			email: {
				type: String
			}
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

		}
}
</script>

<style scoped lang="scss">
	.data-protection-officer {

	}
</style>
