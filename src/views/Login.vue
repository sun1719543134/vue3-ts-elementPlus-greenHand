<template>
  <div class="login-style">
    <div>
      <el-form ref="ruleFormRef" label-position="top" :model="ruleForm" status-icon :rules="rules" label-width="auto">
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
  </div>

</template>

<script setup lang="ts" name="login">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useDark } from '@vueuse/core'//暗色模式切换
import { useI18n } from 'vue-i18n'//多语言
const { t } = useI18n();
const ruleFormRef = ref<FormInstance>()
useDark()
const router = useRouter();
const store = useUserStore()
/**
 * 调取登录接口登录
 */
const login = () => {
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
/**
 * 验证账号密码格式是否正确
 */
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
.login-style {
  // 登录页面样式
  background-image: url('../assets/leimu-102270816.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  >div {
    // 登录悬浮框样式
    width: 300px;
    border: 1px solid var(--el-border-color);
    border-radius: 5px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    margin-right: 10%;

    .confirm-style {
      // 登录确认按键样式
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>