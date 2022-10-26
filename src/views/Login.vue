<template>
  <el-button type="primary" @click="login()">登录</el-button>
</template>

<script setup lang="ts" name="login">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useDark } from '@vueuse/core'//暗色模式切换
useDark()
const router = useRouter();
const store = useUserStore()
function login() {
  store.setUserToken('登录token')
  router.push({ path: '/home' })
}

</script>

<style scoped>

</style>