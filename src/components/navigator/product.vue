<template lang="html">
	<div>{{ getProduct }}</div>
</template>

<script lang="ts">
	export default {
		name: 'product',
		props: [],
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {

		},
		computed: {
			getProduct: function () {
				return navigator.product;
			}
		}
}
</script>

<style scoped lang="scss">
	.product {

	}
</style>
