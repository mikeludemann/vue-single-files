<template lang="html">
	<div>{{ getLanguage }}</div>
</template>

<script lang="ts">
	export default {
		name: 'language',
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
			getLanguage: function () {
				return navigator.language;
			}
		}
}
</script>

<style scoped lang="scss">
	.language {

	}
</style>
