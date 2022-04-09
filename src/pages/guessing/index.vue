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
    <div class="result-wrap" v-if="resultInfo && resultInfo.Name">
      <div class="content">
        我预测的总冠军球队:
        <p> <img class="logo" :src="resultInfo.popimgUrl" alt="" /></p>
        
        {{ resultInfo.Name }}
        </div>
    </div>
    <div class="team">
      <TeamView ref="teamView" @send="last" />
    </div>
    <!-- <div class="logo_bg"></div> -->
    <div class="race"></div>
    <div class="submit edit" v-if="resultInfo && resultInfo.Name">
      <div class="btn">
        <span @click="edit">修改</span>
      </div>
    </div>

    <div class="submit" v-else>
      <div class="btn">
        <span @click="submit">提交</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TeamView from './components/team/index.vue'
import { ref, onMounted } from 'vue'
import { Toast } from 'vant'

import { getGuessIndex } from '@apis'
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

const isEdit = ref(true)
onMounted(() => {
  try {
    getGuessIndex().then(({ data }) => {
      const array = data.Data
      for (let index = 0; index < array.length; index++) {
        const element = array[index]
        if (element.State === 2) {
          time.value = new Date(element.EndTime).getTime() - Date.now()
          isEdit.value = new Date(element.AllowChangeTime).getTime() < Date.now()
        }
      }
    })
  } catch {
    time.value = 0
  }
})

const teamView = ref(null)

// 提交
const submit = () => {
  if (isEdit.value) {
    Toast('当前最后修改时间已截止')
    return
  }
  // @ts-ignore
  teamView.value.submit() // 获取子组件对外暴露的属性
}

// 修改
const edit = () => {
  resultInfo.value = {}
  teamView.value.edit() // 获取子组件对外暴露的属性
}

const resultInfo = ref({})

// 获得是否预测最后获胜
const last = (info) => {
  resultInfo.value = info
  console.log('获胜', resultInfo.value)
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
.champion {
  width: 750px;
  height: 120px;
}
:deep(.van-overlay) {
  transform: scale(1.6);
}
</style>
