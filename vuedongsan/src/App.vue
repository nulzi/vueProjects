<template>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <div>
    <h4>{{ products[0] }}</h4>
    <p>60 만원</p>
    <button @click="increase(0)">허위매물신고</button>
    <span>신고수 : {{ reportNum[0] }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>60 만원</p>
    <button @click="increase(1)">허위매물신고</button>
    <span>신고수 : {{ reportNum[1] }}</span>
  </div>
  <div>
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
</style>
