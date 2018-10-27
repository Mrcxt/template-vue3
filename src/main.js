/* js */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' // UI组件
// import VueParticles from 'vue-particles' //canvas散点图
import jsCookie from 'js-cookie' //cookies处理插件
import Day from 'dayjs' // 时间处理插件
import request from './api/request'; // ajax

/* css */
import 'normalize.css' // 通用样式初始化
import './style/reset.less' // 自定义样式初始化
import 'element-ui/lib/theme-chalk/index.css' // element-ui
import './style/element-reset.less' // element-ui修改样式
import './style/index.less' // 自定义全局样式
import './style/utils.less' // 工具类样式

/* install */
// Vue.use(VueParticles)
Vue.use(ElementUI, {
    size: "mini"
})

Vue.prototype.$ajax = request
Vue.prototype.$cookie = jsCookie
Vue.prototype.$day = Day

/* vue config */
Vue.config.productionTip = false

/* init */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')