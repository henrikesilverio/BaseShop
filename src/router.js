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
                    component: () => import('@/views/home/Home'),
                },
                {
                    name: 'product',
                    path: '/product/:id',
                    component: () => import('@/views/product/Product'),
                },
                {
                    name: 'authentication',
                    path: '/login',
                    component: () => import('@/views/authentication/Authentication'),
                },
                {
                    name: 'account',
                    path: '/account',
                    component: () => import('@/views/account/Account'),
                },
                {
                    name: 'checkout',
                    path: '/checkout',
                    component: () => import('@/views/shopping/Shopping'),
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