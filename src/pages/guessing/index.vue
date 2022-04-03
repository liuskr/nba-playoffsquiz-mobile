<template>
  <div class="container">
    <header class="header">
      <div class="go_back">
        <div>返回</div>
      </div>
      <div class="countdown">
        <div class="end_time">
          <div class="day_1">13</div>
          <div class="time_1">
            <span>23</span>
            <span>14</span>
            <span>32</span>
          </div>
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
    <!-- <div class="race"></div> -->
    <div class="submit">
      <div class="btn">
        <span>提交</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TeamView from './components/team/index.vue'

export default defineComponent({
  name: 'GuessingView',
  components: {
    [TeamView.name]: TeamView
  }
})
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
