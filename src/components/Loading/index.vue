<template>
  <van-config-provider :theme-vars="{ overlayBackgroundColor: 'rgba(200, 16, 46, 1)' }">
    <van-overlay :show="show" style="z-index: 99">
      <div class="loading_bg">
        <div class="center">
          <div class="logo">
            <img src="https://nba75th.ihyx.net/loading/loading_logo.png" alt="" />
          </div>
          <Lottie class="progress" path="/progress.json" autoplay width="260" height="60" />
          <div class="percentage">{{ progressTime }}%</div>
        </div>
      </div>
    </van-overlay>
  </van-config-provider>
</template>

<script lang="ts">
import { preloadImg } from '@utils'
import { Overlay, ConfigProvider } from 'vant'
import { defineComponent, ref, onMounted } from 'vue'
import Lottie from '../Lottie/index.vue'
export default defineComponent({
  name: 'LoginPopup',
  components: {
    [Overlay.name]: Overlay,
    [ConfigProvider.name]: ConfigProvider,
    Lottie
  },
  setup() {
    const show = ref(false)
    const progressTime = ref(0)

    const onProgressTime = (): void => {
      const clearInt = setInterval(() => {
        progressTime.value++
        if (progressTime.value === 100) {
          clearInterval(clearInt)
        }
      }, 45)
    }
    onMounted(() => {
      onProgressTime()

      if (!sessionStorage.getItem('loading')) {
        preloadImg('https://nba75th.ihyx.net/loading/loading_logo.png')
        show.value = true
      }

      setTimeout(() => {
        show.value = false
        sessionStorage.setItem('loading', '1')
      }, 6300)
    })

    return { show, progressTime }
  }
})
</script>

<style scoped lang="scss">
.loading_bg {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   filter: blur(4px);
  //   z-index: -1;
  //   background: url('https://nba75th-1307342770.cos.ap-guangzhou.myqcloud.com/loading/home_loading_bg.jpg') 0 / cover fixed;
  //   transform: scale(1);
  //   -webkit-transform: scale(1);
  // }
  .center {
    position: relative;
    .logo {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      img {
        animation: logoOpacity 2s ease-in-out alternate infinite;
      }
    }
    // .progress {
    //   position: absolute;
    //   top: 160px;
    //   left: -80%;
    // }
    .percentage {
      position: absolute;
      top: 200px;
      left: 44%;
      font-size: 26px;
    }
  }
}

// @keyframes mymove {
//   0% {
//     opacity: 0.9;
//   }
//   33% {
//     opacity: 0.7;
//   }
//   75% {
//     opacity: 0.2;
//   }
//   100% {
//     opacity: 1;
//   }
// }

@keyframes logoOpacity {
  0% {
    opacity: 95%;
    filter: brightness(0.66);
  }
  45% {
    opacity: 100%;
    filter: brightness(1);
  }
  55% {
    opacity: 100%;
    filter: brightness(1);
  }
  100% {
    opacity: 95%;
    filter: brightness(0.66);
  }
}
</style>
