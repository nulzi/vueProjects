<template>
  <div class="container">
    <div class="today">{{ year }} | {{ month }} | {{ date }}</div>
    <header class="global-header">
      <NavBar
        @changeHome="changeHome"
        @changeMiniGame="changeMiniGame"
      ></NavBar>
    </header>
    <AdPageL class="sidebar-a"></AdPageL>
    <Main class="main" v-show="page"></Main>
    <MiniGame class="main" v-show="!page"></MiniGame>
    <AdPageR class="sidebar-b"></AdPageR>
    <footer class="global-footer">
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import NavBar from "./BasicFrame/NavBar.vue";
import AdPageL from "./BasicFrame/AdPageL.vue";
import AdPageR from "./BasicFrame/AdPageR.vue";
import Footer from "./BasicFrame/FooterBar.vue";
import Main from "./BasicFrame/MainPage.vue";
import MiniGame from "./MiniGame/MiniGame.vue";

export default {
  components: {
    NavBar,
    AdPageL,
    Main,
    MiniGame,
    AdPageR,
    Footer,
  },
  data() {
    return {
      page: 0,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
    };
  },
  methods: {
    changeHome() {
      this.page = 1;
    },
    changeMiniGame() {
      this.page = 0;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-auto-columns: 170px 1fr 170px;
  grid-template-areas:
    ". . today"
    "header header header"
    "sidebar-a main sidebar-b"
    "footer footer footer";
}
.today {
  border-style: dotted;
  border-color: white;
  background-color: darkgray;
  grid-area: today;
  justify-self: right;
  float: right;
}
.global-header {
  grid-area: header;
  margin-bottom: 20px;
}
.sidebar-a {
  display: block;
  grid-area: sidebar-a;
  width: 170px;
  place-self: center;
}
.main {
  grid-area: main;
  background-color: rgba(211, 211, 211, 0.432);
  margin: 0px 20px;
}
.sidebar-b {
  display: block;
  grid-area: sidebar-b;
  width: 170px;
  place-self: center;
}
.global-footer {
  grid-area: footer;
  border-top: 1px solid darkgray;
  margin-top: 20px;
  font-size: 0.85rem;
}
</style>
