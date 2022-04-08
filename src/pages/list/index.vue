<template>
  <div class="container">
    <main class="list">
      <div>
        <img src="/images/list_title.jpg" alt="" />
        <div class="share" @click="show = true" />
        <div @click="$router.replace('/')" class="go-back"></div>
      </div>
      <div class="list-group">
        <div class="list-group-title">
          <div class="list-group-title-row">竞猜排名</div>
          <div class="list-group-title-row">用户名</div>
          <div class="list-group-title-row">竞猜积分</div>
        </div>
        <div class="list-group-item">
          <!-- 前三 -->
          <!-- <div class="list-group-item-firstthree">
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
          </div> -->
          <!-- 后面的排名 -->
          <!-- <div class="list-group-item-row">
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
            </div> -->
          <!-- </div> -->
          <van-empty class="custom-image" image="https://cdn.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" description="暂无排名" />
        </div>
      </div>
    </main>
    <footer class="footer-fixed">
      <div class="footer-fixed-info">
        <div class="footer-fixed-info-points">???</div>
        <div class="footer-fixed-info-ranking">???</div>
        <div class="footer-fixed-info-btn" @click="addressShow = true">去领奖</div>
      </div>
    </footer>
    <Poster v-model:is-show-poster="show" />
    <van-popup v-model:show="addressShow" position="bottom" :style="{ height: '50%' }">
      <div class="address">
        <div class="address-title">完善物流信息</div>
        <van-cell-group inset :border="false">
          <van-field label="收货人" label-width="60" placeholder="请输入收货人" />
          <van-field type="tel" label="手机号码" label-width="60" placeholder="请输入手机号码" />
          <van-field v-model="result" label-width="60" readonly name="area" label="地区选择" placeholder="点击选择省市区" @click="showArea = true" />
          <van-popup v-model:show="showArea" position="bottom">
            <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
          </van-popup>
          <van-field rows="3" label-width="60" autosize label="详细地址" type="textarea" placeholder="街道小区" />
        </van-cell-group>
        <div class="address-btn"></div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { areaList } from '@vant/area-data'
import Poster from '@components/Poster/index.vue'

const addressShow = ref(false)
const showArea = ref(false)
const show = ref(false)
const result = ref('')

const onConfirm = (areaValues: any[]) => {
  showArea.value = false
  result.value = areaValues
    .filter((item: any) => Boolean(item))
    .map((item: { name: any }) => item.name)
    .join('/')
}
</script>

<script lang="ts">
import { Popup, Field, CellGroup, Area, Empty } from 'vant'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RankingList',
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Popup.name]: Popup,
    [Area.name]: Area,
    [Empty.name]: Empty
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
