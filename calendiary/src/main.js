// Import Vue core
import { createApp } from 'vue';
// Import root component
import App from './App.vue';
// Import the router instance
import router from './router';

// Import Vuetify styles
import 'vuetify/styles';
import vuetify from './plugins/vuetify.js';


// Create Vue application
const app = createApp(App);

// Use router and Vuetify plugins
app.use(router);
app.use(vuetify);

// Mount the app to the DOM
app.mount('#app');
