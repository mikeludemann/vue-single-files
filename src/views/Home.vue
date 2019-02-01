<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <avatar email="test@web.de" firstname="test" lastname="test" size="50" id="av" classname="av-cl" secondname="tttt" textsize="14" color="white" bgcolor="black" overcolor="green" borderradius="50"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import avatar from '@/components/avatar/avatar.vue';

@Component({
  components: {
    HelloWorld,
    avatar,
  },
})
export default class Home extends Vue {}
</script>
