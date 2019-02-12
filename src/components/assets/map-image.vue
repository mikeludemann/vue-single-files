<template lang="html">
	<map
		v-bind:name="name"
	>
		<slot></slot>
	</map>
</template>

<script lang="ts">
	export default {
		name: 'mapImage',
		props: {
			name: String
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
	.map-image {

	}
</style>
