<script setup lang="ts" name="app">
import en from 'element-plus/lib/locale/lang/en'//element-plus 设置英文(默认)
import zhCn from 'element-plus/lib/locale/lang/zh-cn'//element-plus 设置中文

import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

// 语言配置整合
const messages: any = {
  en: en,
  'zh-cn': zhCn
}
</script>
<template>
  <el-config-provider :locale="messages[locale]">
    <div id="app">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>
<style>
/* 禁止选中文本 */
.suppress-selected-text {
  -webkit-touch-callout: none;
  /*系统默认菜单被禁用*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -khtml-user-select: none;
  /*早期浏览器*/
  -moz-user-select: none;
  /*火狐*/
  -ms-user-select: none;
  /*IE10*/
  user-select: none;
}

html,
body {
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
  width: 100%;
  min-height: 600px;
  min-width: 1200px;
}
</style>
