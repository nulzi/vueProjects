<template>
  <div>
    <h5>상세페이지</h5>
    <h5>{{ blogList[$route.params.id].title }}</h5>
    <p>{{ blogList[$route.params.id].date }}</p>
    <p>{{ blogList[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "detail",
  props: {
    blogList: Array,
  },
};
</script>

<style></style>
