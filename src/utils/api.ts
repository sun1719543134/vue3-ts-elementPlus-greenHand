import requestCurrency from '@/utils/request-currency'//统一处理错误信息的接口,不需要写 catch
import request from '@/utils/request'
//调取接口可能传的值
interface infoTow {
    params?: object;
}
//get获取淘宝时间
export function getTest1(row1: infoTow) {
    return requestCurrency({
        url: '/rest/api3.do',//此处为自己请求地址
        method: 'get',
        params: row1.params
    })
}
//get获取淘宝时间
export function getTest2(params: object) {
    return request({
        url: '/rest/api3.do',//此处为自己请求地址
        method: 'get',
        params: params
    })
}
