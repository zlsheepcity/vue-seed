<template>
<section>

    <div class="dev-message">
        Dev message: {{msg}}
    </div>

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

///*/// ---------------------------- components

    props = [ ...props, 'msg' ]


///*/// ---------------------------- export ready

export default {

    name: 'dev-message',
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

<style>

    .dev-message {
        background-color: hsl(45, 100%, 76%); /* sticky-yellow */
        color:            hsl(14, 25%, 29%);
        padding: 1em;
    }

</style>
