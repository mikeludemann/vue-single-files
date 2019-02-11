<template lang="html">
	<script
		v-bind:src="src"
		v-bind:async="async"
		v-bind:defer="defer"
		v-bind:charset="charset"
		v-bind:type="type"
	>
	</script>
</template>

<script lang="ts">
	export default {
		name: 'scripts',
		props: {
			src: String,
			async: Boolean,
			defer: Boolean,
			type: String,
			charset: String
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
	.scripts {

	}
</style>
