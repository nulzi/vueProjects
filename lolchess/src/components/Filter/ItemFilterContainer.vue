<template>
  <div class="filter-container">
    <Header @reset="reset"></Header>
    <Content :content="content" @content="changeContent"></Content>
    <Type :middletype="toptype" @type="changeType"></Type>
    <Base :middlebase="topbase" @base="changeBase"></Base>
    <!-- {{ `${content}, ${type}, ${base}` }} -->
  </div>
</template>

<script>
import Header from './FilterHeader.vue';
import Content from './ContentFilter.vue';
import Type from './ItemTypeFilter.vue';
import Base from './BaseItemFilter.vue';

import newdata from '../../assets/newdata.json';

export default {
  props: ['content', 'toptype', 'topbase'],
  components: {
    Header,
    Content,
    Type,
    Base,
  },
  data() {
    return { newdata, filteredItems: [], tempItems: [] };
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
    changeType(type) {
      console.log(`type: ${type}`);
      // this.initItems();
      // if (type == 0) return;
      this.typesFilter();
      this.excute();
      this.$emit('type', type);
    },
    changeBase(itemID) {
      // console.log(`fileter: ${itemID}`);
      this.$emit('base', itemID);
    },
    GetItemUrl(item) {
      for (let j in newdata.items) {
        if (item == newdata.items[j].id) {
          // console.log(newdata.items[j].icon.toLowerCase().split('.'));
          let temp = newdata.items[j].icon
            .toLowerCase()
            .split('.')
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            '.'
          )}.png`;
        }
      }
    },
    initItems() {
      console.log('container init()');
      this.filteredItems = this.GetItems();
    },
    GetItems() {
      const temp = [];
      for (let i = 0; i < newdata.items.length; i++) {
        temp.push(newdata.items[i]);
      }
      // console.log(this.items);
      return temp;
    },
    typesFilter(filter) {
      this.initItems();
      if (filter.length === 0) return;
      for (let i in filter) {
        this.filteredItems = this.filteredItems.concat(
          this.typeFilter(filter[i])
        );
      }
    },
    typeFilter(type) {
      let result = [];
      result = this.filteredItems.filter((item) => item.icon.includes(type));
      return result;
    },
    baseFilter() {
      this.initItems();
      if (this.isClicked == 0) {
        return;
      }
      this.filteredItems = this.filteredItems.filter(
        (item) =>
          item.from.includes(this.isClicked) || item.id == this.isClicked
      );
    },
    excute() {
      console.log('container excute()');
      this.$store.commit('SetItems', this.filteredItems);
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
