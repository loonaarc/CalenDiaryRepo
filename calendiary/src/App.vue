<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import router from './router'; 

export default {
  name: 'App',
  mounted() {
    // Example: Access router programmatically
    console.log('Current route:', router.currentRoute.value);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
