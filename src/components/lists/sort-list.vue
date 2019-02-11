<template lang="html">
	<ol class="list-sort">
		<li v-for="(text, value) in lists" :value="text">
			{{ text }}
		</li>
	</ol>
</template>

<script lang="ts">
	export default {
		name: 'sortList',
		props: ['lists'],
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
	.list-sort {
		&> li {
			list-style: none;
		}
	}
</style>
