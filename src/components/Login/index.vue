<template>
  <van-overlay :show="isLogin">
    <div class="wrapper" @click.stop>
      <div class="content">
        <van-icon class="content_close" name="close" color="#fff" size="24" @click.stop="onClose" />

        <div class="login_input_box">
          <div class="login-label">手机号</div>
          <van-field v-model="phone" type="tel" size="large" label-width="4px" label="" />
          <div class="login-label">验证码</div>

          <div class="code">
            <van-field v-model="code" maxlength="4" type="digit" label-width="4px" label="" class="code-input"> </van-field>
            <div v-if="!showTimmer" class="code-btn" @click="onSendCode">验证码</div>
            <div v-else class="code-btn" @click="onSendCode">{{ timmer }} s</div>
          </div>
          <van-checkbox v-model="checked" icon-size="14px" shape="square" checked-color="#C73E30">
            <template #icon="props">
              <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
            </template>
            <router-link class="agreement" to="/useragreement">用户须知</router-link>
          </van-checkbox>
          <div class="login-btn" @click="onLogin">登录</div>
        </div>
      </div>
    </div>
  </van-overlay>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { Overlay, Field, Toast, Icon, Checkbox } from 'vant'
import { isMPStrict } from '@utils'
import activeIcon from '@assets/images/checkbox.png'
import inactiveIcon from '@assets/images/selected.png'
//
// import { getVerificationCode, updateUseLogin } from '@apis'
// import { localStorageSet } from '@utils/auth'
interface stateType {
  phone: string
  code: string
  timmer: number
  showTimmer: boolean
  checked: boolean
}
export default defineComponent({
  name: 'LoginPopup',
  components: {
    [Overlay.name]: Overlay,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:isLogin'],
  setup(props, { emit }) {
    const state = reactive<stateType>({
      phone: '', //手机号
      code: '', //验证码
      timmer: 60, //倒计时时间
      showTimmer: false, //是否展示倒计时
      checked: true
    })

    // 倒计时
    const countDown = (): void => {
      let interval = setInterval(function () {
        if (state.timmer <= 0) {
          clearInterval(interval)
          state.showTimmer = false
          state.timmer = 60
          return
        }
        state.timmer -= 1
      }, 1000)
    }

    const getIsPhone = (): boolean => {
      if (state.phone === '') {
        Toast({ message: '请输入手机号', duration: 1500 })
        return false
      }
      if (!isMPStrict(state.phone)) {
        Toast({ message: '手机号错误', duration: 1500 })
        return false
      }
      return true
    }

    // 获取验证码
    const onSendCode = async (): Promise<void> => {
      if (!getIsPhone()) return
      if (!state.checked) {
        Toast({ message: '请勾选用户隐私协议', duration: 1500 })
        return
      }
      // await getVerificationCode({ phone: state.phone })
      state.showTimmer = true
      countDown()
      Toast.success({ message: '发送成功', duration: 1500 })
    }

    // 登录
    const onLogin = async (): Promise<void> => {
      if (!getIsPhone()) return
      if (state.code === '') {
        Toast({ message: '请输入验证码', duration: 1500 })
        return
      }
      // const { data } = await updateUseLogin({ phone: state.phone, code: state.code })
      // localStorageSet('token', data?.token)
      Toast.success({ message: '登录成功', duration: 1500 })
      emit('update:isLogin', false)
    }

    const onClose = (): void => {
      emit('update:isLogin', false)
    }

    return {
      ...toRefs(state),
      activeIcon,
      inactiveIcon,
      onSendCode,
      onLogin,
      onClose
    }
  }
})
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
