// Import Vue core
import { createApp } from 'vue';
// Import root component
import App from './App.vue';
// Import the router instance
import router from './router';

// Import Vuetify styles
import 'vuetify/styles';
// Create Vuetify instance and import all components and directives
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Initialize Vuetify with components and directives
const vuetify = createVuetify({
  components,
  directives,
  // You can configure themes, icons, etc. here if needed
});

// Create Vue application
const app = createApp(App);

// Use router and Vuetify plugins
app.use(router);
app.use(vuetify);

// Mount the app to the DOM
app.mount('#app');
