<template><article class="dev-report"><slot/></article></template>

<style>

    .dev-report {
        background-color: hsl(45, 100%, 76%); /* sticky-yellow */
        color:            hsl(14, 25%, 29%);
    }

    .dev-report [display-source],
    .dev-report .display-source {
        display:     block;
        font-family: monospace;
        white-space: pre-wrap;
        font-size:   small;
        line-height: 1;
    }

</style>

<!-- snippet

<debug>
    <v-container>

        <h2>Dev reports</h2>

        <header class="title">YourIndustry</header>
        <div display-source>{{YourIndustry}}</div>

        <div class="overline">msg</div>
        <div display-source>{{msg}}</div>

    </v-container>
</debug>

  -->
