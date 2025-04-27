import { createApp } from 'vue'
import App from './App.vue'
//import store from './store'
import router from './router'
//import axios from 'axios'
import Vuex from 'vuex'


//axios.defaults.baseURL = 'http://localhost:8001/'

const app = createApp(App);


app.config.devtools = true;
//app.config.globalProperties.$axios = axios;

//Vuex for endpoints
//TODO: add .usestore later
app.use(router).use(Vuex).mount('#app')

