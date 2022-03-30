import { getWechatShare } from '@utils/wx'
import { ref, inject, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export default (): { isPlayMusic: Ref<boolean>; onSwitch: () => void } => {
  const audio = inject<any>('audio')
  const isPlayMusic = ref(true)

  const onTouchStartPlay = () => {
    audio.value.play()
  }

  const onSwitch = () => {
    // 如果已经开始播放,
    if (isPlayMusic.value) {
      audio.value.pause()
      window.removeEventListener('touchstart', onTouchStartPlay, true)
      isPlayMusic.value = false
      return
    }
    onTouchStartPlay()
    isPlayMusic.value = true
  }

  onMounted(() => {
    window.addEventListener('touchstart', onTouchStartPlay, true)
    getWechatShare(() => {
      onTouchStartPlay()
    })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('touchstart', onTouchStartPlay, true)
  })

  onUnmounted(() => {
    window.removeEventListener('touchstart', onTouchStartPlay, true)
  })

  return { isPlayMusic, onSwitch }
}
