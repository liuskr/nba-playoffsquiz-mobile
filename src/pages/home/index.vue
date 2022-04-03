<script lang="ts" setup>
import { ref } from 'vue'
import Login from '@components/Login/index.vue'
import useMusicControl from './music'

const { isPlayMusic, onSwitch } = useMusicControl()
const show = ref(false)
const prizeShow = ref(false)
const guideShow = ref(false)
</script>

<template>
  <div class="container">
    <div class="rulse" @click="show = true"></div>
    <!-- 音乐 -->
    <div class="misic" :class="{ musicAnimation: isPlayMusic }" @click="onSwitch"></div>
    <!-- 内容 -->
    <main class="center">
      <div class="mainbody">
        <router-link to="/guessing" replace class="mainbody-item">
          <img src="@assets/images/home_1.png" alt="" />
        </router-link>
        <router-link to="/rankinglist" replace class="mainbody-item">
          <img src="@assets/images/home_2.png" alt="" />
        </router-link>
        <div class="mainbody-item" @click="guideShow = true">
          <img src="@assets/images/home_3.png" alt="" />
        </div>
        <div class="mainbody-item" @click="prizeShow = true">
          <img src="@assets/images/home_4.png" alt="" />
        </div>
      </div>
    </main>
    <!--  -->
    <!-- 用户信息 -->
    <footer class="footer">
      <div class="user">
        <div class="user-avatar">
          <van-image round width="1.21rem" height="1.22rem" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </div>
      </div>
      <div class="name">哈哈哈哈哈</div>
      <div class="ranking">1232</div>
      <div class="points">1223</div>
    </footer>
    <!-- 规则 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <h3 class="block-title">活动规则</h3>
          <div class="block-rulse">
            <p>1.NBA微信小程序会员、APP会员直接参与竞猜活动；新用户通过手机验证注册后参与竞猜活动。</p>
            <p>2.参与竞猜用户，全量预测季后赛和总决赛共<span>15</span>个系列赛对阵总比分。</p>
            <p>3.参与竞猜用户，须在东西部首轮比赛最先开始的<span>G3</span>比赛开始前完成全量比分预测。</p>
            <p>4.此次竞猜活动，以比赛胜负结果来判定竞猜结果，获得奖励积分；猜中比分获得附加奖励积分。猜错不扣分。</p>
            <p>5.积分规则</p>
            <div class="block-rulse-secondary">
              <p>季后赛首轮比赛竞猜胜负结果，竞猜正确一场获得<span>200</span>积分；全部竞猜正确，获得<span>1600</span>积分</p>
              <p>季后赛第二轮比赛竞猜胜负结果，竞猜正确一场获得<span>400</span>积分；全部竞猜正确，获得<span>1600</span>积分</p>
              <p>季后赛分区决赛竞猜胜负结果，竞猜正确一场获得<span>800</span>积分；全部竞猜正确，获得<span>1600</span>0积分</p>
              <p>总决赛竞猜胜负结果，竞猜正确获得<span>1600</span>积分</p>
              <p>15个系列赛，每个系列赛总比分竞猜正确，获得<span>200</span>积分；全部竞猜正确，获得<span>3000</span>积分</p>
            </div>
            <p>6.该积分仅限用于竞猜比分使用，且用户所获得的竞猜奖励积分也仅限于竞猜活动积分排名。</p>
          </div>
          <div class="close" @click="show = false"></div>
        </div>
      </div>
    </van-overlay>
    <!-- 奖品 -->
    <van-overlay :show="prizeShow" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="wrapper-prize">
          <img src="@assets/images/prize.png" alt="" />
          <div class="close prize-close" @click="prizeShow = false"></div>
        </div>
      </div>
    </van-overlay>
    <!-- 活动指南 -->
    <van-overlay :show="guideShow" :lock-scroll="false" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="wrapper-guide">
          <h3 class="guide-title">竞猜指南</h3>
          <div class="guide-center">
            <img src="@assets/images/guide/1.png" alt="" />
            <img src="@assets/images/guide/2.png" alt="" />
            <img src="@assets/images/guide/3.png" alt="" />
            <img src="@assets/images/guide/4.png" alt="" />
            <img src="@assets/images/guide/5.png" alt="" />
            <img src="@assets/images/guide/6.png" alt="" />
            <img src="@assets/images/guide/7.png" alt="" />
          </div>
          <div class="close guide-close" @click="guideShow = false"></div>
        </div>
      </div>
    </van-overlay>
    <Login />
  </div>
</template>

<script lang="ts">
import { Image as VanImage, Overlay } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPopup',
  components: {
    [VanImage.name]: VanImage,
    [Overlay.name]: Overlay
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
