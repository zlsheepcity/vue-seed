/* Router HQ */

import Vue          from 'vue'
import VueRouter    from 'vue-router'

Vue.use(VueRouter)


///*/// ----------------------------


import routes from './routes.js'

const  Router = new VueRouter({
    mode: 'history',
    base: '',
    routes,

    // Prevents window from scrolling back to top
    // when navigating between components/views
    // VueScrollTo.scrollTo("#app", 500, { offset: savedPosition.y })
    scrollBehavior ( to, from, savedPosition ) {
        if (savedPosition) { return savedPosition }
        else               { return { x:0, y:0 }  }
    },

})

///*/// ----------------------------

// Add a body class specific to the route we're viewing

const routes_template = [
    {
      path: '/:pageSlug',
      name: 'Page',
      component: Page,
    },
    {
      path: '/:year/:month/:day/:postSlug',
      name: 'Post',
      component: Post,
    },
]

Router.afterEach( (to, from) => {
    const slug = !(to.params.postSlug)
        ? to.params.pageSlug
        : to.params.postSlug
    let body = document.querySelector('body')
    body.classList.add('vue-page--' + slug)
})

///*/// ----------------------------

Router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta?.requiresAuth)) {
    if (isAuthenticated()) {
      next()
    } else {
      next('/auth-required')
    }
  } else {
    next()
  }
})


///*/// ----------------------------

export default Router
