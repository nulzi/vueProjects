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
.table-container {
  overflow: auto;
  height: 590px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.table-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
table {
  border-spacing: 0;
  width: 100%;
}
th,
td {
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid #313236;
  border-left: 0;
  border-right: 0;
  margin: 0;
}
th .table_item {
  min-width: 170px;
  max-width: 170px;
  text-align: left;
}
.table_tier {
  display: flex;
}
.table_frequency {
  text-align: right;
}
td .table_item {
  display: flex;
  align-items: center;
}
td .table_item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
td .table_tier {
  background-color: #ff7e83;
  color: #111;
  font-weight: 600;
  font-size: 18px;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
}
td .table_avg {
  font-size: 16px;
  color: rgb(15, 67, 73);
}
td .table_winrate {
  font-size: 14px;
}
td .table_frequency {
  text-align: right;
  font-size: 14px;
}
.help-tip .tip-container {
  position: relative;
  top: -70px;
  left: 40px;
}
.help-tip .tip-name-container {
  position: relative;
  top: -3px;
  left: 5px;
}
.help-tip {
  font-size: 14px;
  line-height: 26px;
}
.help-tip:hover .tip-detail,
.help-tip:hover .tip-name {
  display: block;
  transform-origin: 100% 0%;
  -webkit-animation: fadeIn 0.3s ease-in-out;
  animation: fadeIn 0.3s ease-in-out;
}
.help-tip .tip-detail,
.help-tip .tip-name {
  display: none;
  text-align: left;
  background-color: #1e2021;
  padding: 10px;
  width: 150px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1;
}
/* .help-tip .tip-detail::before {
  position: absolute;
  content: '';
  font-size: 10px;
  width: auto;
  height: 0;
  border: 6px solid transparent;
  border-bottom-color: #1e2021;
  top: 40px;
  left: -12px;
  rotate: -90deg;
} */
.help-tip .tip-detail img {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  border-radius: 50%;
}
.help-tip strong {
  color: rgb(31, 132, 144);
}
.help-tip .tip-name {
  font-size: 8px;
  width: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 2;
  padding: 5px;
}
</style>
