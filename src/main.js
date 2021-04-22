import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'materialize-css/dist/js/materialize.min.js';
import 'material-design-icons/iconfont/material-icons.css';
import dateFilter from './filters/date.filter.js';
import currencyFilter from './filters/currency.filter.js';
import messagePlugin from '@/utils/message.plugin.js'
import Loader from '@/components/app/Loader'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyDIe5hSX4jA5-JlZM9EwbdIROBjB3pnTf0",
  authDomain: "vue-crm-d8862.firebaseapp.com",
  projectId: "vue-crm-d8862",
  storageBucket: "vue-crm-d8862.appspot.com",
  messagingSenderId: "37501534204",
  appId: "1:37501534204:web:223675f65f9b74b75cbc79",
  measurementId: "G-B3GEFDZ4FM"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})

