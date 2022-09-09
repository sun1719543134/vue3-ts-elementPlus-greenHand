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
import { useDark, useToggle } from '@vueuse/core'
import { useLayoutStore } from '@/stores/layout'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const store = useLayoutStore()

function isCollapseTF() {
    store.isCollapseTF()
}
</script>

<style>
</style>