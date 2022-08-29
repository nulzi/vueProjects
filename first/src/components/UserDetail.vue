<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <p>이름: {{ nameOfChild }}</p>
  </div>
</template>

<script>
export default {
  props: ["nameOfChild"],
  data() {
    return {};
  },
};
</script>

<style>
.red {
  background-color: red;
}
.lighten-3 {
  filter: brightness(1.15);
}
</style>
