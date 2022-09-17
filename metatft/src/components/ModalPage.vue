<template>
  <div class="black-bg">
    <div class="white-bg">
      <h4>아이템 설명 페이지임</h4>
      <div class="container">
        <div class="img"><img :src="img" alt="item_img" /></div>
        <p class="name">{{ name }}</p>
      </div>
      <p class="about">{{ about }}</p>
      <div></div>
      <button @click="this.$emit('close', 0)">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'name', 'about'],
  data() {
    return {};
  },
};
</script>

<style scoped>
.black-bg {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 60px;
}
.white-bg {
  box-sizing: border-box;
  width: 40%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 0px auto;
}
h4 {
  margin-top: 0px;
}
.white-bg h4 {
  text-align: left;
}
.about {
  text-align: left;
}
.name {
  font-size: 25px;
  font-weight: 700;
  align-self: center;
}
.img {
  display: inline-block;
  margin: 16px 16px;
}
.container {
  display: flex;
  align-content: center;
  justify-content: left;
}
</style>
