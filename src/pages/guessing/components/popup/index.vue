<template>
  <div class="popup">
    <van-popup
      v-model:show="props.show"
      :close-on-click-overlay="false"
      :style="{
        width: '64%',
        'background-color': '#e0e0e0s',
        padding: 0
      }"
    >
      <div class="team_header">
        <div class="team_content" v-if="showInfo">
          <div class="item">
            <img :src="showInfo.TeamAData.popimgUrl" alt="" />
            <span>
              {{ showInfo.TeamAData.Name.length >= 4 ? showInfo.TeamAData.Name.slice(0, 2) : showInfo.TeamAData.Name }}
              <div v-if="showInfo.TeamAData.Name.length >= 4">{{ showInfo.TeamAData.Name.slice(2, 4) }}</div>
            </span>
          </div>
          <div class="vs">VS</div>
          <div class="item">
            <span>
              {{ showInfo.TeamBData.Name.length >= 4 ? showInfo.TeamBData.Name.slice(0, 2) : showInfo.TeamBData.Name }}
              <div v-if="showInfo.TeamBData.Name.length >= 4">{{ showInfo.TeamBData.Name.slice(2, 4) }}</div>
            </span>
            <img :src="showInfo.TeamBData.popimgUrl" alt="" />
          </div>
        </div>
        <div class="team_score">
          <div class="num">
            <div @click="showListCount = true">{{ ScoreA }}</div>
            <ul v-if="showListCount" class="num_list">
              <li v-for="n in list" :key="n" @click="selectScore(n, 'ScoreA')">{{ n }}</li>
            </ul>
          </div>
          <div class="line">-</div>
          <div class="num">
            <div @click="showListCount = true">{{ ScoreB }}</div>
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

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, onMounted } from 'vue'

const props = defineProps({ info: Object, show: Boolean })

const showListCount = ref(false)
const list = ref([4, 3, 2, 1, 0])

const ScoreA = ref(null)
const ScoreB = ref(null)

const emit = defineEmits<{
  (e: 'click', ScoreA?: Number, ScoreB?: Number): void
}>()

// 计算当前显示的值  输入预测后
const showInfo = computed(() => {
  const data = props.info
  return props.info
})

// 选择预测比分
const selectScore = (num, type) => {
  if (type === 'ScoreA') {
    ScoreA.value = num
    ScoreB.value = 7 - num
    if (7 - num > 4) {
      ScoreB.value = 4
    }
  } else {
    ScoreA.value = 7 - num
    if (7 - num > 4) {
      ScoreA.value = 4
    }
    ScoreB.value = num
  }
  showListCount.value = false
}

// 确认选择比分
const confirm = () => {
  emit('click', ScoreA.value, ScoreB.value)
}

const clsoe = () => {
  ScoreA.value = null
  ScoreB.value = null
  emit('click')
}

onMounted(() => {
  if (props.info) {
    ScoreA.value = props.info.ScoreA
    ScoreB.value = props.info.ScoreB
  }
})
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
