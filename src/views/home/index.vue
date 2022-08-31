<template>
<div class="home">
  <h1>欢迎使用Vite初始化项目模板</h1>
  <a-button type="primary" @click="goToExample">
    <template #icon>
      <right-circle-outlined />
    </template>
    前往实例台
  </a-button>
</div>
</template>

<script setup>
  import { RightCircleOutlined } from '@ant-design/icons-vue'
  import { message } from 'ant-design-vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  function goToExample(){
    // message.warning('开发中...', 1)
    router.push('/example')
  }
</script>

<style scoped>
.home{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
    font-size: 3.2em;
    line-height: 1.1;
    color: #b9b4b4;
}
</style>
