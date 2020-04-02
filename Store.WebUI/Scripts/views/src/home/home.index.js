// home.index.js

import Vue from 'vue'
import HomeIndex from './HomeIndex.vue'
import store from '../store'

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(HomeIndex)
}).$mount('#app'); 

