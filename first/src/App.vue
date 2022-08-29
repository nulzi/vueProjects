<template>
  <v-app>
    <!-- <v-content> -->
    <div class="content">
      <User />
      <!-- </v-content> -->
    </div>
  </v-app>
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    User,
  },
  data: () => ({}),
};
</script>

<style>
/* .v-content {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
} */
.content {
  padding: 1% 10%;
}
</style>
