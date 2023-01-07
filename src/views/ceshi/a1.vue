<template>
  <el-input v-model.number="value1" />
  <el-input v-model.number="value2" />
  <el-input v-model.number="object1.value3" />
  <el-date-picker v-model="object1.value4" type="date" value-format="YYYY-MM-DD" />
</template>
<script setup lang="ts" name="a1">
import { ref, reactive, computed, watch } from 'vue'
const value1 = ref(0)
const value2 = ref(0)
const object1 = reactive({
  value3: 0,
  value4: '2023-01-07'
})
//将需要统一监听的数据进行拼接
const calculation1 = computed(() => {
  return value1.value + '' + object1.value3 + '' + object1.value4
})
//直接监听拼接后的数据
watch(calculation1, () => {
  console.log('value1,value3,value4其中一个有变化')
  console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
})

</script>


<style>

</style>