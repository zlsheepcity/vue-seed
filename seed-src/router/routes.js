/* URL Site Map */

export default

[

///*/// ----------------------------


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


///*/// ----------------------------

]
