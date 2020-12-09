import Vue     from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const UI_framework = new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                accent: '#ae2d2f',  // noble red,
                success: '#666666', // descent
            }
        }
    }
})

export default UI_framework
