<template>
<section>

<!-- =============================== Header -->

<!-- =============================== -->

</section>
</template>
<script>

///*/// ---------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let watch       = {}
    let data        = {}


////////////////////////////////////
    data = {
        msg:'',
        log:[],
    ...data }
////////////////////////////////////


///*/// ---------------------------- components


    import WelcomePage from '@/views/Welcome.vue'
    components = { ...components, WelcomePage }


///*/// ---------------------------- export ready

export default {

    name: 'App',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

    mounted () {},

}

///*/// ---------------------------- END
</script>
