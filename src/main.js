import { createApp } from 'vue'
import App from './App.vue'
import EmpContact from './components/EmpContact.vue'
import newEmp from './components/newEmp.vue'

const app = createApp(App)
app.component('emp-contact', EmpContact);
app.component('new-emp', newEmp)
app.mount('#app')
