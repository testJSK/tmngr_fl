import { createRouter, createWebHistory } from 'vue-router';
import createRoutes from '@/router/routes';

// export default  () => {
export default store => {
  const routes = createRoutes();

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

  router.beforeEach((to,
                            from,
                            next) => {
    let goto ;

    if(to.meta.auth && !store.getters['user/isLogin']){
      goto = { name: 'auth.login' };
    }
    next(goto);

  });

  return router;
}


