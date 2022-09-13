<template>
  <div class="black-bg" v-if="hasopen == 1">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="hasopen = 0">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasopen: 1,
    }
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
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}</style>
