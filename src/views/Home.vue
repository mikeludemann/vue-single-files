<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
		<avatar email="test@web.de" firstname="test" lastname="test" size="50" id="av" classname="av-cl" secondname="tttt" textsize="14" color="white" bgcolor="black" overcolor="green" borderradius="50"/>
		<qrcode width=150 height=200 format="UTF-8" correction="Q" data="google.de"></qrcode>
    <div class="page">
      <div class="header">
        <a href="#menu">Demo</a>
      </div>
    </div>
		<mmenu version="7.2.3" id="menu" options='{ "iconPanels": true }'>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/us">About us</a>
					<ul>
						<li><a href="/us/history">History</a></li>
						<li><a href="/us/team">The team</a></li>
						<li><a href="/us/address">Our address</a></li>
					</ul>
				</li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</mmenu>
    <slick element="slider" version="1.9.0" options="">
      <div>your content 1</div>
      <div>your content 2</div>
      <div>your content 3</div>
    </slick>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import avatar from '@/components/avatar/avatar.vue';
import qrcode from '@/components/other/qrcode.vue';
import mmenu from '@/components/plugins/mmenu.vue';
import slick from '@/components/plugins/slick-slider.vue';

@Component({
	components: {
		HelloWorld,
		avatar,
    qrcode,
    mmenu,
    slick
	},
})
export default class Home extends Vue {}
</script>
