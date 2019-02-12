<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
		<avatar email="test@web.de" firstname="test" lastname="test" size="50" id="av" classname="av-cl" secondname="tttt" textsize="14" color="white" bgcolor="black" overcolor="green" borderradius="50"/>
		<qrcode width=150 height=200 format="UTF-8" correction="Q" data="google.de"></qrcode>
		<headline :level=1>hi</headline>
		<bold text="test"></bold>
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
		<div>
			<fwIcon icon="far fa-clock fa-5x"></fwIcon>
			<materialIcon icon="donut_small"></materialIcon>
		</div>
		<sourceList :sources='{ "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4": "video/mp4", "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp3": "video/mp3" }'></sourceList>
		<trackList :tracks='[ { url: "xxx.vtt", kind: "subtitles", srclang: "de", label: "German" }, { url: "yyy.vtt", kind: "subtitles", srclang: "en", label: "English" } ]'></trackList>
		<!--<loadingSpinner id="loader" classname="load" text="hi" size="50" color="#080" bgcolor="#888" speed="1s"></loadingSpinner>-->
		<sortList :lists='{ "1": "Hello", "2": "Morning", "3": "Evening" }'></sortList>
		<tooltips defaulttext="hi" tooltipstext="I am here" position="top"></tooltips>
		<optionList :options='{ "1": "Eat", "2": "Sleep", "3": "Sport" }'></optionList>
		<!--<scrollToTop></scrollToTop>-->
		<!--<scrollToElement timer="1000" element="#av"></scrollToElement>-->
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
import tooltips from '@/components/tooltips/tooltips.vue'; 
import symbols from '@/components/tags/symbols/symbols.vue'; 
import IFrame from '@/components/tags/iframe/iframe.vue'; 
import headline from '@/components/tags/headline/headline.vue'; 
import bold from '@/components/tags/formatter/bold.vue'; 
import sortList from '@/components/lists/sort-list.vue'; 
import loadingSpinner from '@/components/loading-spinner/loading-spinner.vue';
import legalForm from '@/components/forms/legal-form.vue';
import trackList from '@/components/assets/track-list.vue';
import sourceList from '@/components/assets/source-list.vue';
import fwIcon from '@/components/assets/icons/fw-icon.vue';
import materialIcon from '@/components/assets/icons/material-icon.vue';

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
		tooltips,
		symbols,
		IFrame,
		headline,
		bold,
		sortList,
		loadingSpinner,
		legalForm,
		trackList,
		sourceList,
		fwIcon,
		materialIcon
	},
})
export default class Home extends Vue {}
</script>
