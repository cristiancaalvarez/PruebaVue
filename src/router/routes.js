import { createRouter, createWebHistory } from 'vue-router';
import PageProject from '../pages/PageProject.vue';
import PageTasks from '../pages/PageTasks.vue';
import PageNotFont from '../pages/PageNotFont.vue';

const routes = [
  { path: '/', component: PageProject },
  { path: '/PageTasks/:id', component: PageTasks },
  { path: '/:catchAll(.*)*', component: PageNotFont }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;