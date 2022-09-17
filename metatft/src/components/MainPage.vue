<template>
  <div class="mainpage">
    <Title></Title>
    <Filter></Filter>
    <StatTable @hasOpen="showModal"></StatTable>
  </div>
</template>

<script>
import Title from './main/TitleBar.vue';
import Filter from './main/FilterBlock.vue';
import StatTable from './main/StatTableContainer.vue';
export default {
  components: {
    Title,
    Filter,
    StatTable,
  },
  methods: {
    showModal(hasOpen, img, name, about) {
      // console.log('showModal():main');
      this.$emit('hasOpen', hasOpen, img, name, about);
    },
  },
};
</script>

<style scoped>
.mainpage {
  background-color: #313236;
  width: 100%;
  max-width: 1140px;
  color: rgb(230, 230, 230);
  justify-self: center;
}
</style>
