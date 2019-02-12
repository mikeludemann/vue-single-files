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
	</div>
</template>

<script>
	import modal from '@/components/modal/modal.vue';

	export default {
		name: 'about',
		components: {
			modal,
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
