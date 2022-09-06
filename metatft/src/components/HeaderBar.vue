<template>
  <div class="headercontainer container">
    <nav class="navbar">
      <div class="navbarcontainer container">
        <a href="http://localhost:8080/" class="nav-img">
          <img
            src="../assets/img/tftlogo.svg"
            height="100%"
            width="100%"
            alt="tft logo"
          />
        </a>
        <h2 class="logoText">
          <a href="http://localhost:8080/">MetaTFT</a>
        </h2>
        <div class="menucontainer container">
          <div class="textmenu container">
            <div class="nav-item">
              <a href="http://localhost:8080/">comps</a>
            </div>
            <div class="nav-item">
              <a href="http://localhost:8080/">game modes</a>
            </div>
            <div class="nav-item">
              <a href="http://localhost:8080/">stats</a>
            </div>
            <div class="nav-item">
              <a href="http://localhost:8080/">players</a>
            </div>
            <div class="nav-item">
              <a href="http://localhost:8080/">tools</a>
            </div>
          </div>
          <button>Download app</button>
          <a href="https://naver.com" class="test-img">
            <img
              src="../assets/logo.png"
              height="100%"
              width="100%"
              alt="test logo"
            />
          </a>
          <a href="https://google.co.kr" class="test-img">
            <img
              src="../assets/logo.png"
              height="100%"
              width="100%"
              alt="test logo"
            />
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
.headercontainer {
  background-color: rgb(34, 34, 34);
  color: rgb(230, 230, 230);
  height: 60px;
}
.navbar {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px 16px;
}
.nav-img {
  margin-right: 10px;
  padding: 5px 0px;
}
.logoText {
  display: flex;
  padding-top: 8px;
  font-weight: 700;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0.5rem;
}
.nav-img,
.test-img {
  display: inline-block;
  width: 50px;
  height: 50px;
  align-self: center;
}
.test-img {
  padding-left: 10px;
}
.navbarcontainer {
  flex-flow: row nowrap;
  padding: 0px 15px;
  margin: 0px 57px;
}
button {
  margin: 5px;
}
a {
  text-decoration: none;
  color: rgb(230, 230, 230);
}
.menucontainer {
  align-items: center;
}
.textmenu {
  margin-left: 200px;
  justify-content: space-evenly;
}
</style>
