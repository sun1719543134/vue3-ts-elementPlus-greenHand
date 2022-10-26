<template>
  <el-container style="height: 100%;">
    <el-aside width="''" style="border-right: 1px solid var(--el-border-color);" class="suppress-selected-text">
      <LayoutAside>
      </LayoutAside>
    </el-aside>
    <el-container>
      <el-header height="41px" style="border-bottom: 1px solid var(--el-border-color);padding: 0 10px 0 0;"
        class="suppress-selected-text">
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-container>
        <el-header height="''" style="border-bottom: 1px solid var(--el-border-color);padding: 0;"
          class="suppress-selected-text">
          <LayoutLabel></LayoutLabel>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive :include="layoutStore.include">
              <component :is="Component"></component>
            </keep-alive>
          </router-view>
          {{layoutStore.include}}
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="layout">
import LayoutHeader from '@/components/layout/header.vue'//头部组件
import LayoutAside from '@/components/layout/aside.vue'//左边侧边栏组件
import LayoutLabel from '@/components/layout/label.vue'//标签导航栏
import { useLayoutStore } from '@/stores/layout'
const layoutStore = useLayoutStore()
</script>

<style scoped>
.common-layout {
  height: 100vh;
}
</style>