<template>
  <!-- 海报 -->
  <van-overlay :show="isShowPoster">
    <div class="wrapper">
      <div class="wrapper_content">
        <van-icon class="wrapper_content_close" name="cross" color="#fff" size="24" @click.stop="onClose" />
        <img :src="url" alt="" />
        <div class="wrapper_content_btn">长按保存海报</div>
      </div>
    </div>
  </van-overlay>
</template>

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
    isShowPoster: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: '/images/prizesPoster.jpg'
    }
  },
  emits: ['update:isShowPoster'],
  setup(props, { emit }) {
    // 关闭海报
    const onClose = (): void => {
      emit('update:isShowPoster', false)
    }
    return {
      onClose
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  width: 750px;
  background: #79231a;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  &_content {
    width: 500px;
    height: 860px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    &_close {
      position: absolute;
      top: -60px;
      right: -50px;
    }
    &_btn {
      width: 476px;
      height: 89px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-weight: 500;
      border-radius: 45px 45px 45px 45px;
      color: #ebcd9a;
      margin-top: 10px;
    }
  }
}
</style>
