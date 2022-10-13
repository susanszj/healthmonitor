import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装vant组件库
import Vant from 'vant'
// 定制主题，要把后缀名css改成less
import 'vant/lib/index.less'

// 导入inconfont字体库
import './iconfont/font/iconfont.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
