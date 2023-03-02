<template>
  <div>
    <Post v-for="(post, i) in postList" :key="i" :post="post" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "container",
  props: {
    postList: Array,
  },
  components: {
    Post,
  },
};
</script>

<style></style>
