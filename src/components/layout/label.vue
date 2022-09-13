<template>
    <div style="height: 38px;user-select:none;">
        <div style="position: relative;width: 100%;height: 100%;">
            <el-icon
                style="position: absolute;height: 100%;width: 30px;border-right: 1px solid var(--el-border-color);">
                <i-ep-ArrowLeftBold></i-ep-ArrowLeftBold>
            </el-icon>
            <el-icon
                style="position: absolute;height: 100%;width: 30px;right: 0;border-left: 1px solid var(--el-border-color);">
                <i-ep-ArrowRightBold></i-ep-ArrowRightBold>
            </el-icon>
            <div style="position: absolute;left: 35px;right: 35px;top: 3px;bottom: 0;">
                <el-scrollbar ref="scrollbarRef">
                    <div style="display: flex;">
                        <el-tag v-for="tag in 15" :key="tag" closable size="large" type="info"
                            style="margin-right:5px;">
                            {{ tag }}
                        </el-tag>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity"
const max = ref(0)

</script>

<style scoped>
:deep(.el-scrollbar__bar) {
    display: none;
}
</style>