<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field label="이름" v-model="user.name"></v-text-field>
    <v-text-field label="주소" v-model="user.address"></v-text-field>
    <v-text-field label="전화번호" v-model="user.phone"></v-text-field>
    <v-radio-group v-model="user.hasDog">
      <v-radio label="반려견 있음" :value="true"></v-radio>
      <v-radio label="반려견 없음" :value="false"></v-radio>
    </v-radio-group>
    <v-btn @click="changeUser">수정 완료</v-btn>
  </div>
</template>

<script>
export default {
  props: ["_name", "address", "phone", "hasDog"],
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user.name = this._name;
    this.user.address = this.address;
    this.user.phone = this.phone;
    this.user.hasDog = this.hasDog;
  },
  methods: {
    changeUser() {
      this.$emit("child", this.user); //child(this.user)를 부모한테 보내는 것과 비슷하다
      this.emitter.emit("userWasEdited", new Date());
    },
  },
};
</script>

<style>
.yellow {
  background-color: rgb(156, 156, 11);
}
</style>
