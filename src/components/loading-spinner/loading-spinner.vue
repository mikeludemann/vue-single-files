<template lang="html">
	<div :id="id" class="main" :style="main">
		<div :class="classname" :style="defaultelement"></div>
		<div class="textcontent">{{text}}</div>
	</div>
</template>

<script lang="js">
	export default {
		name: 'loadingSpinner',
		props: {
			id: {
				type: String,
				required: true
			},
			classname: {
				type: String,
				required: false
			},
			text: {
				type: String,
				required: false
			},
			size: {
				type: String,
				required: true
			},
			bgcolor: {
				type: String,
				required: true
			},
			color: {
				type: String,
				required: true
			},
			speed: {
				type: String,
				required: true
			}
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

				var style = document.createElement('style');
				style.type = 'text/css';

				let keyframes =
					`
				@-webkit-keyframes spin {
					0% { -webkit-transform: rotate(0deg); }
					100% { -webkit-transform: rotate(360deg); }
				}

				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
				`
				style.innerHTML = keyframes;
				document.getElementsByTagName('head')[0].appendChild(style);

			}
		},
		computed: {
			main: function () {
				return {
					marginTop: (-1 * (this.size / 2)) + 'px',
					marginLeft: (-1 * (this.size / 2)) + 'px'
				};
			},
			defaultelement: function () {
				return {
					width: this.size + 'px',
					height: this.size + 'px',
					border: '5px solid ' + this.bgcolor,
					borderRadius: '50%',
					borderTop: '5px solid ' + this.color,
					webkitAnimation: 'spin ' + this.speed + ' linear infinite',
					animation: 'spin ' + this.speed + ' linear infinite'
				};
			}
		}
}
</script>

<style scoped>
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
	}
	.textcontent {
		padding-top: 10px;
		text-align: center;
		margin-left: -5px;
	}
	@-webkit-keyframes spin-data-v-xxxxxxxx {
		0% { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin-data-v-xxxxxxxx {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
  }
</style>
