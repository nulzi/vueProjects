<template>
  <div class="filter2">
    <img
      v-for="item in items"
      :key="item"
      :id="item.name"
      class="filter-item-img unclicked"
      @click="changeBase(item)"
      :src="this.GetItemUrl(item.id)"
      :alt="item.name"
    />
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';

export default {
  props: ['middlebase'],
  data() {
    return {
      newdata,
      items: [
        { name: 'swordFilter', id: 1 },
        { name: 'bowFilter', id: 2 },
        { name: 'rodFilter', id: 3 },
        { name: 'tearFilter', id: 4 },
        { name: 'vestFilter', id: 5 },
        { name: 'cloakFilter', id: 6 },
        { name: 'beltFilter', id: 7 },
        { name: 'glovesFilter', id: 9 },
        { name: 'spatula', id: 8 },
      ],
      isClicked: 0,
      filteredItems: [],
    };
  },
  methods: {
    reset(base) {
      if (base == 0) {
        // console.log('reset');
        for (let item of this.items) {
          // console.log(item);
          if (this.isClicked === item.id) {
            const classList = document.getElementById(item.name).classList;
            classList.replace('clicked', 'unclicked');
          }
        }
      }
      this.isClicked = base;
    },
    GetItemUrl(item) {
      for (let j in this.newdata.items) {
        if (item == this.newdata.items[j].id) {
          // console.log(this.newdata.items[j].icon.toLowerCase().split('.'));
          let temp = this.newdata.items[j].icon
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
    excute() {
      this.$store.commit('SetBaseFilter', this.isClicked);
      console.log('excute() in baseitemfilter', this.$store.state.baseFilter);
    },
    changeBase(item) {
      console.log('changeBase()');
      const classList = document.getElementById(item.name).classList;
      const isExist = document.getElementsByClassName(
        'filter-item-img clicked'
      );

      if (isExist.length === 0) {
        this.isClicked = item.id;
        classList.replace('unclicked', 'clicked');
        // this.emitter.emit('baseFilter', item.id);
      } else {
        //filter off
        if (classList.contains('clicked')) {
          this.isClicked = 0;
          classList.replace('clicked', 'unclicked');
          // this.emitter.emit('baseFilter', 0);
        } else {
          //filter off
          isExist.item(0).classList.replace('clicked', 'unclicked');
          //filter on
          this.isClicked = item.id;
          classList.replace('unclicked', 'clicked');
          // this.emitter.emit('baseFilter', item.id);
        }
      }
      this.$store.dispatch('filterItems', this.isClicked);
      // this.baseFilter();
      // this.excute();
      // console.log(`store basefilter: ${this.$store.state.baseFilter}`);
      this.$emit('base', this.isClicked);
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
  },
  created() {
    // this.initItems();
    // this.excute();
  },
  updated() {
    this.reset(this.middlebase);
  },
};
</script>

<style scoped>
.filter2 {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  display: flex;
}
.unclicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #c3936f;
  box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3);
}
.clicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #eec9ad;
  box-shadow: inset 4px 4px 0px 0 #eec9ad,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.filter-item-img {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
}
</style>
