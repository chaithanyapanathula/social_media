import Vue from 'vue';
import App from './App.vue';
import store from './store'; // Import Vuex store
import './assets/styles/base.css';
import './assets/styles/components.scss';

Vue.config.productionTip = false;

new Vue({
  store, // Register the Vuex store in the Vue instance
  render: h => h(App), // Render the root App component
}).$mount('#app'); // Mount the Vue instance to the DOM element with ID 'app'
