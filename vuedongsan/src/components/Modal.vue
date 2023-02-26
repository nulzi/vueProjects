<template>
  <div class="black-bg" v-if="isOpen">
    <div class="white-bg">
      <h4>{{ oneroom.title }}</h4>
      <img :src="oneroom.image" class="room-img" />
      <p>{{ oneroom.content }}</p>
      <input v-model="month" />
      <p>{{ month }} 개월 선택함 {{ oneroom.price * month }} 원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(data) {
      const numReg = /[^0-9]/g;
      if (data >= 13) alert("13이상 입력하지 마세요");
      if (numReg.test(data)) {
        alert("숫자만 입력하라");
        this.month = 1;
      }
      //간단한 풀이
      //하지만 공백은 잡을 수가 없음
      // if(isNaN(data) == true){
      //   alert('only number')
      //   this.month = 1
      // }
    },
  },
  props: {
    oneroom: Object,
    isOpen: Boolean,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
