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
    <div @click="exitLogin()" class="log-out">
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
import { useI18n } from 'vue-i18n'
//暗色模式切换
const isDark = useDark()
const toggleDark = useToggle(isDark)

const layoutStore = useLayoutStore()
/**
 * 切换侧边栏收缩
 */
function isCollapseTF() {
  layoutStore.isCollapseTF()
}
/**
 * 多语言切换
 */
const { locale } = useI18n()
function setUseLanguage() {
  locale.value = locale.value == 'zh-cn' ? 'en' : 'zh-cn'
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

  // 退出登录
  .log-out {
    padding-left: 10px;
    line-height: 40px;
  }
}
</style>