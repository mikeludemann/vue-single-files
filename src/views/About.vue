<template>
	<div class="about">
		<h1>This is an about page</h1>
		<div id="myNav" class="sidenavigation">
			<sidenavigation v-for="item in customList" v-bind:list="item" v-bind:key="item.id">
			</sidenavigation>
		</div>
		<pagination id="elements" elements="['a','b','c','d','e','f']" options="pageSize: 3, showPrevious: false, showNext: false"></pagination>
		<button type="button" class="btn" @click="showModal">
			Open Modal!
		</button>
		<modal v-if="isModalVisible" @close="closeModal">
			<h2 slot="header">My header</h2>
			<div slot="body">this is the body</div>
			<div slot="footer">Copyright</div>
		</modal>
		<modalImage url="https://images.unsplash.com/photo-1438175559191-5b41197d0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alttext="Snow Mountain" id="test"></modalImage>
		<img src="@/assets/logo.png"/>
		<portfolio year="2018" name="Testament" headline="Snow Mountain" :url="require('../assets/logo.png')" alttext="Mountains" text="Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no."></portfolio>
	</div>
</template>

<script>
	import modal from '@/components/modal/modal.vue';
	import modalImage from '@/components/modal-image/modal-image.vue';
	import portfolio from '@/components/portfolio/portfolio.vue';
	import sidenavigation from '@/components/sidenavigation/sidenavigation.vue';
	import pagination from '@/components/plugins/pagination.vue';

	export default {
		name: 'about',
		components: {
			modal,
			modalImage,
			portfolio,
			sidenavigation,
			pagination,
		},
		data () {
			return {
				isModalVisible: false,
				customList: [
					{ id: 1, text: 'Hello', url: '#' },
					{ id: 2, text: 'Morning', url: '#' },
					{ id: 3, text: 'Evening', url: '#' }
				]
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
