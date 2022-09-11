<template>
  <div class="globalcontainer">
    <Header class="header"></Header>
    <Sidebar class="sidebar-a"></Sidebar>
    <Main class="main"></Main>
    <Sidebar class="sidebar-b"></Sidebar>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/HeaderBar.vue";
import Sidebar from "./components/SideBar.vue";
import Main from "./components/MainPage.vue";
import Footer from "./components/FooterPage.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Main,
    Footer,
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
  padding: 15px;
}
.main {
  grid-area: main;
  padding: 0px 15px;
}
.sidebar-b {
  grid-area: b;
  padding: 15px;
}
.footer {
  grid-area: footer;
}
</style>
