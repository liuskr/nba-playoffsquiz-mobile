<template>
  <!-- 赛况 -->
  <van-overlay :show="isShow" class="outs-overlay">
    <div class="outs-wrapper">
      <div class="content">
        <img src="../../assets/images/outs.jpg" alt="" class="bg" />
        <div class="list"><TeamView /></div>
      </div>
      <van-icon class="wrapper_content_close" name="cross" color="#fff" size="24" @click.stop="onClose" />
    </div>
  </van-overlay>
</template>

<script lang="ts" setup>
import TeamView from './team/index.vue'

const emit = defineEmits<{
  (e: 'emit'): void
}>()
// 关闭海报
const onClose = (): void => {
  emit('update:isShow', false)
}
</script>

<script lang="ts">
import { Overlay, Icon } from 'vant'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PosterPopup',
  components: {
    [Overlay.name]: Overlay,
    [Icon.name]: Icon
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:isShow'],
  // setup(props, { emit }) {
  //   // 关闭海报
  //   const onClose = (): void => {
  //     emit('update:isShow', false)
  //   }
  //   return {
  //     onClose
  //   }
  // }
})
</script>

<style scoped lang="scss">
.outs-overlay {
  transform: scale(1) !important;
}
.outs-wrapper {
  text-align: center;

  .content {
    position: relative;
    margin: 60px 0;
    padding: 0 30px;

    .bg {
      width: 100%;
      text-align: center;
    }

    .list {
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 30px;
      box-sizing: border-box;
      width: 100%;
      height: 100%;

      .team_container {
        transform: scale(0.71) !important;
        margin-top: -80px;
        margin-left: -80px;
      }
    }
  }
}
</style>
