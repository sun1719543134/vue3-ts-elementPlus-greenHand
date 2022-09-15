<template>
    <div style="display: flex;">
        <div @click="isCollapseTF()">
            侧边栏收缩
        </div>
        <div @click="toggleDark()">
            {{ isDark ? '暗色' : '亮色' }}
        </div>
        <div @click="exitLogin()">
            退出登录
        </div>
    </div>

</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'//暗色模式切换
import { useLayoutStore } from '@/stores/layout'//pinia 状态管理引入
import { useUserStore } from '@/stores/user'//pinia 状态管理引入
import { useRouter } from 'vue-router'
//暗色模式切换
const isDark = useDark()
const toggleDark = useToggle(isDark)
//切换侧边栏收缩
const layoutStore = useLayoutStore()
function isCollapseTF() {
    layoutStore.isCollapseTF()
}
//退出登录
const usertStore = useUserStore()
const router = useRouter()
function exitLogin() {
    usertStore.setUserToken('')
    router.push({ path: '/login' })

}

</script>

<style scoped>

</style>