<template>
    <div style="display: flex;">
        <div @click="isCollapseTF()">
            侧边栏收缩
        </div>
        <div @click="toggleDark()">
            {{ isDark ? '暗色' : '亮色' }}
        </div>
    </div>

</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'//暗色模式切换
import { useLayoutStore } from '@/stores/layout'//pinia 状态管理引入
//暗色模式切换
const isDark = useDark()
const toggleDark = useToggle(isDark)
//切换侧边栏收缩
const store = useLayoutStore()
function isCollapseTF() {
    store.isCollapseTF()
}
</script>

<style scoped>

</style>