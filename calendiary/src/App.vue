<template>
  <!-- Vuetify application wrapper -->
  <v-app>
    <!-- This is where routed components will be rendered -->
    <router-view />
  </v-app>
</template>

<script setup>
// No logic needed here unless you want to add layout components
</script>


<style lang="scss">
/* Global styles can go here */
@use 'vuetify/settings' with (
  $color-pack: true
);
</style>

