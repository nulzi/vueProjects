<template>
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Content :content="content" @content="changeContent"></Content>
    <UnitCost :cost="cost" @cost="changeCost"></UnitCost>
    <UnitTraits :traits="traits" @traits="changeTrait"></UnitTraits>
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import UnitCost from './UnitCostFilter.vue';
import UnitTraits from './UnitTraitsFilter.vue';

export default {
  props: ['content', 'cost', 'traits'],
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
    reset() {
      // console.log('reset');
      this.$emit('reset');
    },
    changeContent(content) {
      // console.log(`fileter: ${content}`);
      this.$emit('content', content);
    },
    changeCost(cost) {
      // console.log(`fileter: ${cost}`);
      this.$emit('cost', cost);
    },
    changeTrait(traits) {
      // console.log(`fileter: ${traits}`);
      this.$emit('traits', traits);
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
