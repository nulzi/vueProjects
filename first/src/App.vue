<template>
  <!-- <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app> -->
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="count++">add</button>
    <HomeComponent />
    <AppStatus />
  </div>
</template>

<script>
import HomeComponent from "./Home.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
  },
  data: () => ({
    title: "안녕하세요",
    count: 1,
  }),
};
</script>
