<template>
  <div class="filter-container">
    <Header></Header>
    <Content></Content>
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
  methods: {},
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
