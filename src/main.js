import { createApp } from 'vue'
import App from './App.vue'
import components from '../src/components/UI'

import './components/assets/styles.css'

const app = createApp(App)

//глобальная регистация UI компонентов
components.forEach((component) => {
  app.component(component.name, component)
})

app.mount('#app')
