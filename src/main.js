import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
//import { initializeApp } from 'firebase/app';


const config = {
  apiKey: "AIzaSyC1acnV21-MZv9Rejfw53G4mubAD24Sg2A",
  authDomain: "authentication-43450.firebaseapp.com",
  projectId: "authentication-43450",
  storageBucket: "authentication-43450.appspot.com",
  messagingSenderId: "174598964859",
  appId: "1:174598964859:web:e48fbf51efa2de5a5e84de"
};


firebase.initializeApp(config);

createApp(App).use(router).mount('#app')
