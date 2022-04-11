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
                <span>{{ timeData.hours < 10 ? `0${timeData.hours}` : timeData.hours }}</span>
                <span>{{ timeData.minutes < 10 ? `0${timeData.minutes}` : timeData.minutes }}</span>
                <span>{{ timeData.seconds < 10 ? `0${timeData.seconds}` : timeData.seconds }} </span>
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
    <div id="container">
      <div class="result-wrap" v-if="resultInfo && resultInfo.Name">
        <div class="content">
          我预测的总冠军球队:
          <p><img class="logo" :src="resultInfo.popimgUrl" alt="" /></p>

          {{ resultInfo.Name }}
        </div>
      </div>
      <div class="team">
        <TeamView ref="teamView" @send="last" />
      </div>
    </div>

    <!-- <div class="logo_bg"></div> -->
    <div class="race" @click="outsModel"></div>
    <div class="submit" :class="{ hierarchy: resultInfo && resultInfo.Name }">
      <div class="logo">
        <img src="/images/guess_logo.png" alt="" />
      </div>

      <div class="btn">
        <span class="submit_btn" @click="edit" v-if="resultInfo && resultInfo.Name"></span>
        <span class="edit" @click="submit" v-else></span>
      </div>
    </div>

    <Poster style="tr" v-model:isShowPoster="posterShow" :url="posterUrl" />

    <Outs v-model:isShow="showOuts" />
  </div>
</template>

<script lang="ts" setup>
import TeamView from './components/team/index.vue'
import { ref, onMounted } from 'vue'
import { Toast } from 'vant'
import html2canvas from 'html2canvas'
import { getGuessIndex } from '@apis'
import Poster from '@components/Poster/index.vue'
import Outs from '@components/Outs/index.vue'

const time = ref(30 * 60 * 60 * 1000)
const posterShow = ref(false)
const posterUrl = ref('')
const showOuts = ref(false)
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

const outsModel = () => {
  console.log('sadsad')
  showOuts.value = true
}

const isEdit = ref(true)
onMounted(() => {
  try {
    getGuessIndex().then(({ data }) => {
      const array = data.Data
      for (let index = 0; index < array.length; index++) {
        const element = array[index]
        if (element.State === 2) {
          time.value = new Date(element.AllowChangeTime).getTime() - Date.now()
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
    Toast('当前轮次提交已截止')
    return
  }
  // @ts-ignore
  teamView.value.submit() // 获取子组件对外暴露的属性
}

//图片格式转换方法
const dataURLToBlob = (dataurl) => {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

// 生成图片
const toImg = () => {
  let scale = window.devicePixelRatio
  html2canvas(document.getElementById('container'), {
    backgroundColor: null,
    scale: scale
  }).then((canvas) => {
    let dom = document.body.appendChild(canvas)
    dom.style.display = 'none'
    document.body.removeChild(dom)
    let blob = dataURLToBlob(dom.toDataURL('image/png'))
    // 合成二维码
    synthesisImg(canvas.width, canvas.height, URL.createObjectURL(blob))
    Toast.clear()
  })
}

// 合成图片 加上二维码
const synthesisImg = (width, height, url) => {
  let canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  let context = canvas.getContext('2d')
  context.rect(0, 0, canvas.width, canvas.height)
  let bgImg = new Image()
  bgImg.src = new URL(`../../assets/images/codebg.jpg`, import.meta.url).href // 背景图
  bgImg.crossOrigin = 'Anonymous'
  bgImg.onload = () => {
    context.drawImage(bgImg, 0, 0, width, height)

    // 队伍图
    let teamImg = new Image()
    teamImg.src = url
    teamImg.onload = () => {
      context.drawImage(teamImg, 30, 60, width - 60, height)

      let img = new Image()
      img.src = new URL(`../../assets/images/code.jpg`, import.meta.url).href // 二维码
      img.crossOrigin = 'Anonymous'
      img.onload = () => {
        context.drawImage(img, 0, height - 220, width, 252)
        let base64 = canvas.toDataURL('image/png')
        posterUrl.value = base64
        posterShow.value = true
        // let a = document.createElement('a')
        // a.setAttribute('href', base64)
        // //这块是保存图片操作  可以设置保存的图片的信息
        // a.setAttribute('download', 'test.png')
        // document.body.appendChild(a)
        // a.click()
      }
    }
  }
}

// 修改
const edit = () => {
  if (isEdit.value) {
    Toast('当前轮次修改已截止')
    return
  }
  resultInfo.value = {}
  teamView.value.edit() // 获取子组件对外暴露的属性
}

const resultInfo = ref({})

// 获得是否预测最后获胜
const last = (info, isNew) => {
  resultInfo.value = info
  if (isNew) {
    Toast.loading({
      duration: 4000,
      forbidClick: true,
      message: '正在生成分享海报'
    })
    setTimeout(() => {
      toImg()
    }, 2000)
  }
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
  z-index: 1000;
}
</style>
