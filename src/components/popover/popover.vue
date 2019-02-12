<template lang="html">
	<div class="popover">
		<div class="popover-text">
			{{this.defaulttext}}
		</div>
		<div :class="['popover-text-' + position]">
			{{this.popovertext}}
		</div>
	</div>
</template>

<script lang="js">
	export default {
		name: 'popover',
		props: {
			defaulttext: String,
			popovertext: String,
			position: String
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
</script>

<style scoped lang="scss">
	$grayApprox: #555;
	$white: #fff;

	.popover {
		position: relative;
		margin: 100px auto;
		display: block;
		width: 125px;
		height: 100px;
		.popover-text-top {
			width: 125px;
			background-color: $grayApprox;
			color: $white;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			bottom: 100%;
			left: 45%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}
		.popover-text-top::after {
			content: "";
			position: absolute;
			top: 100%;
			left: 50%;
			margin-top: 0;
			margin-left: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: $grayApprox transparent transparent transparent;
			transform: rotate(0deg);
		}
		.popover-text-bottom {
			width: 125px;
			background-color: $grayApprox;
			color: $white;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			top: 170%;
			left: 45%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}
		.popover-text-bottom::after {
			content: "";
			position: absolute;
			bottom: 100%;
			left: 50%;
			margin-top: 0;
			margin-left: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: $grayApprox transparent transparent transparent;
			transform: rotate(180deg);
		}
		.popover-text-left {
			width: 125px;
			background-color: $grayApprox;
			color: $white;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			top: 0;
			left: -70%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}
		.popover-text-left::after {
			content: "";
			position: absolute;
			top: 50%;
			right: -3.5%;
			margin-top: -5px;
			margin-right: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: $grayApprox transparent transparent transparent;
			transform: rotate(-90deg);
		}
		.popover-text-right {
			width: 125px;
			background-color: $grayApprox;
			color: $white;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			top: 0;
			right: -110%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}
		.popover-text-right::after {
			content: "";
			position: absolute;
			top: 50%;
			left: -7.5%;
			margin-top: -5px;
			margin-right: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: $grayApprox transparent transparent transparent;
			transform: rotate(90deg);
		}
		&:hover {
			.popover-text-right {
				visibility: visible;
				display: block;
			}
			.popover-text-top {
				visibility: visible;
				display: block;
			}
			.popover-text-left {
				visibility: visible;
				display: block;
			}
			.popover-text-bottom {
				visibility: visible;
				display: block;
			}
		}
	}
</style>
