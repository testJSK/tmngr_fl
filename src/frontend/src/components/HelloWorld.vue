<template>
  <div class="hello">
    <h1>{{ one.username }}</h1>
    <h2>{{ msg }}</h2>
    <ul>
      <li v-for="user in users" :key="user.username">{{ user.username }} - {{ user.password }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'msg test',
      users: [],
      one: ''
    }
  },
  mounted() {
    fetch('/api/users/all')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.users = data;
        console.log(this.users)
      });
    fetch('/api/users?id=1')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.one = data;
          console.log(this.users)
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
