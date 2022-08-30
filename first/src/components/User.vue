<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <v-btn @click="changeName()"> 이름 변경 </v-btn>
    <hr />
    <v-layout row wrap>
      <!-- <v-flex> -->
      <UserDetail :nameOfChild="name"></UserDetail>
      <!-- </v-flex> -->
      <!-- <v-flex> -->
      <UserEdit />
      <!-- </v-flex> -->
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: "뷰제이에스",
    };
  },
  methods: {
    changeName() {
      this.name = "Nulzi";
    },
  },
};
</script>

<style>
.v-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, auto));
}
.blue {
  background-color: skyblue;
}
.v-btn {
  padding: 10px;
}
p {
  padding-bottom: 20px;
}
</style>
