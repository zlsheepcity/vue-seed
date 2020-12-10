/* Router HQ */

let RouterDNA = {
 // mode: 'history',
    base: '',
}

// routes

import routes from './routes.js'
RouterDNA = { ...RouterDNA, routes }

// use router

import Vue          from 'vue'
import VueRouter    from 'vue-router'
Vue.use(VueRouter)

// custom settings


// ---------------------------- export ready

const router = new VueRouter(RouterDNA)
export default router
