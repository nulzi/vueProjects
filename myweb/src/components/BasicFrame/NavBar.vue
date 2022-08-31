<template>
  <div>
    <nav>
      <h1 @click="changeHome">Home</h1>
      <a href="https://www.w3schools.com/html/default.asp" target="_blank"
        >HTML</a
      >
      |
      <a href="https://www.w3schools.com/css/default.asp" target="_blank"
        >CSS</a
      >
      |
      <a href="https://www.w3schools.com/js/default.asp" target="_blank"
        >JavaScript</a
      >
      |
      <a @click="changeMiniGame">MiniGame</a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeHome() {
      this.$emit("changeHome");
    },
    changeMiniGame() {
      this.$emit("changeMiniGame");
    },
  },
};
</script>

<style scoped>
div {
  background-color: rgba(0, 0, 0, 0.822);
  height: 80px;
  color: white;
  text-align: start;
  padding-top: 20px;
  padding-left: 20px;
}
a,
a:link,
a:visited {
  color: rgb(219, 219, 219);
  text-decoration: underline;
  cursor: auto;
}
a:link:active,
a:visited:active {
  color: blueviolet;
}
h1 {
  margin-top: 0px;
  margin-bottom: 10px;
}
</style>
