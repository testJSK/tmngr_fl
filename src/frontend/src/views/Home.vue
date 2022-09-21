<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div class="col col-sm-4 mb-3 mt-3" v-for="pr in productsFiltered" :key="pr.id">
        <div class="card" >
          <div class="card-body" >
            <h3>{{ pr.title }}</h3>
            <div>{{ pr.price }}</div>
            <router-link to="">Read more</router-link>
            <hr>
            <button v-if="inCart(pr.id)" @click="remove(pr.id)" class="btn btn-danger">Remove</button>
            <button v-else @click="add(pr.id)" class="btn btn-success" >Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters( 'products', { products: 'items' }),
    ...mapGetters( 'cart', [ 'inCart'] ),
    productsFiltered(){
      return this.products.filter(pr => true);
    }
  },
  methods: {
    ...mapActions('cart', [ 'add' , 'remove'] )
  }
  // mounted() {
  //   fetch('/api/products/all')
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data)
  //         this.prod = data;
  //         console.log(this.users)
  //       });
  // }
}
</script>
