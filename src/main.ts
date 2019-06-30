import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

// themeはお好みでどうぞ。
Vue.use(Vuetify, {
  theme: {
    original: colors.purple.base,
    theme: '#ff6347',
    background: '#ffffff',
    twitter: '#00aced',
    facebook: '#305097',
    line: '#5ae628',
    red: '#F26964',
    error: '#F26964',
    succcess: '#698FF0',
  },
  options: {
    themeVariations: ['original', 'secondary'],
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
