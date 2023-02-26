<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>

  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지임</p>
      <button @click="modalOpen = false">닫기</button>
    </div>
  </div>

  <div>
    <img src="./assets/images/room0.jpg" class="room-img" />
    <h4 @click="modalOpen = true">{{ products[0] }}</h4>
    <p>60 만원</p>
    <button @click="increase(0)">허위매물신고</button>
    <span>신고수 : {{ reportNum[0] }}</span>
  </div>
  <div>
    <img src="./assets/images/room1.jpg" class="room-img" />
    <h4>{{ products[1] }}</h4>
    <p>60 만원</p>
    <button @click="increase(1)">허위매물신고</button>
    <span>신고수 : {{ reportNum[1] }}</span>
  </div>
  <div>
    <img src="./assets/images/room2.jpg" class="room-img" />
    <h4>{{ products[2] }}</h4>
    <p>60 만원</p>
    <button @click="increase(2)">허위매물신고</button>
    <span>신고수 : {{ reportNum[2] }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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
