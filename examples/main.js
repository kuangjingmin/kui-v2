/*
 * @Author: jingmin-kuang
 * @Date: 2023-05-31 13:57:55
 * @LastEditTime: 2023-05-31 14:18:43
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import kui from '../components'
// 注册组件库
Vue.use(kui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
