<template>
<div class="login">
  <div class="login-text">
    <h1>欢迎光临</h1>
<!--    <span>新用户</span>-->
  </div>
  <div class="login-form">
    <div class="form-text">
      <h1>项目总成及配置管理系统</h1>
    </div>
    <a-form
        :model="formState"
        name="basic"
        ref="formState"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
      <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入你的账号' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入你的密码' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item name="remember" :wrapper-col="{ offset: 7, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 9, span: 16 }">
        <a-button type="primary" html-type="submit" shape="round">
          <template #icon>
            <login-outlined />
          </template>
          登录
        </a-button>
        <a-button shape="round" style="margin-left: 3rem" @click="reset">
          <template #icon>
            <sync-outlined />
          </template>
          重置
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</div>
</template>

<script setup>
import {reactive, ref} from "vue";
import { LoginOutlined, SyncOutlined } from '@ant-design/icons-vue'
import { message } from "ant-design-vue";
const formState = reactive({
  username: '',
  password: '',
  remember: true,
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
  // console.log(ref())
}
</script>

<style scoped>
.login{
  height: 100vh;
  width: 100vw;
  background: #1E80FF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login .login-text{
  flex: 1;
  text-align: center;
}
.login .login-text h1{
  color: #f9f9f9;
  font-size: 42px;
  font-weight: bolder;
  line-height: 28px;
}
.login .login-text span{
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
}
.login .login-form{
  width: 600px;
  height: 100vh;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login .login-form .form-text h1{
   margin-bottom: 3rem;
}

.login .login-form .ant-form{
  width: 90%;
  height: auto;
}
</style>
