import { createRouter, createWebHistory } from 'vue-router';
import createRoutes from '@/router/routes';


export default () => {
  const routes = createRoutes();
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

  return router;
}


