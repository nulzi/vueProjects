<template>
  <div class="filter1">
    <!-- {{ this.filter }} -->
    <button
      v-for="(type, index) in types"
      :key="index"
      :id="type"
      class="filter-type unclicked"
      @click="changeType(type, index)"
    >
      {{ type }}
    </button>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';
import tierItem from '../../assets/tierItem.json';

export default {
  props: ['middletype'],
  data() {
    return {
      newdata,
      types: [
        'normal(일반)',
        'emblem(상징)',
        'ornn(오른)',
        'radiant(찬란한)',
        'shimmerscale(빛비늘)',
      ],
      isClicked: [0, 0, 0, 0, 0],
      tierItem,
      filter: [],
      filteredItems: [],
    };
  },
  methods: {
    reset() {
      for (let i = 0; i < this.isClicked.length; i++) {
        if (this.isClicked[i] === 1) {
          const classList = document.getElementById(this.types[i]).classList;
          classList.replace('clicked', 'unclicked');
        }
      }
      this.isClicked = this.middletype;
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
    changeType(type, index) {
      console.log('changeType()');
      const classList = document.getElementById(type).classList;
      const word = [
        'Standard/',
        'Emblem',
        'Ornn_',
        'Radiant/',
        'Shimmerscale/',
      ];
      // filter off
      if (classList.contains('clicked')) {
        this.isClicked[index] = 0;
        this.filter = this.filter.filter((type) => type != word[index]);
        classList.replace('clicked', 'unclicked');
      } else {
        //filter on
        this.isClicked[index] = 1;
        this.filter.push(word[index]);
        classList.replace('unclicked', 'clicked');
      }
      // this.filteredItems = this.typesFilter(this.filter);
      // this.excute();
      this.$store.dispatch('filterItems', this.filter);
      this.$emit('type', index);
    },
    typesFilter(filter) {
      this.initItems();
      let result = [];
      if (filter.length === 0) result = this.filteredItems;
      for (let i in filter) {
        result = result.concat(this.typeFilter(filter[i]));
      }
      return result;
    },
    typeFilter(type) {
      let result = [];
      result = this.filteredItems.filter((item) => item.icon.includes(type));
      return result;
    },
    excute() {
      this.$store.commit('SetItems', this.filteredItems);
    },
  },
  created() {
    // this.initItems();
    // this.excute();
  },
  updated() {
    this.reset();
  },
};
</script>

<style scoped>
.filter1 {
  display: flex;
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
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
.filter-type {
  display: flex;
  margin-right: 10px;
}
</style>
