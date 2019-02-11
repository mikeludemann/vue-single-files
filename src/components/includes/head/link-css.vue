<template lang="html">
	<link
		v-bind:href="href"
		v-bind:rel="rel"
		v-bind:hreflang="hreflang"
		v-bind:sizes="sizes"
		v-bind:title="title"
		v-bind:type="type"
		v-bind:target="target"
		v-bind:rev="rev"
		v-bind:media="media"
		v-bind:crossorigin="crossorigin"
	/>
</template>

<script lang="ts">
	export default {
		name: 'linkCSS',
		props: {
			href: String,
			rel: String,
			hreflang: String,
			sizes: String,
			title: String,
			type: String,
			target: String,
			rev: String,
			media: String,
			crossorigin: String
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
	.link-css {

	}
</style>
