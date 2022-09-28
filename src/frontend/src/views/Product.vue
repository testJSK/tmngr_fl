<template>
  <div class="about">
    <h1>Product</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  computed: {
    id(){
      return this.$route.params.id;
    }
  },
  methods: {

  },
  async created(){
    let rating = await this.$api.products.getRating(this.id);
    console.log(rating);
  }
}
</script>