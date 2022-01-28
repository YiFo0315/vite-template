import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

function getRoutes() {
  // const { routes } = loadRouters();
  /**
	 * 如果要对 routes 做一些处理，请在这里修改
	 */
  const routes = [
    {
      path: '/',
      component: () => import('../views/Base.vue'),
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/register/Register.vue')
        },
        {
          path: 'university',
          name: 'university',
          component: () => import('../views/university/University.vue')
        },
        {
          path: 'university/:id',
          name: 'university_details',
          component: () => import('../views/university/details/Details.vue')
        },
        {
          path: 'major/:id',
          name: 'major_details',
          component: () => import('../views/major/details/Details.vue')
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/index/Index.vue')
    }
  ]
  return routes
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes()
})

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router

/** 以下代码不要修改 */
// function loadRouters() {
// 	const context = import.meta.globEager("../views/**/*.vue");
//     const routes: RouteRecordRaw[] = [];
//
//     Object.keys(context).forEach((key: any) => {
//         if (key === "./index.ts") return;
// 		let name = key.replace(/(\.\.\/views\/|\.vue)/g, '');
// 		let path = "/" + name.toLowerCase();
// 		if (name === "Index") path = "/";
// 		routes.push({
// 			path: path,
// 			name: name,
// 			component: () => import(`../views/${name}.vue`)
// 		})
//     });
//
//     return { context, routes }
// }
