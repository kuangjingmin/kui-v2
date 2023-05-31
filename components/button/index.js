/*
 * @Author: jingmin-kuang
 * @Date: 2023-05-31 14:14:37
 * @LastEditTime: 2023-05-31 14:19:27
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
// 导入组件，组件必须声明 name
import KButton from './index.vue'

// 为组件提供 install 安装方法，供按需引入
KButton.install = function (Vue) {
  Vue.component(KButton.name, KButton)
}

// 导出组件
export default KButton
