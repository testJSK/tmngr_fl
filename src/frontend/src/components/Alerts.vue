<template>
 <div class="alert-box" >
   <div v-for="alert in all" :key="alert.id" class="alert-item">
     {{ alert.text }}

   </div>


 </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppAlert",
  computed: {
    ...mapGetters('alerts', ['all'])
  },
  methods: {

  }
}
</script>

<style scoped>
.alert-box{
  top: 40px;
  position: fixed;
  padding: 10px;
  width: 300px;
  z-index: 1000;
}
.alert-item{
border-radius: 5px;
  background-color: rgba(24,235, 223, 0.290);
  padding: 5px;
  margin: 5px;

}
</style>