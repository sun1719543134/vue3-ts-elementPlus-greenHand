<template>
    <div style="display: flex;height: 100%;">
        <div style="padding: 7px;">
            <el-icon size="26px" @click="isCollapseTF()">
                <i-ep-Expand v-if="layoutStore.isCollapse"></i-ep-Expand>
                <i-ep-Fold v-else></i-ep-Fold>
            </el-icon>
        </div>
        <div style="flex: 1;"></div>
        <div style="padding: 10px;">
            <el-icon size="20px" @click="toggleDark()">
                <i-ep-Moon v-if="isDark"></i-ep-Moon>
                <i-ep-Sunny v-else></i-ep-Sunny>
            </el-icon>
        </div>
        <div @click="exitLogin()" style="line-height: 40px;">
            <!-- <el-avatar :size="24" :src="''">
                <img src="@/assets/anime-avatar-1.png" alt="">
            </el-avatar> -->
            <div>
                退出登录
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'//暗色模式切换
import { useLayoutStore } from '@/stores/layout'//pinia 状态管理引入
import { useUserStore } from '@/stores/user'//pinia 状态管理引入
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
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
const exitLogin = () => {
    ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
    }
    ).then(() => {
        usertStore.setUserToken('')
        router.push({ path: '/login' })
        ElMessage({
            type: 'success',
            message: 'Delete completed',
        })
    }).catch(() => { })
}
</script>

<style scoped>

</style>