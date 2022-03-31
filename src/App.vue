<template>
  <audio ref="audio" class="audio" autoplay preload="auto" loop></audio>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="in-out">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else-if="!$route.meta.keepAlive" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, ref, provide, onMounted } from 'vue'
declare const WeixinJSBridge: any
declare const window: Window & { attachEvent: any }

export default defineComponent({
  name: 'App',
  setup() {
    const audio = ref(null)

    const handleFontSize = () => {
      WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
      WeixinJSBridge.on('menu:setfont', function () {
        WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
      })
    }

    // 禁止微信缩放字体
    const init = () => {
      if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
        handleFontSize()
      } else {
        if (window.addEventListener) {
          window.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
        } else if (window.attachEvent) {
          window.attachEvent('onWeixinJSBridgeReady', handleFontSize)
        }
      }
    }

    onMounted(() => {
      provide('audio', audio)
      init()
    })
    return {
      audio
    }
  }
})
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
}
</style>
