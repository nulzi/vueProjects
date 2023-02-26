<template>
  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <h4>{{ onerooms[roomIndex].title }}</h4>
      <img :src="onerooms[roomIndex].image" />
      <p>{{ onerooms[roomIndex].price }} 원</p>
      <p>{{ onerooms[roomIndex].content }}</p>
      <button @click="modalOpen = false">닫기</button>
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

<style></style>
