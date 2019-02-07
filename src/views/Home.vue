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
		<mmenu id="menu" options='{ "iconPanels": true }'>
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
		<!--<slick element="slider" options="">
			<div>your content 1</div>
			<div>your content 2</div>
			<div>your content 3</div>
		</slick>
		-->
		<img alt="Vue logo" src="../assets/logo.png">
		<div>
			<img alt="Vue logo" src="../assets/logo.png">
		</div>
		<simpleText content="Hello"></simpleText>
		<optionList :options='{ "1": "Eat", "2": "Sleep", "3": "Sport" }'></optionList>
		<!--<scrollToTop></scrollToTop>-->
		<scrollToElement timer="1000" element="#av"></scrollToElement>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import avatar from '@/components/avatar/avatar.vue';
import qrcode from '@/components/other/qrcode.vue';
import mmenu from '@/components/plugins/mmenu.vue';
import slick from '@/components/plugins/slick-slider.vue';
import scrollToTop from '@/components/scrolling/scrollToTop.vue'; 
import scrollToElement from '@/components/scrolling/scrollToElement.vue'; 
import optionList from '@/components/selection/optionList.vue'; 
import cutout from '@/components/text/cutout.vue'; 
import simpleText from '@/components/text/simpleText.vue'; 

@Component({
	components: {
		HelloWorld,
		avatar,
		qrcode,
		mmenu,
		slick,
		scrollToTop,
		scrollToElement,
		optionList,
		cutout,
		simpleText,
	},
})
export default class Home extends Vue {}
</script>
