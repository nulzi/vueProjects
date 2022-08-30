<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <p>이름: {{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>
    <v-btn @click="switchName()">이름 변경</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    nameOfChild: {
      type: String,
      // required: true,
      default: "Lego",
    },
  },
  computed: {
    sayHello() {
      return this.nameOfChild + " Hello";
    },
  },
  methods: {
    switchName() {
      this.nameOfChild = "Computer"; //불가능 props는 readonly
    },
  },
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
