<template>
  <div class="container">
    <header class="header">
      <div class="go_back">
        <div>返回</div>
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
          <!-- <div class="day_1">13</div>
          <div class="time_1">
            
            <span>23</span>
            <span>14</span>
            <span>32</span>
          </div> -->
        </div>
        <div class="desc">距离竞猜结束</div>
      </div>
      <div class="date">
        <div class="day">2022.4.26</div>
        <div class="time">3:26</div>
      </div>
    </header>
    <div class="team">
      <TeamView />
    </div>
    <!-- <div class="logo_bg"></div> -->
    <div class="race"></div>
    <div class="submit">
      <div class="btn">
        <span>提交</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TeamView from './components/team/index.vue'
import { ref } from 'vue'
const time = ref(30 * 60 * 60 * 1000)
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
</style>
