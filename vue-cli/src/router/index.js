import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Index from '@/components/Index'
import Error from '@/components/Error'//处理404
import List from '@/components/list'
import Sublist1 from '@/components/sublist1'
import Sublist2 from '@/components/sublist2'

Vue.use(Router)

export default new Router({
  // mode默认值是hash 页面不带#
  mode: "history",
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      // 钩子函数 也可以在模板中配置
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        // console.log(next);
        // next(false);// false不跳转 默认是true
        next();
      }
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: "/list",
      name: "list",
      component: List,
      children: [{
        path: "/sublist1",
        name: "sublist1",
        component: Sublist1
      }, {
        path: "/list/sublist2",
        name: "sublist2",
        component: Sublist2
      }
      ]
    },
    {
      path: "*",
      component: Error
    }
  ]
})
