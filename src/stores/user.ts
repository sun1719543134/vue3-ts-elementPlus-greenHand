import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userToken: '',
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2
    },
    actions: {
        // increment() {
        //     this.counter++
        // },
        // isCollapseTF() {
        //     this.isCollapse = !this.isCollapse
        // }
        setUserToken(value1: string) {
            this.userToken = value1
        }
    },
    persist: {
        enabled: true,// 自定义持久化参
        strategies: [{
            // 自定义key 默认为 Store 的id
            // key: 'user_store',
            // 自定义存储方式，默认sessionStorage
            storage: localStorage,
            // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
            paths: ['userToken'],
        }]
    },

})
