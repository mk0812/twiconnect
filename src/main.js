// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBMhvDzU7QtrfNhMYT0fBys4_bApTfYOmw',
  authDomain: 'twiconnect-b9e33.firebaseapp.com',
  databaseURL: 'https://twiconnect-b9e33.firebaseio.com',
  projectId: 'twiconnect-b9e33',
  storageBucket: 'twiconnect-b9e33.appspot.com',
  messagingSenderId: '650987389557'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
