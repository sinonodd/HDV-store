import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import LoginToken from '../views/LoginToken.vue';
import Forum from '../views/Forum.vue';
import Admin from '../views/Admin.vue';

  import store from '../store';

  Vue.use(Router);

  export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforEnter(to, from, next) {
        if (store.getters.isLoggedIn) {
          next();
        }
        next('/');
      },
    },
    {
      path: '/login/token/:token',
      name: 'login-token',
      component: LoginToken,
    }
  ]
});
