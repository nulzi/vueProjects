<template>
  <div class="black-bg" v-if="isOpen">
    <div class="white-bg">
      <h4>{{ oneroom.title }}</h4>
      <img :src="oneroom.image" class="room-img" />
      <p>{{ oneroom.price }} 원</p>
      <p>{{ oneroom.content }}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
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
