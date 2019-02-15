import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Home from './views/Home.vue'
import Mine from './views/Mine.vue'
import Test from './views/Test.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import Error from './views/Error.vue'
import Count from './views/Count.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        console.log(to, from, next);
        next();
      }
    },
    {
      path: '/about/:name/:age',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      children: [
        {
          path: "/a",
          name: 'A',
          component: A
        }, {
          path: '/b',
          name: 'B',
          component: B
        }
      ]
    },
    {
      path: '/redict/:name/:age',
      redirect: '/about/:name/:age'
    },
    {
      path: '/',
      component: Home,
      alias: '/abc'
    },
    {
      path: '*',
      component: Error
    },
    {
      path:'/count',
      component:Count
    }
  ]
})
