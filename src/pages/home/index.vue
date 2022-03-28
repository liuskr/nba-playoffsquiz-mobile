<template>
  <div class="container">
    <main class="center">
      <div class="mainbody">
        <div class="mainbody-item">
          <img src="@assets/images/home_1.png" alt="" />
        </div>
        <div class="mainbody-item">
          <img src="@assets/images/home_2.jpg" alt="" />
        </div>
        <div class="mainbody-item">
          <img src="@assets/images/home_3.png" alt="" />
        </div>
        <div class="mainbody-item">
          <img src="@assets/images/home_4.jpg" alt="" />
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="user">
        <div class="user-avatar">
          <van-image round width="1.21rem" height="1.22rem" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </div>
      </div>
      <div class="name">哈哈哈哈哈</div>
      <div class="ranking">1232</div>
      <div class="points">1223</div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'

// const text = ref('111')
</script>

<script lang="ts">
import { Image as VanImage } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPopup',
  components: {
    [VanImage.name]: VanImage
  }
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  min-height: 100vh;
  background: url('@assets/images/home_bg.jpg') no-repeat;
  background-size: 100%;
  overflow: hidden;
  .center {
    height: 100%;
    .mainbody {
      height: 1080px;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 220px;
      &-item {
        width: 340px;
        height: 520px;
        margin-top: 10px;
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .footer {
    height: 100px;
    width: 530px;
    display: flex;
    margin-top: 20px;
    font-weight: 500;
    .user {
      width: 150px;
      &-avatar {
        flex: 1;
        width: 100px;
        height: 100px;
        background-color: pink;
        border-radius: 50%;
        border: 5px solid #6bab39;
        box-sizing: border-box;
        margin-left: 36px;
        box-shadow: 0 0 5px #6bab39;
      }
    }
    .name {
      width: 150px;
      height: 110px;
      line-height: 120px;
      font-size: 26px;
      font-weight: 700;
    }

    .ranking {
      flex: 1;
      height: 120px;
      text-align: center;
      font-size: 32px;
      line-height: 154px;
      color: #6bab39;
    }
    .points {
      flex: 1;
      height: 120px;
      text-align: center;
      font-size: 32px;
      line-height: 154px;
      margin-left: 18px;
      color: #6bab39;
    }

    // position: absolute;
    // bottom: 20px;
    // left: 30px;
  }
}
</style>
