<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <v-btn @click="changeName()"> 이름 변경 </v-btn>
    <hr />
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
          :_name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :_name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        ></UserEdit>
      </v-flex>
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
      address: "Uiwang",
      phone: "1234-5678",
      hasDog: true,
    };
  },
  methods: {
    changeName() {
      this.name = "Nulzi";
    },
    parents(user) {
      //user = {name, address, phone, hasDog}
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
      this.hasDog = user.hasDog;
      console.log("부모가 받았어");
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
