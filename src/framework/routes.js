let Routes = [

    // dev

    {
        component: () => import(
            /* webpackChunkName: "Dev_home" */
                        '../views/Dev_home.vue'),
            name:                'Dev_home',
            path:               '/',
    },

    {
        component: () => import(
            /* webpackChunkName: "Dev_blog" */
                        '../views/Dev_blog.vue'),
            name:                'Dev_blog',
            path:               '/Dev_blog',
    },

    {
        component: () => import(
            /* webpackChunkName: "Dev_blog" */
                        '../views/Dev_blog.vue'),
            name:                'Dev_blog',
            path:               '/Dev_blog/:pageid',
            props: true, // props = [ ...props, 'pageid' ]
    },

]

// ---------------------------- 404

Routes = [
    {
        path:  '/page-not-found',
        alias: '/*',
        component: { render: (h) => h('div', ['404-vue, Page Not Found In Framework']) },
        meta: {
            requiresAuthorisation: false,
        },
    },
...Routes ]

// ---------------------------- export ready

export default Routes
