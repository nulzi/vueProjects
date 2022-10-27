<template>
  <div class="filter-container">
    <Header></Header>
    <Content></Content>
    <Type></Type>
    <Base></Base>
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import Type from './ItemTypeFilter.vue';
import Base from './BaseItemFilter.vue';

export default {
  components: {
    Header,
    Content,
    Type,
    Base,
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
