<template>
  <div class="app_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <Filter></Filter>
      <div class="item-content">
        <ItemTable v-if="container === 0"></ItemTable>
        <ItemApex v-if="container === 1"></ItemApex>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Filter from './Filter/ItemFilterContainer.vue';
import ItemTable from './Item/ItemTable.vue';
import ItemApex from './Item/ItemApex.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Footer,
    ItemTable,
    ItemApex,
    Filter,
  },
  data() {
    return {
      container: 0,
    };
  },
  methods: {},
};
</script>

<style>
.app_container {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: stretch;
  grid-template-areas:
    'header header header'
    'a filter b'
    'footer footer footer';
  height: 100vh;
  align-items: stretch;
}
.header-content {
  grid-area: header;
}
.footer-content {
  grid-area: footer;
  height: 30px;
}
.sidebar-a {
  grid-area: a;
}
.sidebar-b {
  grid-area: b;
}
.filter-content {
  grid-area: filter;
  background-color: #faf8ec;
  height: 94%;
}
.item-content {
  background-color: rgb(172, 225, 227);
  padding: 0px 0px 20px;
}
</style>
