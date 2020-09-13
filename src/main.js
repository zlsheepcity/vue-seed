/** seed main
    2020.9.11
 */

///*/// ---------------------------- Framework Environment

import Vue    from 'vue'
import App    from './App.vue'
const  AppID  = '#app'
let    VueDNA = {}

Vue.config.productionTip = false

///*/// Render

VueDNA = {
    render: function (h) { return h(App) },
...VueDNA }

///*/// Router

import router  from './router'
VueDNA = { ...VueDNA, router }

///*/// Store

import store   from './store'
VueDNA = { ...VueDNA, store }


///*/// ---------------------------- App Render

new Vue(VueDNA).$mount(AppID)
