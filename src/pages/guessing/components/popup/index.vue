<template>
  <div class="popup">
    <div @click="show = true">
      <slot></slot>
    </div>
    <van-popup
      v-model:show="show"
      :close-on-click-overlay="false"
      :style="{
        width: '75%',
        'max-width': '405px',
        'background-color': '#e0e0e0s',
        padding: 0
      }"
    >
      <div class="team_header">
        <div class="team_content">
          <div class="item">
            <img src="../../../../assets/images/MHeat_Global.png" alt="" />
            <span>热火 </span>
          </div>
          <div class="vs">VS</div>
          <div class="item">
            <span>篮网</span>
            <img src="../../../../assets/images/BklynNets_Global.png" alt="" />
          </div>
        </div>
        <div class="team_score">
          <div class="num">
            <div @click="showListCount = true">4</div>
            <ul v-if="showListCount" class="num_list">
              <li>4</li>
              <li>3</li>
              <li>2</li>
              <li>1</li>
              <li>0</li>
            </ul>
          </div>
          <div class="line">-</div>
          <div class="num">
            <div @click="showListCount = true">2</div>
            <ul v-if="showListCount" class="num_list">
              <li>3</li>
              <li>2</li>
              <li>1</li>
              <li>0</li>
            </ul>
          </div>
        </div>
        <div class="btns">
          <div class="btn cancel" @click="show = false">取消</div>
          <div class="btn determine">确定</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)

const showListCount = ref(false)
</script>
<script lang="ts">
import { defineComponent } from 'vue'
import { Popup } from 'vant'

export default defineComponent({
  name: 'PopupView',
  components: {
    [Popup.name]: Popup
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';

:deep(.van-popup) {
  overflow-y: visible;
}
</style>
