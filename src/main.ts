import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'

import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'

import './assets/main.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Material,
  },
})

app.mount('#app')
