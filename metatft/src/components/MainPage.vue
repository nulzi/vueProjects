<template>
  <div class="mainpage">
    <Title></Title>
    <Filter></Filter>
    <StatTable></StatTable>
  </div>
</template>

<script>
import Title from "./main/TitleBar.vue";
import Filter from './main/FilterBlock.vue'
import StatTable from './main/StatTableContainer.vue'
export default {
  components: {
    Title,
    Filter,
    StatTable,
  },
};
</script>

<style scoped>
.mainpage {
  background-color: #313236;
  max-width: 1110px;
  height: 1000px;
  color: rgb(230, 230, 230);
  justify-self: center;
}
</style>
