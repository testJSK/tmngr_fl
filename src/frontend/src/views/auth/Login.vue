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
      <div class="text-danger" v-if="errors.length">
        <p  v-for="err in errors" :key="err">{{ err }}</p>
      </div>
    </form>


</template>

<script>
export default {
  name: "loginView",
  data(){
    return {
      login: '',
      password: '',
      errors: [],
    }
  },
  methods: {
     async trylogin(){
       this.errors = [];

       try {
         let  accessToken = await this.$api.auth.login(this.login, this.password);
         this.$storage.setAccessToken(accessToken);
         document.location = '/';

       } catch (e) {
         console.warn(e);
         let code = e.response?.status;
         this.errors = code === 422 ? e.response.data.messages : ['Ошибка ответа от сервера'];
       }
    }
  }
}
</script>

<style scoped>

</style>