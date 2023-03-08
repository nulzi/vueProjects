<template>
  <div class="total_container">
    <!-- <Home></Home> -->
    <Test></Test>
  </div>
</template>

<script>
// import Home from './components/HomePage.vue';
// import Test from './TestPage.vue';
// import Test from './TestPage2.vue';
import Test from './TestPage3.vue';

export default {
  name: 'App',
  components: {
    // Home,
    Test,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  max-width: 474px;
  height: 500px;
  background-color: gray;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.total_container {
  width: 100%;
  height: 100%;
}
</style>
