<template lang="html">
	<a
		v-bind:id="id"
		v-bind:class="classname"
		v-bind:href="href"
		v-bind:download="downloadname"
	>
		<slot></slot>
	</a>
</template>

<script lang="ts">
	export default {
		name: 'download-link',
		props: {
			id: String,
			classname: String,
			href: String,
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
	.download-link {

	}
</style>
