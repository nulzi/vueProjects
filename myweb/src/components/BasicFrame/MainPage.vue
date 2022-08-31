<template>
  <div>
    <h1>자기소개서</h1>
    <ul>
      <li>이름: {{ name }}</li>
      <li>나이: {{ age }}</li>
      <li>거주지: {{ address }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "nulzi",
      age: "24",
      address: "South Korea",
    };
  },
  mounted() {
    this.emitter.emit("userName", this.name);
  },
};
</script>

<style scoped>
li {
  text-align: left;
}
</style>
