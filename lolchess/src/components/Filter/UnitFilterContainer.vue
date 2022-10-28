<template>
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Content @content="changeContent"></Content>
    <UnitCost></UnitCost>
    <UnitTraits></UnitTraits>
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import UnitCost from './UnitCostFilter.vue';
import UnitTraits from './UnitTraitsFilter.vue';

export default {
  components: {
    Header,
    Content,
    UnitCost,
    UnitTraits,
  },
  data() {
    return {};
  },
  methods: {
    changeContent(content) {
      // console.log(`fileter: ${content}`);
      this.$emit('content', content);
    },
    reset() {},
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
