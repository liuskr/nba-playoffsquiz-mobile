<template>
  <div ref="lavContainerRef" :style="style"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, toRefs, computed, onUnmounted } from 'vue'
import lottie from 'lottie-web'

interface propsType {
  width?: string | number
  height?: string | number
  loop?: boolean
  path: string
  autoplay?: boolean
}
const props = withDefaults(defineProps<propsType>(), {
  loop: false,
  autoplay: false,
  width: '100%',
  height: '100%'
})

const emit = defineEmits(['anime'])
const { width, height, loop, path, autoplay } = toRefs(props)

const style = computed(() => ({
  width: width ? `${width.value}px` : '100%',
  height: height ? `${height.value}px` : '100%'
}))

const lavContainerRef = ref()
const anim = ref()

onMounted(() => {
  anim.value = lottie.loadAnimation({
    container: lavContainerRef.value,
    renderer: 'svg', // 渲染方式:svg、canvas
    loop: loop.value, //循环播放，默认：false
    autoplay: autoplay.value, //自动播放 ，默认true
    path: path.value // json 路径
  })
  // anim.value.useHardwareAcceleration()
  emit('anime', anim.value)
})

onUnmounted(() => {
  anim.value && anim.value.destroy()
})
</script>
