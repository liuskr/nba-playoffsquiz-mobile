<template>
  <div class="popup">
    <div @click="showPopup">
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
        <div class="team_content" v-if="showInfo">
          <div class="item">
            <img :src="showInfo.TeamAData.popimgUrl" alt="" />
            <span>{{ showInfo.TeamAData.Name }} </span>
          </div>
          <div class="vs">VS</div>
          <div class="item">
            <span>{{ showInfo.TeamBData.Name }}</span>
            <img :src="showInfo.TeamBData.popimgUrl" alt="" />
          </div>
        </div>
        <div class="team_score">
          <div class="num">
            <div @click="showListCount = true">{{ ScoreA || showInfo.ScoreA }}</div>
            <ul v-if="showListCount" class="num_list">
              <li v-for="n in list" :key="n" @click="selectScore(n, 'ScoreA')">{{ n }}</li>
            </ul>
          </div>
          <div class="line">-</div>
          <div class="num">
            <div @click="showListCount = true">{{ ScoreB || showInfo.ScoreB }}</div>
            <ul v-if="showListCount" class="num_list">
              <li v-for="n in list" :key="n" @click="selectScore(n, 'ScoreB')">{{ n }}</li>
            </ul>
          </div>
        </div>
        <div class="btns">
          <div class="btn cancel" @click="clsoe">取消</div>
          <div class="btn determine" @click="confirm">确定</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
//
<script lang="ts" setup>
import { ref, defineProps, computed } from 'vue'

const props = defineProps({ info: Object })

const show = ref(false)
const showListCount = ref(false)
const list = ref([4, 3, 2, 1, 0])

const ScoreA = ref(null)
const ScoreB = ref(null)
const selectScoreA = ref(null)
const selectScoreB = ref(null)

// 计算当前显示的值  输入预测后
const showInfo = computed(() => {
  const data = props.info
  if (selectScoreA.value !== null) {
    data.ScoreA = selectScoreA.value
    data.ScoreB = selectScoreB.value
    return data
  }

  return props.info
})

// 显示预测输入弹框
const showPopup = () => {
  if (props.info.State == 2) {
    return
  }
  show.value = true
}

// 选择预测比分
const selectScore = (num, type) => {
  if (type === 'ScoreA') {
    ScoreA.value = num
    console.log(num)
    ScoreB.value = 7 - num
  } else {
    ScoreA.value = 7 - num
    ScoreB.value = num
  }
  showListCount.value = false
}

// 确认选择比分
const confirm = () => {
  selectScoreA.value = ScoreA.value
  selectScoreB.value = ScoreB.value
  show.value = false
}

const clsoe = () => {
  ScoreA.value = null
  ScoreB.value = null
  selectScoreA.value = null
  selectScoreB.value = null
  show.value = false
}
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

<style lang="scss">
@import './index.scss';

:deep(.van-popup) {
  overflow-y: visible;
}
</style>
