// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cat: ''
  },
  mutations: {
    changeCat: (state, cat) => {
      state.cat = cat
    }
  },
  actions: {
    async changeCat({ commit }, cat) {
      commit("cat", cat);
    }
  }
});

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
