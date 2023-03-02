<template>
  <div v-for="blog in blogList" :key="blog.number">
    <h5>
      <router-link :to="`/detail/${blog.number}`">{{ blog.title }}</router-link>
    </h5>
    <p>{{ blog.date }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "list",
  props: { blogList: Array },
  data() {
    return {};
  },
};
</script>

<style></style>
