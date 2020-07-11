// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import BaiduMap from 'vue-baidu-m;ap'

Vue.use(ElementUI)
// Vue.use(BaiduMap, {
//   ak: 'r8kPn7pGj2Rp7ruAECrDfWBMKuFxYKSB'
// })

/**
 * 添加swiper
*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import Swiper from "swiper";
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
