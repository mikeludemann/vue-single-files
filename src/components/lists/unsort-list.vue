<template lang="html">
	<ul class="list-unsort">
		<li v-for="(text, value) in lists" :value="text">
			{{ text }}
		</li>
	</ul>
</template>

<script lang="ts">
  export default  {
    name: 'unsortList',
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
  .unsort-list {
		&> li {
			list-style: none;
		}
  }
</style>
