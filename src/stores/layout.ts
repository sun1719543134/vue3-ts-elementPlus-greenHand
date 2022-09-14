import { defineStore } from 'pinia'

export const useLayoutStore = defineStore({
    id: 'layout',
    state: () => ({
        counter: 0,
        isCollapse: true,

    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        increment() {
            this.counter++
        },
        isCollapseTF() {
            this.isCollapse = !this.isCollapse
        }
    },
    persist: {
        enabled: true,// 自定义持久化参
        strategies: [{
            // 自定义key
            key: 'layout_store',
            // 自定义存储方式，默认sessionStorage
            storage: localStorage,
            // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
            paths: ['isCollapse'],
        }]
    },

})
