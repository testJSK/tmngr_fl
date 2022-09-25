import { createRouter, createWebHistory } from 'vue-router';
import createRoutes from '@/router/routes';

// export default  () => {
export default store => {
  const routes = createRoutes();

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

  router.beforeEach( async ( to, from, next) => {
    let goto ;

    if(to.meta.auth || to.meta.guest){
      await store.getters['user/ready'];
      let isLogin = store.getters['user/isLogin']

      if(to.meta.auth && !isLogin){
        goto = { name: 'auth.login' };
      }
      else if(to.meta.guest && isLogin) {
        goto = { name: 'office.dashboard' };
      }
    }

    next(goto);
  });

  return router;
}


