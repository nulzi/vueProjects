<template>
  <div class="black-bg" v-if="hasopen == 1">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="hasopen = 0">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(name, i) in menu" :key="(name, i)">{{ name }} {{ i }}</a>
  </div>

  <!-- <div v-for="name in products" :key="name">
    <h4>{{ name }}</h4>
    <p>50 만원</p>
  </div> -->

  <!-- <div>
    <img src="./assets/room0.jpg" class="room-img" />
    <h4 @click="hasopen = 1">{{ products[0] }}</h4>
    <p>50 만원</p>
    <button @click="num[0]++">허위매물신고</button>
    <span>신고수 : {{ num[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img" />
    <h4>{{ products[1] }}</h4>
    <p>60 만원</p>
    <button @click="num[1]++">허위매물신고</button>
    <span>신고수 : {{ num[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img" />
    <h4>{{ products[2] }}</h4>
    <p>70 만원</p>
    <button @click="num[2]++">허위매물신고</button>
    <span>신고수 : {{ num[2] }}</span>
  </div> -->

  <div v-for="(room, i) in rooms" :key="i">
    <img :src="room.image" class="room-img" />
    <h4>{{ room.title }}</h4>
    <p>{{ room.price }}원</p>
    <p>{{ room.content }}</p>
  </div>
</template>

<script>
import data from "./assets/oneroom.js";

// document.getElementById().innerHTML = ??
export default {
  name: "App",
  data() {
    return {
      hasopen: 0,
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      menu: ["Home", "Shop", "About"],
      num: [0, 0, 0],
      rooms: data,
    };
  },
  methods: {
    // increase() {
    //   console.log("clicked");
    //   this.num += 1;
    //   console.log(this.num);
    // },
  },
  components: {},
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
.menu {
  background: darkslateblue;
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
</style>
