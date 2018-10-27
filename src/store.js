import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate' // 将vuex转换为localstorage


/* module */
import index from './store/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        index,
    },
    plugins: [createPersistedState({
        key: "new_vuex" // 本地存储的key名称，默认为vuex
    })]
})

export default store