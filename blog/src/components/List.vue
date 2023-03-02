<template>
  <div v-for="blog in blogList" :key="blog.number">
    <h5>{{ blog.title }}</h5>
    <p>{{ blog.date }}</p>
    <p>{{ blog.content }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  props: { blogList: Array },
};
</script>

<style></style>
