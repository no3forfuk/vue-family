//引入vue
import Vue from 'vue';

import App from "./app.vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: '/', component: App }
    ]
});

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})