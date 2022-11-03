<template>
  <div class="filter2">
    <div class="filter-raw">
      <div
        v-for="(trait, index) in traitNames"
        :key="index"
        :class="traitChange(index)"
        :style="{
          'background-image': `url(${this.GetTraitUrl(trait)})`,
          'background-size': '65%',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
        }"
        @click="changeTrait(index)"
        alt="trait image"
      />
    </div>
  </div>
</template>

<script>
import traitsdata from '../../assets/tfttraits.json';
import newdata from '../../assets/newdata.json';

export default {
  props: ['traits'],
  data() {
    return {
      newdata,
      traitsdata,
      isClicked: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,
      ],
      traitNames: [],
    };
  },
  methods: {
    reset() {
      this.isClicked = this.traits;
    },
    traitChange(index) {
      return this.isClicked[index] === 1
        ? 'filter-trait-img clicked'
        : 'filter-trait-img unclicked';
    },
    GetTraitUrl(traitName) {
      for (let i in this.newdata.setData[0].traits) {
        // console.log(i);
        if (this.newdata.setData[0].traits[i].name == traitName) {
          let temp = this.newdata.setData[0].traits[i].icon
            .toLowerCase()
            .split('.')
            .slice(0, -1);
          return `https://raw.communitydragon.org/latest/game/${temp.join(
            '.'
          )}.png`;
        }
      }
    },
    GetTraitName() {
      let temp = [];
      for (let i in this.newdata.setData[0].traits) {
        temp.push(this.newdata.setData[0].traits[i].name);
      }
      temp.sort();
      // console.log(temp);
      return temp;
    },
    changeTrait(index) {
      if (this.isClicked[index] === 1) {
        this.isClicked[index] = 0;
      } else {
        this.isClicked[index] = 1;
      }
      // console.log(this.isClicked[i]);
      this.$emit('traits', this.isClicked);
    },
  },
  created() {
    this.traitNames = this.GetTraitName();
  },
  updated() {
    this.reset();
  },
};
</script>

<style scoped>
.filter2 {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
}
.filter2 .filter-trait-img {
  display: flex;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0.3rem;
}
.filter-raw {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
</style>
