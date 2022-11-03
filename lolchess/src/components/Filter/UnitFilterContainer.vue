<template>
  <!-- {{ this.traitsFilter() }} -->
  <!-- {{ this.costFilter() }} -->
  <div class="filter-container">
    {{ cost }}
    <Header @reset="reset"></Header>
    <Content :content="content" @content="changeContent"></Content>
    <UnitCost :middlecost="cost" @cost="changeCost"></UnitCost>
    <UnitTraits :traits="traits" @traits="changeTrait"></UnitTraits>
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import UnitCost from './UnitCostFilter.vue';
import UnitTraits from './UnitTraitsFilter.vue';

import newdata from '../../assets/newdata.json';

export default {
  props: ['content', 'cost', 'traits'],
  components: {
    Header,
    Content,
    UnitCost,
    UnitTraits,
  },
  data() {
    return { newdata };
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
      console.log(`fileter: ${cost}`);
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
