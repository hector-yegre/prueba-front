<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components:{
    Navbar:defineAsyncComponent(()=>import('../../../components/Navigation.vue'))
  }
  

}
</script>

<style>

</style>