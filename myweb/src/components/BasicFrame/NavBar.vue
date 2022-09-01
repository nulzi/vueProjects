<template>
  <nav>
    <h1 @click="changeHome">Home</h1>
    <a href="https://www.w3schools.com/html/default.asp" target="_blank">
      <abbr title="Hypertext Markup Language">HTML</abbr>
    </a>
    |
    <a href="https://www.w3schools.com/css/default.asp" target="_blank">
      <abbr title="Cascading Style Sheets">CSS</abbr>
    </a>
    |
    <a href="https://www.w3schools.com/js/default.asp" target="_blank">
      JavaScript
    </a>
    |
    <a @click="changeMiniGame">MiniGame</a>
  </nav>
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
nav {
  background-color: rgba(0, 0, 0, 0.822);
  height: 80px;
  color: white;
  text-align: start;
  padding: 20px;
}
abbr {
  text-decoration: none;
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
  font-size: 50px;
}
</style>
