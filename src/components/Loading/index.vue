<template>
  <van-config-provider :theme-vars="{ overlayBackgroundColor: '#333' }">
    <van-overlay :show="show" style="z-index: 99">
      <div class="loading_bg">
        <div class="center">
          <div class="center-text">loading...</div>
          <div class="percentage">
            <div class="line" :style="{ width: progressTime + '%' }"></div>
          </div>
        </div>
      </div>
    </van-overlay>
  </van-config-provider>
</template>

<script lang="ts">
import { Overlay, ConfigProvider } from 'vant'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'LoadingPopup',
  components: {
    [Overlay.name]: Overlay,
    [ConfigProvider.name]: ConfigProvider
  },
  setup() {
    const show = ref(false)
    const progressTime = ref(8)

    const onProgressTime = (): void => {
      const clearInt = setInterval(() => {
        progressTime.value++
        if (progressTime.value === 100) {
          clearInterval(clearInt)
        }
      }, 55)
    }
    onMounted(() => {
      onProgressTime()
      if (!sessionStorage.getItem('loading')) {
        show.value = true
      }

      setTimeout(() => {
        show.value = false
        sessionStorage.setItem('loading', '1')
      }, 6500)
    })

    return { show, progressTime }
  }
})
</script>

<style scoped lang="scss">
.loading_bg {
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/images/loading_bg.jpg') no-repeat;
  background-size: 100%;
  .center {
    position: absolute;
    top: 1040px;
    left: 22%;
    .percentage {
      width: 418px;
      height: 34px;
      border: 2px solid #45d400;
      border-radius: 17px;
      .line {
        position: relative;
        height: 100%;
        border-radius: 20px;
        background: linear-gradient(270deg, #45d400 0%, rgba(69, 212, 0, 0.25) 100%);

        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 2px;
          width: 30px;
          height: 30px;
          background: #45d400;
          box-shadow: -1px 2px 17px 1px rgba(0, 0, 0, 0.32);
          border-radius: 13px;
        }
      }
    }
    &-text {
      font-size: 30px;
      font-family: $font-nba;
      font-weight: bold;
      color: #45d400;
      text-align: center;
      margin: 10px 0;
    }
  }
  // background: rgba(255, 255, 255, 0.1);
}

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
