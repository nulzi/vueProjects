<template>
  <div class="filter-container">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';

export default {
  components: {
    Header,
    Content,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
