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
      title:"首页",
      component:resolve => require(['@/view/home'],resolve),
    },
    {
      path:"/tender",
      name:"招标信息",
      component:resolve => require(['@/view/tender'],resolve)
    },
    {
      path:"/enterprise",
      name:"企业荣誉",
      component:resolve => require(['@/view/enterprise'],resolve)
    },
    {
      path:"/policy",
      name:"政策文件",
      component:resolve => require(['@/view/policy'],resolve)
    },
    {
      path:"/charging",
      name:"收费标准",
      component:resolve => require(['@/view/charging'],resolve)
    },
    {
      path:"/talent",
      name:"人才招聘",
      component:resolve => require(['@/view/talent'],resolve)
    },
    {
      path:"/contact",
      name:"联系我们",
      component:resolve => require(['@/view/contact'],resolve)
    },
    {
      path:"/about",
      name:"关于我们",
      titl:"关于我们",
      component:resolve => require(['@/view/about'],resolve)
    },
    {
      path:"/search",
      name:"search",
      component:resolve => require(['@/view/search'],resolve)
    },
    // 企业新闻
    {
      path:"/CorporateNews",
      name:"CorporateNews",
      component:resolve => require(['@/view/CorporateNews'],resolve)
    },
    // 行业新闻
    {
      path:"/IndustryNews",
      name:"IndustryNews",
      component:resolve => require(['@/view/industrynews'],resolve)
    },
    //详情
    {
      path:"/detail",
      name:"detail",
      component:resolve => require(['@/view/detail'],resolve)
    },
    //下载详情
    {
      path:"/downloadDetail",
      name:"downloadDetail",
      component:resolve => require(['@/view/detaildownload'],resolve)
    }
  ]
})

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
