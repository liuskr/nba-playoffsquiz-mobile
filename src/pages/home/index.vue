<template>
  <div class="container">
    <div class="rulse" @click="show = true"></div>
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
    <!-- 用户信息 -->
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
    <!-- // 规则 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <h3 class="block-title">活动规则</h3>
          <div class="block-rulse">
            <p>1.NBA微信小程序会员、APP会员直接参与竞猜活动；新用户通过手机验证注册后参与竞猜活动。</p>
            <p>2.参与竞猜用户，全量预测季后赛和总决赛共<span>15</span>个系列赛对阵总比分。</p>
            <p>3.参与竞猜用户，须在东西部首轮比赛最先开始的<span>G3</span>比赛开始前完成全量比分预测。</p>
            <p>4.此次竞猜活动，以比赛胜负结果来判定竞猜结果，获得奖励积分；猜中比分获得附加奖励积分。猜错不扣分。</p>
            <p>5.积分规则</p>
            <div class="block-rulse-secondary">
              <p>季后赛首轮比赛竞猜胜负结果，竞猜正确一场获得<span>200</span>积分；全部竞猜正确，获得<span>1600</span>积分</p>
              <p>季后赛第二轮比赛竞猜胜负结果，竞猜正确一场获得<span>400</span>积分；全部竞猜正确，获得<span>1600</span>积分</p>
              <p>季后赛分区决赛竞猜胜负结果，竞猜正确一场获得<span>800</span>积分；全部竞猜正确，获得<span>1600</span>0积分</p>
              <p>总决赛竞猜胜负结果，竞猜正确获得<span>1600</span>积分</p>
              <p>15个系列赛，每个系列赛总比分竞猜正确，获得<span>200</span>积分；全部竞猜正确，获得<span>3000</span>积分</p>
            </div>
            <p>6.该积分仅限用于竞猜比分使用，且用户所获得的竞猜奖励积分也仅限于竞猜活动积分排名。</p>
          </div>
          <div class="close" @click="show = false"></div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<script lang="ts">
import { Image as VanImage, Overlay } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPopup',
  components: {
    [VanImage.name]: VanImage,
    [Overlay.name]: Overlay
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

  .rulse {
    position: absolute;
    right: 0;
    top: 50px;
    width: 140px;
    height: 40px;
  }
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
        width: 336px;
        height: 510px;
        margin-top: 10px;
        // vertical-align: middle;
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
      color: #4f4f4f;
      font-family: $font-zhengdao;
    }

    .ranking {
      flex: 1;
      height: 120px;
      text-align: center;
      font-size: 44px;
      line-height: 154px;
      color: #6bab39;
      font-family: $font-nba;
    }
    .points {
      flex: 1;
      height: 120px;
      text-align: center;
      font-size: 44px;
      line-height: 154px;
      margin-left: 18px;
      color: #6bab39;
      font-family: $font-nba;
    }

    // position: absolute;
    // bottom: 20px;
    // left: 30px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .block {
      width: 650px;
      background-image: url(@assets/images/rules.png);
      background-repeat: no-repeat;
      background-size: 100%;
      &-title {
        font-size: 46px;
        font-family: $font-ximai;
        text-align: center;
        font-weight: 400;
        color: #ffffff;
        margin: 16px 10px 30px 0;
      }
      &-rulse {
        padding: 0 30px;
        font-size: 29px;
        font-family: $font-zhengdao;
        font-weight: 400;
        color: #dbdbdb;
        p {
          margin-bottom: 12px;
          line-height: 34px;
          span {
            color: #f0a911;
          }
        }
        &-secondary {
          padding: 0 16px 0 26px;
          p {
            position: relative;
            &::after {
              content: '';
              position: absolute;
              top: 0;
              left: -26px;
              width: 16px;
              height: 16px;
              background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAYAAACg/AXsAAABOklEQVQ4jZ3UzSpvURjH8Y+XMFNKXnI6A6bGBsoNcAPCxCVQRmfgJAPqdDojE5lgJhJ3QP2VGzBAJ1MTJTJAerS2dju2vf+/WrXX23c/6/k9a7U0Gg059eART2qotbD0FRdYw8+qmCLkDodYwjlGmoGE/uAZvdhHdzOQm7Q5NIpdtNWFhP7mviex3gzkLLVMC5ivCylGE9rARF1I5OUq1+/AHobrQMKhf4WxcOyg6FgZJHT8yVg4tpN3rAwS4W9/MTeVqroU0oItjJf8ZDFzrP2LBb8wUwLIFI5dfhZJbP5dASAdeboIGcNmOk4VXcdlzUPixh6hqyIgSmAW9xmkOxVX1EFVreD9RQtIJDcA4X9VnWI1WxyATiwnS/vxA4OpDWEgJTBTPFxzeMlDHnDyTQh9CRbQW/z/mMEbcsIyZ9DAXPQAAAAASUVORK5CYII=')
                no-repeat;
              background-size: 100%;
            }
          }
        }
      }
      .close {
        width: 80px;
        height: 80px;
        background: url('data:image/png;base64,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')
          no-repeat;
        background-size: 100%;
        margin: 0 auto;
        margin-top: 96px;
      }
    }
  }
}
</style>
