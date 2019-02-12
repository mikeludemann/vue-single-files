<template lang="html">
	<object v-bind:data="url" v-bind:type="type" v-bind:name="name"></object>
</template>

<script lang="ts">
	export default {
		name: 'customObject',
		props: {
			url: String,
			type: String,
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
	.custom-object {

	}
</style>
