<template lang="html">
	<iframe
		v-bind:class="classname"
		v-bind:src="src"
		v-bind:width="width"
		v-bind:height="height"
		v-bind:srcdoc="srcdoc"
		v-bind:sandbox="sandbox"
	>
	</iframe>
</template>

<script lang="ts">
	export default {
	name: 'IFrame',
	props: {
      classname: String,
      src: String,
      width: String,
      height: String,
      srcdoc: String,
      sandbox: String
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
	.iframe {

	}
</style>
