<template>
  <div style="height: 41px;user-select:none;">
    <el-tabs v-model="routerName" type="card" class="demo-tabs" :before-leave="clickTheTab" @edit="closeLabel">
      <el-tab-pane v-for="tag, index1 of layoutStore.labelCache" :label="tag.meta.title" :name="tag.name" :key="index1"
        :closable="tag.name != 'home'"></el-tab-pane>
    </el-tabs>
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
//监听当前路由变化
watch(() => route.fullPath, () => {
  routerName.value = route.name
  layoutStore.setLabelCache(router.currentRoute.value)
})
/**
 * 点击删除标签导航栏按键函数
 */
const closeLabel = (value1: string, value2: 'remove' | 'add') => {
  if (value2 == 'remove') {
    var index = layoutStore.labelCache.map((item: any) => item.name).indexOf(value1)
    if (routerName.value === value1) {
      layoutStore.labelCache.splice(index, 1)
      if (index == 0) {
        router.push('home')
      } else {
        router.push(layoutStore.labelCache[index - 1].name)
      }
    } else {
      layoutStore.labelCache.splice(index, 1)
    }
  }
}
/**
 * 点击标签导航栏跳转
 */
const clickTheTab = (activeName: string) => router.push(activeName)
</script>
<style scoped>
:deep(.el-scrollbar__bar) {
  display: none;
}
</style>