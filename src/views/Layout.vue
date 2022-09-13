<template>

    <el-container style="height: 100%;">
        <el-header style="border-bottom: 1px solid var(--el-border-color);">
            <layout-header></layout-header>
        </el-header>
        <el-container>
            <el-aside width="''" style="border-right: 1px solid var(--el-border-color);">
                <layout-aside>
                </layout-aside>
            </el-aside>
            <el-container>
                <el-header height="''" style="border-bottom: 1px solid var(--el-border-color);padding: 0;">
                    <layout-label></layout-label>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import layoutHeader from '@/components/layout/header.vue'//头部组件
import layoutAside from '@/components/layout/aside.vue'//左边侧边栏组件
import layoutLabel from '@/components/layout/label.vue'//标签导航栏
</script>

<style scoped>
.common-layout {
    height: 100vh;
}
</style>