<template>
<section>

    <h1>About View</h1>

    <figure class="welcome-card">
        <figcaption>
            <dev-message msg="Welcome!"/>
        </figcaption>
        <picture>
            <img src="../assets/icon512.svg" alt="">
        </picture>
    </figure>

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

///*/// ---------------------------- component


    import DevMessage from '@/components/DevMessage.vue'
    components = { ...components, DevMessage }


///*/// ---------------------------- export ready

export default {

    name: 'About',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },

    mounted () {
        document.title = 'About'
    },

}

///*/// ---------------------------- END
</script>

<style scoped lang="scss">
    .welcome-card {
        max-width:  24em;
        margin: 1em auto;
        figcaption {
            text-align: center;
            font-size:  2.5em;
        }
    }
</style>
