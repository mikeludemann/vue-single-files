<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <avatar email="test@web.de" firstname="test" lastname="test" size="50" id="av" classname="av-cl" secondname="tttt" textsize="14" color="white" bgcolor="black" overcolor="green" borderradius="50"/>
    <minus></minus>
    <plus></plus>
    <qrcode width="150" height="200" format="UTF-8" correction="Q" data="google.de"></qrcode>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import avatar from '@/components/avatar/avatar.vue';
import minus from '@/components/buttons/minus.vue';
import plus from '@/components/buttons/plus.vue';
import qrcode from '@/components/other/qrcode.vue';

@Component({
  components: {
    HelloWorld,
    avatar,
    minus,
    plus,
    qrcode
  },
})
export default class Home extends Vue {}
</script>
