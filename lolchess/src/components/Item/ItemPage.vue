<template>
  <div>
    <ItemInfo
      v-if="modalOpen"
      @close="modalOpen = 0"
      :itemID="this.itemID"
    ></ItemInfo>
    <div class="app_container">
      <div class="header-content">
        <Header></Header>
      </div>
      <div class="sidebar-a"></div>
      <div class="sidebar-b"></div>
      <div class="filter-content">
        <Filter
          :content="this.container"
          :toptype="this.type"
          :topbase="this.base"
          @reset="reset"
          @content="changeContent"
          @type="changeType"
          @base="changeBase"
        ></Filter>
        <div class="item-content">
          <!-- {{ this.type }} -->
          <ItemTable
            v-if="container === 0"
            :pagetype="this.type"
            :pagebase="this.base"
            @open="showModal"
          ></ItemTable>
          <ItemApex v-if="container === 1"></ItemApex>
        </div>
      </div>
      <div class="footer-content">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Filter from '../Filter/ItemFilterContainer.vue';
import ItemTable from './ItemTable.vue';
import ItemApex from './ItemApex.vue';
import ItemInfo from './ItemInfo.vue';
import Footer from '../Footer.vue';

export default {
  components: {
    Header,
    Footer,
    ItemTable,
    ItemApex,
    ItemInfo,
    Filter,
  },
  data() {
    return {
      modalOpen: 0,
      itemID: 0,
      container: 0,
      type: [0, 0, 0, 0, 0],
      base: 0,
    };
  },
  methods: {
    showModal(modalOpen, id) {
      this.modalOpen = modalOpen;
      this.itemID = id;
      // console.log(`champName: ${this.champName}`);
    },
    reset() {
      // console.log('reset');
      this.container = 0;
      this.type = [0, 0, 0, 0, 0];
      this.base = 0;
    },
    changeContent(content) {
      // console.log(`content${content}`);
      this.container = content;
    },
    changeType(index) {
      // this.type[index - 1] = 1;
      if (this.type[index] === 0) this.type.splice(index, 1, 1);
      else this.type.splice(index, 1, 0);
      // if (this.type[index] === 0) this.$set(this.type, index, 1);
      // else this.$set(this.type, index, 0);
      // if (this.type[index] === 0) this.type[index].push(1);
      // else this.type[index].push(0);
      // this.type[index].push(1);
      // this.type.splice(index, 1, 1);
      // console.log(`type${this.type}`);
      console.log(this.type);
    },
    changeBase(base) {
      // console.log(`base${base}`);
      this.base = base;
    },
  },
  beforeUpdate() {
    console.log('update type', this.type);
    console.log('update base', this.base);
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
