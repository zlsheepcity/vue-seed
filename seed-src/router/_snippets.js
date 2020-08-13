///*/// ----------------------------


const router = new Router({
    mode: 'history',
    base: '',
    routes,

    // Prevents window from scrolling back to top
    // when navigating between components/views
    scrollBehavior ( to, from, savedPosition ) {
        if (savedPosition) { return savedPosition }
        else               { return { x:0, y:0 }  }
    },

})


///*/// ----------------------------


[

    {
      path: '/:year/:month/:day/:postSlug',
      name: 'Post',
      component: Post,
    },
    {
      path: '/:pageSlug',
      name: 'Page',
      component: Page,
    },

]

router.afterEach( (to, from) => {
  // Add a body class specific to the route we're viewing
  let body = document.querySelector('body')

  const slug = !(to.params.postSlug)
    ? to.params.pageSlug
    : to.params.postSlug;
  body.classList.add('vue--page--' + slug);
})


///*/// ----------------------------
