import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from './Pages/index.vue'

const routes = [
  {path: '/', component: HelloWorld}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
  }
})

createApp(App).use(router).use(vuetify).mount('#app')
