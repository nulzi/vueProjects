<template>
  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <h4>{{ onerooms[roomIndex].title }}</h4>
      <img :src="onerooms[roomIndex].image" />
      <p>{{ onerooms[roomIndex].price }}</p>
      <p>{{ onerooms[roomIndex].content }}</p>
      <button @click="modalOpen = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>

  <div v-for="(oneroom, i) in onerooms" :key="oneroom.id">
    <img :src="oneroom.image" class="room-img" />
    <h4
      @click="
        modalOpen = true;
        roomIndex = i;
      "
    >
      {{ oneroom.title }}
    </h4>
    <p>{{ oneroom.price }}원</p>
  </div>
</template>

<script>
import data from "./assets/oneroom";

export default {
  name: "App",
  data() {
    return {
      roomIndex: 0,
      onerooms: data,
      modalOpen: false,
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      reportNum: [0, 0, 0],
    };
  },
  methods: {
    increase(index) {
      this.reportNum[index]++;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
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
</style>
