import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout/layout.vue' //页面骨架

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: "/home",
        },
        {
            path: '/home',
            name: 'home',
            component: layout,
            children: []
        },
        {
            path: '*',
            name: '404',
            component: () =>
                import ( /* webpackChunkName: "404" */ './views/404/404.vue')
        }
    ]
})