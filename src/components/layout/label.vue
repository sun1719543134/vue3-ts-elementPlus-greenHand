<template>
  <div style="height: 38px;user-select:none;">
    <div style="position: relative;width: 100%;height: 100%;">
      <el-icon style="position: absolute;height: 100%;width: 30px;border-right: 1px solid var(--el-border-color);">
        <i-ep-ArrowLeftBold></i-ep-ArrowLeftBold>
      </el-icon>
      <el-icon
        style="position: absolute;height: 100%;width: 30px;right: 0;border-left: 1px solid var(--el-border-color);">
        <i-ep-ArrowRightBold></i-ep-ArrowRightBold>
      </el-icon>
      <div style="position: absolute;left: 35px;right: 35px;top: 3px;bottom: 0;">
        <el-scrollbar ref="scrollbarRef">
          <div style="display: flex;">
            <el-tag v-for="tag,index1 of layoutStore.labelCache" :key="index1" :closable="tag.name!='home'" size="large"
              :type="tag.name==routerName?'':'info'" style="margin-right:5px;" @close="closeLabel(tag,index1)"
              @click="clickTheTab(tag)">
              {{ tag.name }}
            </el-tag>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'
const routerName: any = ref('')
const layoutStore = useLayoutStore()
const router = useRouter()
layoutStore.setLabelCache(router.currentRoute.value)
routerName.value = router.currentRoute.value.name
const route = useRoute()
watch(() => route.fullPath, () => {
  routerName.value = route.name
  layoutStore.setLabelCache(router.currentRoute.value)
})
function closeLabel(value1: any, value2: number) {
  if (routerName.value === value1.name) {
    layoutStore.labelCache.splice(value2, 1)
    console.log(layoutStore.labelCache[value2 - 1].name)
    router.push(layoutStore.labelCache[value2 - 1].name)
  } else {
    layoutStore.labelCache.splice(value2, 1)
  }
}
function clickTheTab(value1: any) {
  router.push(value1.name)
}
</script>

<style scoped>
:deep(.el-scrollbar__bar) {
  display: none;
}
</style>