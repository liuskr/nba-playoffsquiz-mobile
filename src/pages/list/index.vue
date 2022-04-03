<template>
  <div class="container">
    <main class="list">
      <div>
        <img src="@assets/images/list_title.jpg" alt="" />
      </div>
      <div class="list-group">
        <div class="list-group-title">
          <div class="list-group-title-row">竞猜排名</div>
          <div class="list-group-title-row">用户名</div>
          <div class="list-group-title-row">竞猜积分</div>
        </div>
        <div class="list-group-item">
          <!-- 前三 -->
          <div class="list-group-item-firstthree">
            <div class="firstthree-item">
              <div class="firstthree-item-ranking">1</div>
              <div class="firstthree-item-name">18823345405</div>
              <div class="firstthree-item-score">积分19999</div>
            </div>
            <div class="firstthree-item">
              <div class="firstthree-item-ranking">2</div>
              <div class="firstthree-item-name">18823345405</div>
              <div class="firstthree-item-score">积分19999</div>
            </div>
            <div class="firstthree-item">
              <div class="firstthree-item-ranking">3</div>
              <div class="firstthree-item-name">18823345405</div>
              <div class="firstthree-item-score">积分19999</div>
            </div>
          </div>
          <!-- 后面的排名 -->
          <div class="list-group-item-row">
            <div class="row-item">
              <div class="row-item-ranking">4</div>
              <div class="row-item-name">18823345405</div>
              <div class="row-item-score">积分19999</div>
            </div>
            <div class="row-item">
              <div class="row-item-ranking">5</div>
              <div class="row-item-name">18823345405</div>
              <div class="row-item-score">积分19999</div>
            </div>
            <div class="row-item">
              <div class="row-item-ranking">6</div>
              <div class="row-item-name">18823345405</div>
              <div class="row-item-score">积分19999</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer-fixed">
      <div class="footer-fixed-info">
        <div class="footer-fixed-info-points">12312</div>
        <div class="footer-fixed-info-ranking">123</div>
        <div class="footer-fixed-info-btn">去领奖</div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Image as VanImage, Overlay } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RankingList',
  components: {
    [VanImage.name]: VanImage,
    [Overlay.name]: Overlay
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
