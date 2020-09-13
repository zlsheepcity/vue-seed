<template>
<div id="app">

    <nav class="main-menu">

        <router-link to="/Home"
            v-slot="{ href, route, navigate, isActive, isExactActive }">
            <span :class="[isActive && 'active', isExactActive && 'exact-active']">
                <a :href="href" @click="navigate">{{ route.fullPath }}</a>
            </span>
        </router-link>

        <router-link to="/About"
            v-slot="{ href, route, navigate, isActive, isExactActive }">
            <span :class="[isActive && 'active', isExactActive && 'exact-active']">
                <a :href="href" @click="navigate">{{ route.fullPath }}</a>
            </span>
        </router-link>

    </nav>

    <section class="main-view">

        <router-view/>

    </section>

</div>
</template>


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