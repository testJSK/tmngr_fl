<template>
  <div class="row">
    <div class="col col-12 col-md-3">
      <ul class="list-group">
        <li class="list-group-item">
          <router-link :to="{ name: 'office.dashboard' }">Dashboard</router-link>
        </li>
        <li class="list-group-item">
          <router-link :to="{ name: 'office.orders' }">Orders</router-link>
        </li>
        <li class="list-group-item">
          <router-link :to="{ name: 'office.exit' }" @click="exitNow()">Logout</router-link>
        </li>
      </ul>
    </div>
    <div class="col col-9 col-md-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "OfficeBase",
  methods: {
    ...mapActions('user', { exit: 'logout' } ),
    async exitNow(){
      await this.exit();
      this.$storage.setAccessToken(null)
      // this.$router.push({ name: 'login'});
      document.location = '/login';
    }

  }


}
</script>

<style scoped>

</style>