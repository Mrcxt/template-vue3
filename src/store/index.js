const index = {
    namespaced: false, //是否模块化
    state: {
        user_id: null, //用户id
    },
    getters: {
        user_id: state => state.user_id,
    },
    mutations: {
        SET_USER_ID(state, user_id) {
            state.user_id = user_id
        },
    },
    actions: {

    }
}


export default index