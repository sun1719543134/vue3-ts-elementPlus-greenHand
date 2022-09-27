import request from '@/utils/request'
import { ElMessage, ElLoading } from 'element-plus'//全局加载 提示框
//调取接口需要的数据继承vue传过来的值
interface infoOne {
    url: string;
    method?: string;
    params?: object;
}
//调取axios接口
function requestCurrency(row1: infoOne) {
    return new Promise((resolve, _reject) => {
        ElLoading.service({ fullscreen: true })
        request({
            url: row1.url,//此处为自己请求地址
            method: row1.method,
            params: row1.params
        }).then(res1 => {
            ElLoading.service().close()
            console.log('res1', res1)
            resolve(res1)
        }).catch(error => {
            ElLoading.service().close()
            if (error.status) {
                switch (error.status) {
                    default:
                        ElMessage.error('status:' + error.status)
                }
            }
            console.log('error', error)
            resolve(error)
        })
    })
}
export default requestCurrency