<template lang="html">
  <transition>
    <div id="modal">
      <div class="modal--background" @click="close">
        <div class="modal--container">
          <div class="modal--header">
            <slot name="header">
              Default header
            </slot>
            <div class="modal--close" @click="close">
              x
            </div>
          </div>
          <div class="modal--body">
            <slot name="body">
              Default body
            </slot>
          </div>
          <div class="modal--footer">
            <slot name="footer">
              Default footer
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="js">
	export default {
		name: 'modal',
		props: [],
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {
      close() {
        this.$emit('close');
      }
		},
		computed: {

		}
}
</script>

<style scoped>
.modal--background {
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: block;
	transition: opacity .3s ease;
}

.modal--container {
	min-width: 50%;
	min-height: 50%;
	margin: 0px auto;
	padding: 20px;
	background-color: #fff;
	border-radius: 0px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all .3s ease;
	font-family: Helvetica, Arial, sans-serif;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.modal--header {
	top: 0;
}

.modal--footer {
	bottom: 0;
}

.modal--body {
	margin: 20px 0;
}

.modal--close {
	position: absolute;
	top: 5px;
	right: 5px;
	border: 0.5px solid #000;
	border-radius: 25px;
	padding: 2.5px 3px 3.5px 3px;
	margin: 0px;
	width: 12px;
	font-size: 10px;
}

</style>
