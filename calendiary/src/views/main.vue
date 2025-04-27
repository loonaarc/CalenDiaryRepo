<template>

  <div class="main">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Our CalenDiary App" />
    <TestView></TestView>
  </div>
</template>

<script>
// https://fontawesome.com/v4/icons/
//import { mapGetters } from "vuex";
import HelloWorld from '@/components/HelloWorld.vue'
import TestView from '@/components/Test.vue'


export default {
  name: 'MainView',
  components: {
    HelloWorld,
    TestView
  },
}
</script>