import Vue from 'vue';
import { Plugin } from 'vue-fragment';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';
import './plugins/common.css';
import './plugins/reset.css';

Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
