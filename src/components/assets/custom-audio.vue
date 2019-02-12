<template lang="html">
	<audio controls>
		<source v-bind:src="url" v-bind:type="type">
			{{defaulttext}}
	</audio>
</template>

<script lang="ts">
	export default {
		name: 'customAudio',
		props: {
			url: String,
			type: String,
			defaulttext: String
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
	.custom-audio {

	}
</style>
