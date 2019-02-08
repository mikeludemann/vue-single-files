<template lang="html">
	<div class="tooltip">
		<div class="tooltip-text">
			{{this.defaulttext}}
		</div>
		<div :class="['tooltip-text-' + position]">
			{{this.tooltipstext}}
		</div>
  </div>
</template>

<script lang="ts">
	export default {
	name: 'tooltips',
	props: {
      defaulttext: String,
      tooltipstext: String,
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
	//colors
$grayDark: #555;
$white: #fff;

.tooltip {
	position: relative;
	margin: 10px auto;
	display: block;
	min-width: 25px;
	min-height: 25px;
	.tooltip-text-top {
		visibility: hidden;
		min-width: 25px;;
		background-color: $grayDark;
		color: $white;
		text-align: center;
		//Instead of the line below you could use @include border-radius($radius, $vertical-radius)
		border-radius: 5px;
		padding: 5px;
		position: absolute;
		z-index: 1;
		bottom: 100%;
		left: 45%;
		margin-left: 10px;
		opacity: 0;
		//Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
		transition: opacity 0.3s;
	}
	.tooltip-text-top::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-top: 0;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: $grayDark transparent transparent transparent;
		//Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
		transform: rotate(0deg);
	}
	.tooltip-text-bottom {
		visibility: hidden;
		min-width: 25px;;
		background-color: $grayDark;
		color: $white;
		text-align: center;
		//Instead of the line below you could use @include border-radius($radius, $vertical-radius)
		border-radius: 5px;
		padding: 5px;
		position: absolute;
		z-index: 1;
		top: 170%;
		left: 45%;
		margin-left: 10px;
		opacity: 0;
		//Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
		transition: opacity 0.3s;
	}
	.tooltip-text-bottom::after {
		content: "";
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-top: 0;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: $grayDark transparent transparent transparent;
		//Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
		transform: rotate(180deg);
	}
	.tooltip-text-left {
		visibility: hidden;
		min-width: 25px;;
		background-color: $grayDark;
		color: $white;
		text-align: center;
		//Instead of the line below you could use @include border-radius($radius, $vertical-radius)
		border-radius: 5px;
		padding: 5px;
		position: absolute;
		z-index: 1;
		top: 0;
		left: 38%;
		margin-left: 10px;
		opacity: 0;
		//Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
		transition: opacity 0.3s;
	}
	.tooltip-text-left::after {
		content: "";
		position: absolute;
		top: 50%;
		right: -3.5%;
		margin-top: -5px;
		margin-right: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: $grayDark transparent transparent transparent;
		//Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
		transform: rotate(-90deg);
	}
	.tooltip-text-right {
		visibility: hidden;
		min-width: 25px;;
		background-color: $grayDark;
		color: $white;
		text-align: center;
		//Instead of the line below you could use @include border-radius($radius, $vertical-radius)
		border-radius: 5px;
		padding: 5px;
		position: absolute;
		z-index: 1;
		top: 0;
		right: 38%;
		margin-left: 10px;
		opacity: 0;
		//Instead of the line below you could use @include transition($transition-1, $transition-2, $transition-3, $transition-4, $transition-5, $transition-6, $transition-7, $transition-8, $transition-9, $transition-10)
		transition: opacity 0.3s;
	}
	.tooltip-text-right::after {
		content: "";
		position: absolute;
		top: 50%;
		left: -7.5%;
		margin-top: -5px;
		margin-right: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: $grayDark transparent transparent transparent;
		//Instead of the line below you could use @include transform($scale, $rotate, $transx, $transy, $skewx, $skewy, $originx, $originy)
		transform: rotate(90deg);
	}
	&:hover {
		.tooltip-text-right {
			visibility: visible;
			opacity: 1;
		}
		.tooltip-text-top {
			visibility: visible;
			opacity: 1;
		}
		.tooltip-text-left {
			visibility: visible;
			opacity: 1;
		}
		.tooltip-text-bottom {
			visibility: visible;
			opacity: 1;
		}
	}
}
</style>
