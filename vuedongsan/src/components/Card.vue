<template>
  <div>
    <img :src="oneroom.image" class="room-img" />
    <h4 @click="modalOpen = true">
      {{ oneroom.title }}
    </h4>
    <p>{{ oneroom.price }}원</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    oneroom: Object,
    isOpen: Boolean,
    roomIndex: Number,
    index: Number,
  },
};
</script>

<style></style>
