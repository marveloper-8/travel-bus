import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WhyTravelBus from './pages/WhyTravelBus'
import ComingSoon from './pages/ComingSoon'

import Footer from './components/Footer'
import Header from './components/Header'

Vue.component('header-comp', Header)
Vue.component('footer-comp', Footer)

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path:'/', component:HomePage},
    {path:'/about', component:AboutPage},
    {path:'/why-travelbus', component:WhyTravelBus},
    {path:'/coming-soon', component:ComingSoon}
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
