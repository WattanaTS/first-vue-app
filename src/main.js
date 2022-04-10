import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCGNG3j_jdwbCcM_2WRPzrgLp3f-yESBFU",
  authDomain: "tatest-b918e.firebaseapp.com",
  projectId: "tatest-b918e",
  storageBucket: "tatest-b918e.appspot.com",
  messagingSenderId: "532329331376",
  appId: "1:532329331376:web:847d063bc0e3595b8a9975",
  measurementId: "G-K395EB40PE"
};

firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
