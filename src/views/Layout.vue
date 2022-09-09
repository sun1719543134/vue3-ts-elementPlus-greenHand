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
            <el-main>
                <div style="height: 50px;">
                    <el-scrollbar :min-size="0" :always="true">
                        <div style="display: flex;">
                            <div v-for="item1,index1 in 50" :key="index1" style="height: 50px;">
                                {{ item1 }}
                            </div>
                        </div>
                    </el-scrollbar>
                </div>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import layoutHeader from '@/components/layout/header.vue'//头部组件
import layoutAside from '@/components/layout/aside.vue'//左边侧边栏组件
</script>

<style scoped>
.common-layout {
    height: 100vh;
}
</style>