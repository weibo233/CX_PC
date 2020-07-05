import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from "@/view/home"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:resolve => require(['@/view/home'],resolve),
    },
    {
      path:"/tender",
      name:"tender",
      component:resolve => require(['@/view/tender'],resolve)
    },
    {
      path:"/enterprise",
      name:"enterprise",
      component:resolve => require(['@/view/enterprise'],resolve)
    },
    {
      path:"/policy",
      name:"policy",
      component:resolve => require(['@/view/policy'],resolve)
    },
    {
      path:"/charging",
      name:"charging",
      component:resolve => require(['@/view/charging'],resolve)
    },
    {
      path:"/talent",
      name:"talent",
      component:resolve => require(['@/view/talent'],resolve)
    },
    {
      path:"/contact",
      name:"contact",
      component:resolve => require(['@/view/contact'],resolve)
    },
    {
      path:"/about",
      name:"about",
      component:resolve => require(['@/view/about'],resolve)
    },
    {
      path:"/search",
      name:"search",
      component:resolve => require(['@/view/search'],resolve)
    },
  ]
})

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
