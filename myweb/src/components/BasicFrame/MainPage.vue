<template>
  <div>
    <h2>자기소개서</h2>
    <ul>
      <li>
        이름:
        <abbr title="별 의미 없습니다만 누룽지에서 눌지가 된겁니땃!">{{
          name
        }}</abbr>
      </li>
      <li>
        나이: <abbr title="1999년생~">{{ age }}</abbr>
      </li>
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
@import url("https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css");
li {
  text-align: left;
  font-family: "Galmuri14";
  font-size: 25px;
}
abbr {
  text-decoration: none;
}
</style>
