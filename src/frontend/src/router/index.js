import { createRouter, createWebHistory } from 'vue-router';
import createRoutes from '@/router/routes';

// export default  () => {
export default store => {
  const routes = createRoutes();

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

  router.beforeEach( async (to,
                            from,
                            next) => {
    let goto ;

    if(to.meta.auth){
      await store.getters['user/ready'];

      if(!store.getters['user/isLogin']){
        goto = { name: 'auth.login' };
      }
    }

    next(goto);
  });

  return router;
}


