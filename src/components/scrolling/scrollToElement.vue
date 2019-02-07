<template lang="html">
	<div id="elem">
		<div></div>
	</div>
</template>

<script lang="js">
	export default {
		name: 'scrollToElement',
		props: {
			element: String,
			timer: String
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

				var elem = document.querySelector(this.element);
				var speed = this.timer;

				function runScroll() {
					scrollTo(document.body, elem.offsetTop, speed);
				}

				var scrollme;

				scrollme = document.querySelector("#elem");
				scrollme.addEventListener("click", runScroll, false)

				function scrollTo(element, to, duration) {

					if (duration <= 0) return;

					var difference = to - element.scrollTop;
					var perTick = difference / duration * 10;

					setTimeout(function () {

						element.scrollTop = element.scrollTop + perTick;

						if (element.scrollTop == to) return;

						scrollTo(element, to, duration - 10);

					}, 10);

				}

				window.onscroll = function () { scrollFunction() };

				function scrollFunction() {

					if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

						document.getElementById("elem").style.display = "block";

					} else {

						document.getElementById("elem").style.display = "none";

					}

				}

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
	#elem {
		position: fixed;
		bottom: 2%;
		right: 5%;
		padding: 15px;
		background-color: #888;
		transition: all 1s ease-in-out;
		&> div {
			padding: 5px;
			border-top: 4px solid #fff;
			border-left: 4px solid #fff;
			transform: rotate(45deg) translate(15%, 15%);
			transition: all 1s ease-in-out;
		}
	}
</style>
