<template lang="html">
	<transition>
    <div class="main-container">
      <div :id="id" class="main-container">
        <img :src="url" :alt="alttext">
      </div>
      <div id="modal-image-container" class="modal">
        <span id="close" class="modal-close">&times;</span>
        <img class="modal-content">
        <div class="modal-text"></div>
      </div>
    </div>
	</transition>
</template>

<script lang="js">
	export default {
		name: 'modalImage',
		props: {
			id: String,
			url: String,
			alttext: String
		},
		mounted() {
      this.main();
		},
		data() {
			return {

			}
		},
		methods: {
      main: function() {
        
        let modal = document.getElementById('modal-image-container');
        let body = document.getElementsByTagName('body')[0];

        let container = document.getElementById(this.id);
        let close = document.getElementById("close");

        container.onclick = function(){

          modal.style.display = "block";
          body.style.overflow = 'hidden';
          modal.children[1].src = this.children[0].src;
          modal.children[2].innerHTML = this.children[0].alt;

        }

        close.onclick = function() { 

          modal.style.display = "none";
          body.style.overflow = '';

        }

        var dw = document || window;

        dw.onclick = function (event) {

          if (event.target == modal) {

            modal.style.display = "none";
            body.style.overflow = '';

          }

        }

      }
		},
		computed: {

		}
}
</script>

<style scoped lang="scss">

  $black: rgb(0,0,0);
  $blackOpacity: rgba(0,0,0,0.9);
  $text: #fff;
  $closing: #fff;
  $transitionColor: #bbb;

  .main-container {
    cursor: pointer;
    transition: 0.3s;

    &:hover > img {
      opacity: 0.9;
    }

  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    margin: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: $black;
    background-color: $blackOpacity;
  }

  .modal-content {
    margin: auto;
    display: block;
    top: 50%;
    width: 75%;
    max-width: 700px;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  .modal-text {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: $text;
    padding: 20px 0;
    height: 150px;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .modal-close {
    position: absolute;
    top: 10px;
    right: 15px;
    color: $closing;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
      color: $transitionColor;
      text-decoration: none;
      cursor: pointer;
    }
    &:focus {
      color: $transitionColor;
      text-decoration: none;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 768px) {
    .modal-content {
      width: 100%;
    }
  }

  img {
    width: 100%;
  }
</style>
