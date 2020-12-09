<template>
<v-app>

    <nav class="main-menu">

        <router-link to="/Dev_home"
            v-slot="{ href, route, navigate, isActive, isExactActive }">
            <span :class="[isActive && 'active', isExactActive && 'exact-active']">
                <a :href="href" @click="navigate">{{ route.name }}</a>
            </span>
        </router-link>

        <router-link to="/About"
            v-slot="{ href, route, navigate, isActive, isExactActive }">
            <span :class="[isActive && 'active', isExactActive && 'exact-active']">
                <a :href="href" @click="navigate">{{ route.name }}</a>
            </span>
        </router-link>

    </nav>

    <section class="main-view">
        <router-view/>
    </section>

</v-app>
</template>

<script>
// ---------------------------- define export

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let watch       = {}
    let data        = {}

// ---------------------------- main logic

    // use router
    computed = { ...computed, Router ()   { return this.$router } }
    methods  = { ...methods,  GoTo (path) { return this.$router.push(path) } }
    methods  = { ...methods,  goto (path) { let RNA=this; return f=>RNA.GoTo(path) } }


// ---------------------------- export ready

export default {
    name: 'AppHQ',
    props,
    components,
    methods,
    computed,
    watch,
    data () { return data },
}

// ---------------------------- end script
</script>


<style>
    .main-menu {
        padding: 0.5em;
    }
    .main-menu a {
        display: inline-block;
        padding: 0.5em;
    }
    .main-view h1 {
        margin:    0;
        padding:   0 0.5em;
        font-size: 2em;
    }
</style>