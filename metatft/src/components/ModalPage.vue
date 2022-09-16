<template>
  <div class="black-bg" v-if="hasopen == 1">
    <div class="white-bg">
      <h4>아이템 설명 페이지임</h4>
      <div class="container">
        <div class="img">아이템 이미지</div>
        <p>아이템 이름</p>
      </div>
      <p class="about">아이템 설명:</p>
      <div></div>
      <button @click="hasopen = 0">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasopen: 1,
    };
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
