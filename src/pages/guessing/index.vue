<template>
  <div class="container">
    <header class="header">
      <div class="go_back">
        <div @click="$router.replace('/')">返回</div>
      </div>
      <div class="countdown">
        <div class="end_time">
          <van-count-down :time="time">
            <template #default="timeData">
              <span class="day_1">{{ timeData.days }}</span>
              <div class="time_1">
                <span>{{ timeData.hours }}</span>
                <span>{{ timeData.minutes }}</span>
                <span>{{ timeData.seconds }}</span>
              </div>
            </template>
          </van-count-down>
        </div>
        <div class="desc">距离竞猜结束</div>
      </div>
      <div class="date">
        <div class="day">{{ getDate() }}</div>
        <div class="time">{{ getTime() }}</div>
      </div>
    </header>
    <div class="team">
      <TeamView ref="teamView" />
    </div>
    <!-- <div class="logo_bg"></div> -->
    <div class="race"></div>
    <div class="submit">
      <div class="btn">
        <span @click="submit">提交</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TeamView from './components/team/index.vue'
import { ref } from 'vue'
const time = ref(30 * 60 * 60 * 1000)
// 年月日
const getDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}.${month}.${day}`
}
// 时分秒
const getTime = () => {
  const date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return `${hour}:${minute < 10 ? `0${minute}` : minute}`
}
// 倒计时
// const getTimeDiff = (endTime: number) => {
//   const now = new Date().getTime()
//   const diff = endTime - now
//   return diff
// }

const teamView = ref(null)

const submit = () => {
  teamView.value.submit() // 获取子组件对外暴露的属性
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { CountDown } from 'vant'

export default defineComponent({
  name: 'GuessingView',
  components: {
    [CountDown.name]: CountDown
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';

:deep(.van-overlay) {
  transform: scale(1.6);
}
</style>
