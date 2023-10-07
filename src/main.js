import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePictureSwipe from 'vue3-picture-swipe';
import Vue3Transitions from 'vue3-transitions'
createApp(App).use(store).use(Vue3Transitions).use(VuePictureSwipe).use(router).mount('#app')
