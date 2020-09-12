///*/// ---------------------------- Framework Environment

import Vue    from 'vue'
import App    from './App.vue'
const  AppID  = '#app'
let    VueDNA = {}

Vue.config.productionTip = false

///*/// Render

VueDNA = {
    render: h => h(App),
...VueDNA }

///*/// Router

import router  from './app/router'
VueDNA = { ...VueDNA, router }

///*/// Store

import store   from './app/store/vuex.js'
VueDNA = { ...VueDNA, store }

///*/// UI Library

import vuetify from './app/plugins/vuetify'
VueDNA = { ...VueDNA, vuetify }


///*/// ---------------------------- Custom Components


import ElMarker from './components/el-marker.vue'
Vue.component('el-marker', ElMarker)


///*/// ---------------------------- App Render

new Vue(VueDNA).$mount(AppID)
