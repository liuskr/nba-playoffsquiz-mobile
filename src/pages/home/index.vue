<template>
  <div class="container">
    <div class="rulse" @click="status.show = true"></div>
    <!-- 音乐 -->
    <div class="misic" :class="{ musicAnimation: isPlayMusic }" @click="onSwitch"></div>
    <!-- 内容 -->
    <main class="center">
      <div class="mainbody">
        <div class="mainbody-item" :class="{ delayanimat: isLoading }" @click="onJump(0)">
          <img src="/images/home_1.png" alt="" />
        </div>
        <div replace class="mainbody-item" :class="{ delayanimat: isLoading }" @click="onJump(1)">
          <img src="/images/home_2.png" alt="" />
        </div>
        <div class="mainbody-item" :class="{ delayanimat: isLoading }" @click="status.prizeShow = true">
          <img src="/images/home_4.png" alt="" />
        </div>
        <div class="mainbody-item" :class="{ delayanimat: isLoading }" @click="status.guideShow = true">
          <img src="/images/home_3.png" alt="" />
        </div>
      </div>
    </main>
    <!--  -->
    <!-- 用户信息 -->
    <footer class="footer">
      <div class="user">
        <div class="user-avatar">
          <van-image round width="1.21rem" height="1.22rem" src="https://nba75th.ihyx.net/assets/my_avatar.08bff5b0.png" />
        </div>
      </div>
      <div class="name">{{ state.userInfo.Nickname || '未登录' }}</div>
      <div class="ranking">{{ state.userInfo.Rank || '???' }}</div>
      <div class="points">{{ state.userInfo.Nickname ? state.userInfo.Score : '???' }}</div>
    </footer>
    <!-- 规则 -->
    <van-overlay :show="status.show" @click="status.show = false">
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
          <div class="close" @click="status.show = false"></div>
        </div>
      </div>
    </van-overlay>
    <!-- 奖品 -->
    <van-overlay :show="status.prizeShow" @click="status.show = false">
      <div class="wrapper" @click.stop>
        <div class="wrapper-prize">
          <img class="wrapper-prize-share" src="@assets/images/share.png" alt="" @click="status.posterShow = true" />
          <img src="/images/prize.png" alt="" />
          <div class="close prize-close" @click="status.prizeShow = false"></div>
        </div>
      </div>
    </van-overlay>
    <!-- 活动指南 -->
    <van-overlay :show="status.guideShow" :lock-scroll="false" @click="status.show = false">
      <div class="wrapper" @click.stop>
        <div class="wrapper-guide">
          <h3 class="guide-title">竞猜指南</h3>
          <div class="guide-center">
            <img src="/images/guide_1.png" alt="" />
            <img src="/images/guide_2.png" alt="" />
            <img src="/images/guide_3.png" alt="" />
            <img src="/images/guide_4.png" alt="" />
            <img src="/images/guide_5.png" alt="" />
            <img src="/images/guide_6.png" alt="" />
            <img src="/images/guide_7.png" alt="" />
          </div>
          <div class="close guide-close" @click="status.guideShow = false"></div>
        </div>
      </div>
    </van-overlay>
    <Login v-model:is-login="isLogin" />
    <Guide />
    <Loading />
    <Poster v-model:isShowPoster="status.posterShow" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import Login from './components/Login/index.vue'
import Guide from '@components/Guide/index.vue'
import Loading from '@components/Loading/index.vue'
import useMusicControl from './music'
import { useRouter } from 'vue-router'
import { localStorageGet } from '@utils/auth'
import { getUserInfo } from '@apis'
import Poster from '@components/Poster/index.vue'
// import { getSignData } from '@utils/crypto'

const { isPlayMusic, onSwitch } = useMusicControl()
const router = useRouter()

const status = reactive({
  show: false,
  prizeShow: false,
  guideShow: false,
  posterShow: false
})

const isLogin = ref(false)
const isLoading = ref(false)

const onJump = (idx: number) => {
  const routerList: string[] = ['/guessing', '/rankinglist']

  if (!localStorageGet('token')) {
    isLogin.value = true
    return
  }

  router.replace(routerList[idx])
}

const state = reactive({
  userInfo: {
    Nickname: null,
    Rank: null,
    Score: 0
  }
})

onMounted(async () => {
  // 是否第一次进入
  if (!sessionStorage.getItem('loading')) {
    isLoading.value = true
  }

  // 获取用户信息
  getUserInfo()
    .then(({ data }) => {
      state.userInfo = data.User
      state.userInfo.Rank = data.Rank
    })
    .catch(() => {
      state.userInfo = {
        Nickname: null,
        Rank: null,
        Score: 0
      }
    })
})
</script>
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
