<template>
  <div class="about">
    <h1>Product</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  computed: {

  },
  methods: {

  },
  async created(){
    console.log(this.$api.products);
  }
}
</script>