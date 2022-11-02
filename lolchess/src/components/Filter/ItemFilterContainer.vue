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
    changeType(type) {
      // console.log(`fileter: ${content}`);
      this.$emit('type', type);
    },
    changeBase(itemID) {
      // console.log(`fileter: ${itemID}`);
      this.$emit('base', itemID);
    },
    baseFilter() {
      const itemID = 1;
      let itemArray = [];
      for (let i in this.newdata.items) {
        if (
          this.newdata.items[i].from.includes(itemID) ||
          this.newdata.items[i].id == itemID
        ) {
          const temp = this.newdata.items[i].id;
          // console.log(temp);
          itemArray.push(temp);
        }
      }
      // console.log(itemArray);
      return itemArray;
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
    typeFilter() {
      let itemArray = [];
      for (let i in this.newdata.items) {
        // if (
        //   !this.newdata.items[i].apiName.includes('Augment') &&
        //   this.newdata.items[i].apiName.includes('Emblem')
        // ) {
        //   const temp = this.newdata.items[i].id;
        //   console.log(temp);
        //   itemArray.push(temp);
        // }
        const word = 'Shimmerscale/';
        // Ornn
        // Radiant/
        // Standard/ need exception
        // Shimmerscale/ duplicate id 3000, 3010
        // Emblem
        // console.log(this.newdata.items[i].name.includes(word));
        // if (this.newdata.items[i].name === '') continue;
        // else
        if (this.newdata.items[i].icon.includes(word)) {
          const temp = this.newdata.items[i].id;
          console.log(temp);
          itemArray.push(temp);
        }
      }
      return itemArray;
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 0.5rem;
}
</style>
