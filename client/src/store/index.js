import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    user: null
  },
  mutations: {
    setToken(state,token){
      state.token = token;
    },
    setUser(state,user){
      state.user = user;
    }
  },
  actions: {
    login({commit},token){
      commit('setToken',token)
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const user = JSON.parse(window.atob(base64));
      commit('setUser', user)
    }
  },
  modules: {
  },
});
