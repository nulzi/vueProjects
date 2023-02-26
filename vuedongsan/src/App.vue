<template>
  <div class="start" :class="{ end: modalOpen }">
    <Modal
      :oneroom="onerooms[roomIndex]"
      :isOpen="modalOpen"
      @closeModal="modalOpen = false"
    />
  </div>

  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>

  <Discount />

  <Card
    v-for="data in onerooms"
    :key="data.id"
    :oneroom="data"
    @openModal="
      modalOpen = true;
      roomIndex = $event;
    "
  />
</template>

<script>
import data from "./assets/oneroom";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  data() {
    return {
      roomIndex: 0,
      onerooms: data,
      modalOpen: false,
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase(index) {
      this.reportNum[index]++;
    },
  },
  components: {
    Discount,
    Modal,
    Card,
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}
</style>
