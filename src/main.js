import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

import './style.css'
import "bootstrap/dist/css/bootstrap.css";
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App);

app.use(vuetify);
app.use(PrimeVue);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap';