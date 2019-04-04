<template lang="html">
	<div class="popup">
		<div class="popup-text">{{this.defaulttext}}</div>
		<div :class="['popup-text-' + position]">{{this.popuptext}}</div>
	</div>
</template>

<script lang="js">
	export default {
		name: 'popup',
		props: {
			defaulttext: {
				type: String,
				required: true
			},
			popuptext: {
				type: String,
				required: true
			},
			position: {
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

				var popup = document.getElementsByClassName("popup");

				for (var i = 0; i < popup.length; i++) {

					popup[i].addEventListener("click", togglePopup(i));

				}

				function togglePopup(i) {

					return function () {

						if (popup[i].children[1].setAttribute("style", "display: none")) {

							popup[i].children[1].setAttribute("style", "display: block");

						} else {

							popup[i].children[1].setAttribute("style", "display: none");

						}

					};

				}

			}
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">
  $grayApprox: #555;
  $white: #fff;

  .popup {
    position: relative;
    margin: 100px auto;
    display: block;
    width: 125px;
    height: 100px;
    .popup-text-top {
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
    .popup-text-top::after {
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
    .popup-text-bottom {
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
    .popup-text-bottom::after {
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
    .popup-text-left {
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
    .popup-text-left::after {
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
    .popup-text-right {
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
    .popup-text-right::after {
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
  }
</style>
