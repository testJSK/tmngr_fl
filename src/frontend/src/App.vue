<template>
  <div class="app-grid">
    <app-alert></app-alert>
    <header>
      <div class="container py-3 mb-4 border-bottom">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Super shop + old </h1>
            <a href="/">Home</a><br>
<!--            <a href="/office/orders">Orders</a><br>-->
<!--            <a href="/office/dashboard">Dashboard</a>-->
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <router-link v-if="isLogin" :to="{name: 'office.dashboard'}">{{ user.name }}</router-link>
              <router-link v-else :to="{ name: 'auth.login' }">LogIn</router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div>
      <div class="container">
        <div class="row">
<!--          <div class="col col-12 col-md-3">-->
<!--            <ul class="nav nav-pills flex-column mb-auto">-->

<!--            </ul>-->
<!--          </div>-->
          <main class="col col-12 col-md-12">
            <router-view />
          </main>
        </div>
      </div>
    </div>
    <footer class="py-3 m4-3 border-top">
      <div class="container">
        footer
      </div>
    </footer>
  </div>
</template>

<script>
import AppAlert from "@/components/Alerts";
import { mapGetters } from "vuex";

export  default {
  name: 'App',
  components: {
    AppAlert
  },
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters('user', [ 'user', 'isLogin' ]),
  }
}

</script>

<style>
</style>
