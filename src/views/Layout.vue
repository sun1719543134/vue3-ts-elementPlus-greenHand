<template>
    <el-container style="height: 100%;">
        <el-header style="border-bottom: 1px solid var(--el-border-color);" class="suppress-selected-text">
            <layout-header></layout-header>
        </el-header>
        <el-container>
            <el-aside width="''" style="border-right: 1px solid var(--el-border-color);" class="suppress-selected-text">
                <layout-aside>
                </layout-aside>
            </el-aside>
            <el-container>
                <el-header height="''" style="border-bottom: 1px solid var(--el-border-color);padding: 0;"
                    class="suppress-selected-text">
                    <layout-label></layout-label>
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
import layoutHeader from '@/components/layout/header.vue'//头部组件
import layoutAside from '@/components/layout/aside.vue'//左边侧边栏组件
import layoutLabel from '@/components/layout/label.vue'//标签导航栏
import { useLayoutStore } from '@/stores/layout'
const layoutStore = useLayoutStore()
</script>

<style scoped>
.common-layout {
    height: 100vh;
}
</style>