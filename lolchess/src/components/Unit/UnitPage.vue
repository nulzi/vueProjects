<template>
  <UnitInfo
    v-if="modalOpen"
    @close="modalOpen = 0"
    :champName="this.champName"
  ></UnitInfo>
  <div class="app_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <Filter @content="changeContent"></Filter>
      <div class="unit-content">
        <UnitTable v-if="container === 0" @open="showModal"></UnitTable>
        <UnitApex v-if="container === 1"></UnitApex>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Filter from '../Filter/UnitFilterContainer.vue';
import UnitTable from './UnitTable.vue';
import UnitApex from './UnitApex.vue';
import UnitInfo from './UnitInfo.vue';
import Footer from '../Footer.vue';

export default {
  components: {
    Header,
    Filter,
    UnitTable,
    UnitApex,
    UnitInfo,
    Footer,
  },
  data() {
    return {
      modalOpen: 0,
      container: 0,
      champName: '',
    };
  },
  methods: {
    showModal(modalOpen, name) {
      this.modalOpen = modalOpen;
      this.champName = name;
      // console.log(`champName: ${this.champName}`);
    },
    changeContent(content) {
      // console.log(`page: ${content}`);
      this.container = content;
    },
  },
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
.unit-content {
  background-color: rgb(172, 225, 227);
  padding: 0px 0px 20px;
}
</style>
