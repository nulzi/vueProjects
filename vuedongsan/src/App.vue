<template>
  <transition name="fade">
    <Modal
      :oneroom="onerooms[roomIndex]"
      :isOpen="modalOpen"
      @closeModal="modalOpen = false"
    />
  </transition>

  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>

  <Discount v-if="showDiscount" />

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

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
      showDiscount: true,
      originOnerooms: [...data],
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
    priceSort() {
      this.onerooms.sort((a, b) => {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.onerooms = [...this.originOnerooms];
    },
  },

  mounted() {
    setTimeout(() => {
      this.showDiscount = false;
    }, 2000);
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
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
