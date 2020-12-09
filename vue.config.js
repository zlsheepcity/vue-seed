module.exports = {

    // general settings

    filenameHashing:  false,
    publicPath:       "", // publicPath: "/",

    // ui

    transpileDependencies: [ "vuetify" ],

    // features:

    // share scss in every component

    css: {
        loaderOptions: {
        sass: {
            additionalData: `@import "@/assets/_shared.scss";`,  // Vue CLI 4
         // data: `@import "@/assets/_shared.scss";`,         // Vue CLI 3
        },
        },
    },

}
