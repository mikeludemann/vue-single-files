<template lang="html">
	<a id="tweets"> Tweets by {{this.twitterid}} </a>
</template>

<script lang="js">
	export default {
		name: 'twitter',
		props: {
			twitterid: String,
			format: String
		},
		mounted() {
			this.insertExternalSource();
		},
		data() {
			return {

			}
		},
		methods: {
			insertExternalSource: function () {

				var js = document.createElement("script");
				js.setAttribute("src", "https://platform.twitter.com/widgets.js");
				js.setAttribute("async", "true");
				js.setAttribute("charset", "utf-8");
				document.getElementsByTagName("head").item(0).appendChild(js);

				var tweet = document.getElementById("tweets");
				tweet.setAttribute("href", "http://twitter.com/" + this.twitterid);
				tweet.setAttribute("class", "twitter-" + this.format);

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	.twitter {

	}
</style>
