<template lang="html">
	<div>
		<h2>{{this.headline}}</h2>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
	export default {
		name: 'analyticsAdvertising',
		props: {
			headline: {
				type: String,
				default: 'Analytics and advertising'
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
	.analytics-advertising {

	}
</style>
