<template>
  <div class="outermost-layer">
    <div class="sidebar-toggle">
      <el-icon size="26px" @click="isCollapseTF()">
        <i-ep-Expand v-if="layoutStore.isCollapse"></i-ep-Expand>
        <i-ep-Fold v-else></i-ep-Fold>
      </el-icon>
    </div>
    <div class="fill-flex"></div>
    <div class="diablo-toggle">
      <el-icon size="20px" @click="toggleDark()">
        <i-ep-Moon v-if="isDark"></i-ep-Moon>
        <i-ep-Sunny v-else></i-ep-Sunny>
      </el-icon>
    </div>
    <div class="language-switching">
      <div @click="setUseLanguage()">
        {{ locale == 'en' ? 'En' : '中' }}
      </div>
    </div>
    <div class="personal-operation">
      <el-dropdown @command="handleCommand">
        <span>
          <el-avatar :size="30" src="../../assets/photo.png">
            <img src="../../assets/4b8ba25a6dae066f4bf41608c6bb7ff.png" />
          </el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
            <el-dropdown-item command="exitLogin" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'//暗色模式
import { useLayoutStore } from '@/stores/layout'//pinia 状态管理
import { useUserStore } from '@/stores/user'//pinia 状态管理
import { useRouter } from 'vue-router'//reuter 路由
import { ElMessage, ElMessageBox } from 'element-plus'//element 组件
import { useI18n } from 'vue-i18n'//useI18n 多语言
//暗色模式切换
const isDark = useDark()
const toggleDark = useToggle(isDark)

const layoutStore = useLayoutStore()
/**
 * 切换侧边栏收缩
 */
const isCollapseTF = () => layoutStore.isCollapseTF()

const { locale } = useI18n()
/**
 * 多语言切换
 */
const setUseLanguage = () => locale.value = locale.value == 'zh-cn' ? 'en' : 'zh-cn'

/**
 * 个人操作
 */
const handleCommand = (command: string) => {
  //退出登录
  if (command == 'exitLogin') {
    exitLogin()
  }
}
//退出登录
const usertStore = useUserStore()
const router = useRouter()
/**
 * 退出登录
 */
const exitLogin = () => {
  ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  }).then(() => {
    usertStore.setUserToken('')
    router.push({ path: '/login' })
    ElMessage({
      type: 'success',
      message: 'Delete completed',
    })
  }).catch(() => { })
}
</script>

<style scoped lang="less">
/* 最外层 */
.outermost-layer {
  display: flex;
  height: 100%;

  //填充flex
  .fill-flex {
    flex: 1;
  }

  // 侧边栏切换
  .sidebar-toggle {
    padding: 7px;
  }

  // 暗黑模式切换
  .diablo-toggle {
    padding: 10px;
  }

  // 语言切换
  .language-switching {
    padding: 10px;
    font-weight: 700;

    div {
      width: 25px;
      text-align: center;
    }
  }

  // 个人操作
  .personal-operation {
    padding: 5px 5px 5px 10px;

  }
}
</style>