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
    <div class="form-table">
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="账户"
            name="username"
            :rules="[{ required: true, message: '请输入用户名！' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码！' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
          <a-button @click="goToForget" type="link" style="margin-left: 5rem">忘记密码</a-button>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 9, span: 16 }">
          <a-button type="primary" html-type="submit" shape="round">
            <template #icon>
              <login-outlined />
            </template>
            登录
          </a-button>
          <a-button shape="round" style="margin-left: 4rem" @click="reset">
            <template #icon>
              <sync-outlined />
            </template>
            重置
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</div>
</template>

<script>
import { LoginOutlined, SyncOutlined } from '@ant-design/icons-vue'
import {reactive, defineComponent} from "vue";
import { message } from "ant-design-vue";
export default defineComponent({
  setup(){
    let formState = reactive({
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
    //跳转至忘记密码
    const goToForget = ()=>{
      message.warn('忘记密码页面开发中...')
    }
    return{
      formState,
      onFinish,
      onFinishFailed,
      reset,
      goToForget
    }
  },
  components:{
    LoginOutlined,
    SyncOutlined
  }
})

</script>

<style lang="less" scoped>
.login{
  height: 100vh;
  width: 100vw;
  background: #1E80FF;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-text{
    flex: 1;
    text-align: center;

    h1{
      color: #f9f9f9;
      font-size: 52px;
      font-weight: bolder;
      line-height: 42px;
    }

    span{
      color: #f9f9f9;
      font-size: 52px;
      font-weight: bolder;
      line-height: 42px;
    }
  }

  .login-form{
    width: 600px;
    height: 100vh;
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .form-text h1{
      margin-bottom: 3rem;
    }

    .form-table{
      height: auto;
      min-height: 320px;
      width: 100%;

      .ant-form{
        width: 90%;
        height: auto;
      }
    }
  }
}
</style>
