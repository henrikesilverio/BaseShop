import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('@/views/Index'),
            children: [
                {
                    name: 'home',
                    path: '/',
                    component: () => import('@/views/product/Index'),
                },
                {
                    name: 'authentication',
                    path: '/login',
                    component: () => import('@/views/authentication/Index'),
                },
            ],
        },
    ],
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     if (store.state.isLogin) {
//       next();
//     } else {
//       next({
//         path: "/",
//       });
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (store.state.isLogin) {
//       next({
//         path: "/profile",
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
export default router