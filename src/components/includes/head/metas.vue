<template lang="html">
	<meta
		v-bind:name="name"
		v-bind:content="content"
		v-bind:charset="charset"
		v-bind:itemprop="itemprop"
		v-bind:https-equiv="httpsequiv"
		v-bind:property="property"
	/>
</template>

<script lang="ts">
	export default {
		name: 'metas',
		props: {
			name: String,
			content: String,
			charset: String,
			itemprop: String,
			httpsequiv: String,
			property: String
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
	.metas {

	}
</style>
