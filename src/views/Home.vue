<template>
  <div style="color: var(--yanse1);">
    home
  </div>
  <el-button @click="test1()">Default</el-button>
  <el-button type="primary" @click="test2()">统一处理</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-date-picker v-model="value1" type="date" value-format="YYYY-MM-DD" />
  <div>{{ $t('common.more') }}</div>
  {{ value1 }}
</template>
<script setup lang="ts" name="home">
import { ref } from "@vue/reactivity";
import { getTest2, getTest1 } from '@/utils/api'
function test1() {
  const params = {
    api: 'mtop.common.getTimestamp'
  }
  getTest2(params).then(response => {
    console.log("结果", response);
  }).catch(error => {
    console.log('获取失败！')
  });
}
function test2() {
  const params = {

    params: {
      api: 'mtop.common.getTimestamp'
    }
  }
  getTest1(params).then((res1: any) => {
    if (res1.status == 200) {
      console.log("结果200", res1);
    }

  })
}

const value1 = ref<string>('')
let a1: Array<object> = []
</script>


<style scoped>

</style>