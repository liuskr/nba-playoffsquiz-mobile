<template>
  <audio ref="audio" src="https://nba75th.ihyx.net/video/music.mp3" class="audio" autoplay preload="auto" loop></audio>
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

export default defineComponent({
  name: 'App',
  setup() {
    const audio = ref(null)
    onMounted(() => {
      provide('audio', audio)
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
