<template lang="html">
	<a
		v-bind:id="id"
		v-bind:class="classname"
		v-bind:href="href"
		v-bind:hreflang="hreflang"
		v-bind:media="media"
		v-bind:ping="ping"
		v-bind:rev="rev"
		v-bind:target="target"
		v-bind:type="type"
		v-bind:download="downloadname"
	>
		<slot></slot>
	</a>
</template>

<script lang="ts">
	export default {
		name: 'links',
		props: {
			id: String,
			classname: String,
			href: String,
			hreflang: String,
			media: String,
			ping: String,
			rev: String,
			target: String,
			type: String,
			downloadname: String
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
	.links {

	}
</style>
