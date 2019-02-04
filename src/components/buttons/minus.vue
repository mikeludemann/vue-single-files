<template lang="html">
  <div v-on:click="count--">{{ count }}</div>
</template>

<script lang="js">
	export default {
		name: 'minus',
		props: [],
		mounted() {

		},
		data() {
			return {
        count: 0
			}
		},
		methods: {

		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.minus {

	}
</style>
