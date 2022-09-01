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
            <a-tabs v-model:activeKey="activeTag" centered>
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
                <a-form-item name="remember">
                  <a-checkbox v-model:checked="formData.remember">记住密码</a-checkbox>
                  <a-button @click="goToForget" type="link" style="margin-left: 4rem">忘记密码</a-button>
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane key="tab2" tab="手机登录">
                <a-form-item
                    name="phone"
                    :rules="[{ required: true, message: '请输入手机号！'}]"
                >
                  <a-input v-model:value="formData.phone"  placeholder="手机号" allowClear>
                    <template #prefix>
                      <mobile-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-row>
                    <a-col :span="16">
                      <a-input v-model:value="formData.code" placeholder="验证码" allowClear>
                        <template #prefix>
                          <codepen-outlined  :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </template>
                      </a-input>
                    </a-col>
                    <a-col :span="6" :push="1">
                      <a-button>获取验证码</a-button>
                    </a-col>
                  </a-row>
                </a-form-item>
              </a-tab-pane>
            </a-tabs>
            <a-form-item>
              <a-button type="primary" size="large" html-type="submit" block shape="round" style="margin-bottom: 1.5rem">
                <template #icon>
                  <login-outlined />
                </template>
                登录
              </a-button>
              <a-button shape="round" size="large" block @click="reset">
                <template #icon>
                  <sync-outlined />
                </template>
                重置
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </a-col>
  </a-row>
</div>
</template>

<script>
import { LoginOutlined, SyncOutlined, UserOutlined, LockOutlined, MobileOutlined, CodepenOutlined} from '@ant-design/icons-vue'
import {reactive, defineComponent, ref, getCurrentInstance} from "vue";
import { message } from "ant-design-vue";

export default defineComponent({
  setup(){
    let activeTag = ref('tab1')
    let formData = reactive({
      username: '',
      phone:'',
      code:'',
      password: '',
      remember: false,
    })
  //表单验证通过操作
    const onFinish = values => {
      console.log('Success:', values);
      message.success('登录成功，页面跳转中...')
    };
    //表单验证失败操作
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
      message.error('登录失败，账户或密码错误！')
    };
    //表单重置
    const reset = ()=>{
      message.success('重置成功...')
    }
    //跳转至忘记密码
    const goToForget = ()=>{
      message.warn('忘记密码页面开发中...')
    }
    return{
      formData,
      activeTag,
      onFinish,
      onFinishFailed,
      reset,
      goToForget
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
