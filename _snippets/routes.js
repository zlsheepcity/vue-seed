/* URL List */

export default [

    {
        component: () => import(
            /* webpackChunkName: "Home" */
                        '../views/Home.vue'),
            name:                'Home',
            path:               '/',
    },

    {
        component: () => import(
            /* webpackChunkName: "About" */
                        '../views/About.vue'),
            name:                'About',
            path:               '/About',
    },

    {
        component: () => import(
            /* webpackChunkName: "AboutID" */
                        '../views/AboutID.vue'),
            name:                'AboutID',
            path:               '/About/:id',
            props: true, // props = [ ...props, 'id' ]
    },

///*/// ---------------------------- 404

    {
        path:  '/page-not-found',
        alias: '/*',
        component: { render: (h) => h('div', ['404, Page Not Found']) },
        meta: {
            requiresAuthorisation: false,
        },
    }


///*/// ----------------------------

]
