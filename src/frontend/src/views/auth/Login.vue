<template>
    <form @submit.prevent="trylogin" >
      <h1>Login</h1>
      <div>
        <input type="text" v-model="login" placeholder="Login">
      </div>
      <div>
        <input type="text" v-model="password" placeholder="Password">
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>


</template>

<script>
export default {
  name: "loginView",
  data(){
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    trylogin(){
      this.$api.auth.login()
    }
  }
}
</script>

<style scoped>

</style>