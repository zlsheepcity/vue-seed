/* Router HQ */

import Vue          from 'vue'
import VueRouter    from 'vue-router'

Vue.use(VueRouter)


///*/// ---------------------------- routes


import routes from './routes.js'


///*/// ---------------------------- create


const router = new VueRouter({
 // mode: 'history',
    base: '',
    routes,
})


///*/// ---------------------------- export ready

export default router
