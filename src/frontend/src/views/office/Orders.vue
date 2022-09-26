<template>
  <div>
    <h1>OrdersView</h1>
    <hr>
    {{ orders }}
  </div>

</template>

<script>
export default {
  name: "OrdersView",
  data(){
    return{
      orders: [],
    }
  },
  async created() {
    this.orders = await this.$api.orders.all();
  }
}
</script>

<style scoped>

</style>