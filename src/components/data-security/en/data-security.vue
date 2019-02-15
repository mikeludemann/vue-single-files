<template lang="html">
	<div id="data--security">
		<h1>{{this.headline}}</h1>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'dataSecurity',
		props: {
			headline: {
				type: String,
				default: 'Privacy Policy'
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
	.data-security {

	}
</style>
