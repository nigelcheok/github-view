import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import User from './views/User.vue';
import Project from './views/Project.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/:username',
      name: 'user',
      component: User,
    },
    {
      path: '/:username/:project',
      name: 'user',
      component: Project,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/User.vue'),
    // },
  ],
});
