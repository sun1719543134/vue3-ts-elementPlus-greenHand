import { defineStore } from 'pinia'
type Todo = {
    path: string,
    name: string,
    meta: object
}
export const useLayoutStore = defineStore({
    id: 'layout',
    state: () => ({
        counter: 0,
        isCollapse: <boolean>true,
        labelCache: <any>[],

    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
        include() {
            let a: Array<string> = []
            for (var i of this.labelCache) {
                console.log(i)
                a.push(i['name'])
            }
            return a
        },
    },
    actions: {
        increment() {
            this.counter++
        },
        isCollapseTF() {
            this.isCollapse = !this.isCollapse
        },
        setLabelCache(value1: any) {

            const a = {
                name: value1.name,
                path: value1.path,
                meta: value1.meta
            }
            if (value1.meta?.labelCache === true) {
                for (var i of this.labelCache) {
                    if (i.name === a.name) {
                        return
                    }
                }
                this.labelCache.push(a)
            }
        },
    },
    persist: {
        enabled: true,// 自定义持久化参
        strategies: [{
            // 自定义key 默认为 Store 的id
            // key: 'layout_store',
            // 自定义存储方式，默认sessionStorage
            storage: localStorage,
            // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
            paths: ['isCollapse'],
        }, {
            storage: sessionStorage,
            paths: ['labelCache'],
        }]
    },

})
