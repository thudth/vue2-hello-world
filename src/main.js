import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios'

import App from '@/App';
import router from '@/router'

Vue.use(VueRouter);
Vue.use(VueAxios, axios)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
