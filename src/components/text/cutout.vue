<template lang="html">
  <div class="cutout-text" :style="cutout">
    {{this.text}}
  </div>
</template>

<script lang="js">
	export default {
		name: 'cutout',
		props: {
			text: String,
			bgcolor: String,
			color: String,
			mode: String,
			size: String
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
			cutout: function () {
				return {
					backgroundColor: this.bgcolor,
					color: this.color,
					fontSize: this.size + "px",
					margin: "0 auto",
					textAlign: "center",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					mixBlendMode: this.mode
				};
      }
		}
}
</script>

<style scoped lang="scss">
	.cutout {

	}
</style>
