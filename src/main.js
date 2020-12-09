let RUN = {}

// ---------------------------- use framework

import Vue     from 'vue'
import router  from './framework/router'
import store   from './framework/store'
import vuetify from './framework/vuetify';

RUN = {
   router,
   store,
   vuetify,
...RUN }

import wrap    from './framework/vue-wrap';
import debug   from './framework/vue-debug';
Vue.component( 'wrap',  wrap  )
Vue.component( 'debug', debug )

// ---------------------------- project data

// ---------------------------- app

import App from './App.vue'
const  DOM_id = '#app'
const  render = f => f(App)

RUN = {
    render,
...RUN }

// Run!

new Vue({...RUN}).$mount(DOM_id)
