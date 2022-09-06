<template>
  <div class="mainpage">
    <Title></Title>
  </div>
</template>

<script>
import Title from "./main/TitleBar.vue";
export default {
  components: {
    Title,
  },
};
</script>

<style scoped>
.mainpage {
  background-color: #313236;
  width: 936px;
  height: 1000px;
  color: rgb(230, 230, 230);
  padding: 0px 15px;
}
</style>
