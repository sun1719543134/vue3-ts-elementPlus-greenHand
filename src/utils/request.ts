import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
    // baseURL: process.env.BASE_API, // api 的 base_url
    baseURL: '/taobaoapi',
    timeout: 1000 * 30 // 请求响应时间
})
//请求拦截器
request.interceptors.request.use((config: any) => {
    // let token: string = ''//此处换成自己获取回来的token，通常存在在cookie或者store里面
    // if (token) {
    //     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //     config.headers['X-Token'] = token
    //     config.headers.Authorization = + token
    // }
    return config
}, error => {
    //处理请求错误
    console.log("出错啦", error) //
    Promise.reject(error)
})

//响应拦截器
request.interceptors.response.use((response: any) => {
    return response
}, error => {
    console.log('err', error) // for debug
    if (error.response.status) {
        ElMessage.error('status:' + error.response.status)
    } else {
        ElMessage.error('服务器请求错误，请稍后再试')
    }
    return Promise.reject(error)
})
export default request
