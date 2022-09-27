import request from '@/utils/request'
import { ElMessage } from 'element-plus'
interface infoOne extends infoTow {
    url: string;
    method?: string;
}
interface infoTow {
    params?: object;
}

function getTest3(row1: infoOne) {
    return new Promise((resolve, reject) => {
        request({
            url: row1.url,//此处为自己请求地址
            method: row1.method,
            params: row1.params
        }).then(res1 => {
            console.log('res1', res1)
            resolve(res1)
        }).catch(error => {
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
export function getTest1(row1: infoTow) {
    return getTest3({
        url: '/rest/api3.do',//此处为自己请求地址
        method: 'get',
        params: row1.params
    })
    // getTest3({
    //     url: '/rest/api3.do?api=mtop.common.getTimestamp',//此处为自己请求地址
    //     method: 'get',
    // })
}
export function getTest2(params: object) {
    return request({
        url: '/rest/api3.do',//此处为自己请求地址
        method: 'get',
        params: params
    })
}
