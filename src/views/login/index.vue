<template>
<div class="login">
  <a-row>
    <a-col :xs="0" :sm="0" :md="14" :lg="14" :xl="18">
      <div class="login-text">
        <h1>欢迎光临</h1>
        <p>
          <span>这是一个前端开发者的项目开发管理平台，</span>
          <span>也可以所说是他的足迹。</span>
        </p>
      </div>
    </a-col>
    <a-col :xs="24" :sm="24" :md="10" :lg="10" :xl="6">
      <div class="login-form">
        <div class="form-text">
          <h1>项目总成及配置管理系统</h1>
        </div>
        <div class="form-table">
          <a-form
              :model="formData"
              name="loginForm"
              ref="loginFormRef"
              layout="vertical"
              hideRequiredMark
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
          >
            <a-tabs v-model:activeKey="activeTag" @change="tabsChange" centered>
              <a-tab-pane key="tab1" tab="账号登录">
                <a-alert v-if="false" type="error" showIcon style="margin-bottom: 24px;" message="账号或密码错误" />
                <a-form-item
                    name="username"
                    :rules="[{ required: true, message: '请输入用户名！' }]"
                >
                  <a-input v-model:value="formData.username"  placeholder="用户名" allowClear>
                    <template #prefix>
                      <user-outlined type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item
                    name="password"
                    :rules="[{ required: true, message: '请输入密码！' }]"
                >
                  <a-input-password v-model:value="formData.password" placeholder="密码">
                    <template #prefix>
                      <lock-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
                    </template>
                  </a-input-password>
                </a-form-item>
                <a-row v-if="false">
                  <a-col :span="14">
                    <a-form-item
                        name="verification"
                        :rules="[{ required: true, message: '请输入验证码！' }]"
                    >
                      <a-input v-model:value="formData.verification" placeholder="验证码">
                        <template #prefix>
                          <codepen-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </template>
                      </a-input>
                    </a-form-item>
                  </a-col>
                  <a-col :span="8" :push="2">
                    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="验证码" height="36" width="100">
                  </a-col>
                </a-row>
                <a-form-item name="remember">
                  <a-checkbox v-model:checked="formData.remember">记住密码</a-checkbox>
                  <a-button @click="goToForget" type="link" style="margin-left: 4rem">忘记密码</a-button>
                </a-form-item>
                <a-form-item>
                  <a-button
                      type="primary"
                      size="large"
                      html-type="submit"
                      block
                      :loading='loginButton.buttonState'
                      style="margin-bottom: 1.5rem">
                    <template #icon>
                      <login-outlined />
                    </template>
                    登录
                  </a-button>
                  <a-button
                      size="large"
                      block
                      @click="reset">
                    <template #icon>
                      <sync-outlined />
                    </template>
                    重置
                  </a-button>
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane key="tab2" tab="扫码登录">
                <a-card :bordered="true" style="width: 100%">
                    <template #cover>
                      <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </template>
                </a-card>
              </a-tab-pane>
            </a-tabs>
          </a-form>
        </div>
      </div>
    </a-col>
  </a-row>
</div>
</template>

<script>
import { beforeLogin } from '@/views/login/login.js'
import { useStore } from '@/store/user.js'
import { DEBUG } from '@/config/setting.js'
import { LoginOutlined, SyncOutlined, UserOutlined, LockOutlined, MobileOutlined, CodepenOutlined} from '@ant-design/icons-vue'
import {reactive, defineComponent, ref, getCurrentInstance, watch} from "vue";
import { message } from "ant-design-vue";
import router from "@/router/index.js";
const userStore = useStore()
export default defineComponent({
  setup(){
    let activeTag = ref('tab1')
    let formData = reactive({
      username: '',
      password: '',
      remember: false,
      verification:''
    })
    let loginButton = reactive({
      loginType: 0, //0 账号登录，1 手机验证码登录
      buttonState: false,
    })
    //表单验证通过操作
    const onFinish = values => {
      loginButton.buttonState = true
      let form = {
        username:formData.username,
        password:formData.password
      }
      if(beforeLogin(loginButton.loginType,form)){
        userStore.USER_LOGIN_CHANGE(true)
        router.replace('/')
        setTimeout(()=>{
          message.success('登录成功，页面跳转中...')
          loginButton.buttonState = false
        }, 3000)
      }else {
        userStore.USER_LOGIN_CHANGE(false)
        setTimeout(()=>{
          message.error('登录失败，账号密码错误')
          loginButton.buttonState = false
        }, 3000)
      }
      DEBUG && console.log('Success:', values);
    };

    //表单验证失败操作
    const onFinishFailed = errorInfo => {
      DEBUG && console.log('Failed:', errorInfo);
      message.error('登录失败，账户或密码不能为空！')
    };

    //表单重置
    const reset = ()=>{
      message.success('重置成功...')
    }

    //跳转至忘记密码
    const goToForget = ()=>{
      message.warn('忘记密码页面开发中...')
    }

    //tab切换监听
    const tabsChange = (activeKey)=>{
      if(activeKey === 'tab1'){
        loginButton.loginType = 0
      }else if(activeKey === 'tab2'){
        loginButton.loginType = 1
      }else {
        throw new Error('你他娘的怎么找到这的?')
      }
    }
    return{
      formData,
      activeTag,
      loginButton,
      onFinish,
      onFinishFailed,
      reset,
      goToForget,
      tabsChange
    }
  },
  components:{
    LoginOutlined,
    SyncOutlined,
    UserOutlined,
    LockOutlined,
    MobileOutlined,
    CodepenOutlined,
  }
})

</script>

<style lang="less" scoped>
.login{
  height: 100%;
  min-height: 500px;
  width: 100%;
  background: #1E80FF;
  position: relative;

  .login-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-20%);
    h1{
      color: #f9f9f9;
      font-size: 52px;
      font-weight: bolder;
      line-height: 16px;
    }
    p{
      //display: block;
      height: 200px;
      width: 320px;
      display: flex;
      flex-direction: column;
      color: #f9f9f9;
      font-size: 16px;
    }
  }
  .login-form{
    height: 100vh;
    min-height: 500px;
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .form-text h1{
      margin-bottom: 3rem;
    }
    .form-table{
      width: 75%;
    }
  }
}
</style>
