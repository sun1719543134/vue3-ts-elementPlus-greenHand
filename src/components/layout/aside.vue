<template>
    <el-menu style="border-right: 0;" :default-active="defaultActive" :collapse="store.isCollapse" @open="handleOpen"
        @close="handleClose" unique-opened router>
        <template v-for="item1 in aa11" :key="item1.name">
            <el-menu-item v-if="!item1.children||item1.children.length==1"
                :index="!item1.children?item1.name:item1.children[0].name">
                <el-icon>
                    <i-ep-menu></i-ep-menu>
                </el-icon>
                <template #title>{{!item1.children?item1.name:item1.children[0].name}}</template>
            </el-menu-item>
            <el-sub-menu v-if="item1.children&&item1.children.length>1" :index="item1.name">
                <template #title>
                    <el-icon>
                        <i-ep-menu></i-ep-menu>
                    </el-icon>
                    <span>{{item1.name}}</span>
                </template>
                <el-menu-item v-for="item2 in item1.children" :index="item2.name" :key="item2.name">
                    {{item2.name}}
                </el-menu-item>
            </el-sub-menu>
        </template>
    </el-menu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useLayoutStore } from '@/stores/layout'
import { useRouter, useRoute } from 'vue-router'
//同步侧边栏收缩
const store = useLayoutStore()
//从路由中获取侧边栏内容
const Router = useRouter()
const aa11: any[] = []
for (var item1 of Router.options.routes) {
    if (!item1.meta || !item1.meta.sidebar) {
        if (item1.children && item1.children.length > 0) {
            const cc11 = []
            for (var item2 of item1.children) {
                if (!item2.meta || !item2.meta.sidebar) {
                    cc11.push(item2)
                }
            }
            if (cc11.length > 0) {
                item1.children = cc11
                aa11.push(item1)
            }
        } else if (!item1.children) {
            aa11.push(item1)
        }
    }
}
//侧边栏选择的路由
const defaultActive: any = ref('')
defaultActive.value = Router.currentRoute.value.name

const Route = useRoute()
watch(() => Route.fullPath, () => {
    defaultActive.value = Route.name
})

const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
</script>

<style scoped>
.el-sub-menu :deep(span) {
    min-width: 160px;
}
</style>