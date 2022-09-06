<template>
  <div class="globalcontainer">
    <Header class="header"></Header>
    <Sidebar class="sidebar-a"></Sidebar>
    <Main class="main"></Main>
    <Sidebar class="sidebar-b"></Sidebar>
  </div>
</template>

<script>
import Header from "./components/HeaderBar.vue";
import Sidebar from "./components/SideBar.vue";
import Main from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Main,
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
}
.globalcontainer {
  display: grid;
  grid-template-areas:
    "header header header"
    "   a    main    b   "
    "footer footer footer";
  background-color: #313236;
}
.header {
  grid-area: header;
}
.sidebar-a {
  grid-area: a;
}
.main-content {
  grid-area: main;
}
.sidebar-b {
  grid-area: b;
}
.footer {
  grid-area: footer;
}
</style>
