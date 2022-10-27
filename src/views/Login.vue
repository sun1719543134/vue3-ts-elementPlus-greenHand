<template>

  <div class="login-style">
    <el-form ref="ruleFormRef" label-position="top" :model="ruleForm" status-icon :rules="rules" label-width="120px"
      class="demo-ruleForm">
      <el-form-item :label="$t('main.loginAccount')" prop="loginName">
        <el-input v-model.trim="ruleForm.loginName" type="loginName" />
      </el-form-item>
      <el-form-item :label="$t('main.loginPassword')" prop="password">
        <el-input v-model.trim="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
    <div>
      <el-button class="confirm-style" type="primary" @click="submitForm(ruleFormRef)">
        {{ $t('main.SignInNow') }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useDark } from '@vueuse/core'//暗色模式切换
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
const ruleFormRef = ref<FormInstance>()
useDark()
const router = useRouter();
const store = useUserStore()
function login() {
  store.setUserToken('登录token')
  router.push({ path: '/home' })
}

const ruleForm = reactive({
  loginName: '',
  password: ''
})

const rules = reactive({
  loginName: [{ required: true, message: t('main.PleaseEnterYourLoginAccount'), trigger: 'blur' }],
  password: [{ required: true, message: t('main.PleaseEnterYourLoginPassword'), trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    console.log(formEl)
    if (valid) {
      login()
    } else {
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style scoped lang="less">
// 登录框样式
.login-style {
  width: 300px;
  border: 1px solid var(--el-border-color);
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  right: 200px;
  top: 30%;
}

// 登录确认按键样式
.confirm-style {
  width: 100%;
  margin-top: 20px;
}
</style>