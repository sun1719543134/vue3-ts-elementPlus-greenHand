<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'//element-plus 设置中文
</script>
<template>
  <el-config-provider :locale="zhCn">
    <div id="app">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>
<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
}
</style>
