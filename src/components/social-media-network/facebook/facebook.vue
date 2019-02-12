<template lang="html">
	<div id="facebook--container">
		<div id="fb-root"></div>
		<div class="fb-post" data-show-text="true"></div>
	</div>
</template>

<script lang="js">
	export default {
		name: 'facebook',
		props: {
			url: String
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

// Information

/**
 * Facebook SDK - Setting this code in the "<head></head>" - Block
 * 
 * <script>
 * (function(d, s, id) {
 * var js, fjs = d.getElementsByTagName(s)[0];
 * if (d.getElementById(id)) return;
 * js = d.createElement(s); js.id = id;
 * js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.1';
 * fjs.parentNode.insertBefore(js, fjs);
 * }(document, 'script', 'facebook-jssdk'));
 * /script>
 */
</script>

<style scoped lang="scss">
	.facebook {

	}
</style>