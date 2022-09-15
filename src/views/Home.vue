<template>
    <div style="color: var(--yanse1);">
        home
    </div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-date-picker v-model="value1" type="date" value-format="YYYY-MM-DD" />
    {{value1}}
</template>
<script setup lang="ts" name="home">
import { ref } from "@vue/reactivity";
const value1 = ref<string>('')
let a1: Array<object> = []
</script>


<style scoped>

</style>