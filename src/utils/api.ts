import request from '@/utils/request'

export function getTest1() {
    return request({
        url: '/rest/api3.do?api=mtop.common.getTimestamp',//此处为自己请求地址
        method: 'get'
    })
}
export function getTest2(params: object) {
    return request({
        url: '/rest/api3.do',//此处为自己请求地址
        method: 'get',
        params: params

    })
}
