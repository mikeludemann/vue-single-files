<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button type="button" class="btn" @click="showModal">
			Open Modal!
		</button>
		<modal v-if="isModalVisible" @close="closeModal">
			<h2 slot="header">My header</h2>
			<div slot="body">this is the body</div>
			<div slot="footer">Copyright</div>
		</modal>
		<portfolio year="2018" name="Testament" headline="Snow Mountain" url="https://images.unsplash.com/photo-1488818138649-d2734488e6d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alttext="Mountains" text="Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no."></portfolio>
	</div>
</template>

<script>
	import modal from '@/components/modal/modal.vue';
	import portfolio from '@/components/portfolio/portfolio.vue';

	export default {
		name: 'about',
		components: {
			modal,
			portfolio,
		},
		data () {
			return {
				isModalVisible: false,
			};
		},
		methods: {
			showModal() {
				this.isModalVisible = true;
			},
			closeModal() {
				this.isModalVisible = false;
			}
		},
	};
</script>
