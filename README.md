### todo

import SASS/SCSS into every component  

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_shared.scss";`,  // Vue CLI 4
        // data: `@import "@/assets/_shared.scss";`,         // Vue CLI 3
      },
    },
  },
};
```

# vue-seed

A project grows from a seed.

## Required software

    Documentation:
    https://cli.vuejs.org/

    Customize configuration:
    https://cli.vuejs.org/config/

```bash
npm install -g @vue/cli @vue/cli-service-global

```

## New project from seed

```bash
npm install
npm run serve
npm run build

```

## New project with `vue-cli`

```bash
vue create project-name

```

# Common plugins

```bash
vue add vuetify

```
