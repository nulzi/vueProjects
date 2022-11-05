<template>
  <div class="table-container">
    <div class="table-header">
      <div class="table-item">Item</div>
      <div class="table-tier">Tier</div>
      <div class="table-avg">Avg Place</div>
      <div class="table-winrate">Winrate</div>
      <div class="table-frequency">Frequency</div>
    </div>
    <hr />
    <table>
      <tbody>
        <tr v-for="item in this.$store.state.items" :key="item">
          <td>
            <div class="table-item">
              <div class="help-tip">
                <a>
                  <img
                    :src="GetItemUrl(item.id)"
                    alt="itemImg"
                    width="28"
                    height="28"
                    @click="showModal(item.id)"
                  />
                </a>
                <div class="tip-container">
                  <div class="tip-name-container">
                    <p class="tip-name">
                      {{ item.name }}
                    </p>
                  </div>
                  <p class="tip-detail">
                    <br />
                    <strong v-for="(effect, name) in item.effects" :key="name">
                      {{ name }}+{{ effect }}
                    </strong>
                    <span
                      v-if="!isEmptyArr(item.from)"
                      class="tip-detail-image"
                    >
                      <img
                        :src="this.GetItemUrl(item.from[0])"
                        alt="recipeitem1"
                        width="15"
                        height="15" />
                      +
                      <img
                        :src="this.GetItemUrl(item.from[1])"
                        alt="recipeitem2"
                        width="15"
                        height="15"
                    /></span>
                  </p>
                </div>
              </div>
              <div class="itemName">
                <a>{{ item.name }}</a>
              </div>
            </div>
          </td>
          <td><div class="table-tier">S</div></td>
          <td><div class="table-avg">3.53</div></td>
          <td><div class="table-winrate">22.9%</div></td>
          <td><div class="table-frequency">24,258 (2.5%)</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';

export default {
  props: ['pagetype', 'pagebase'],
  data() {
    return {
      newdata,
      items: [],
      tempItems: [],
      filteredItems: [],
    };
  },
  methods: {
    showModal(id) {
      this.$emit('open', 1, id);
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
    GetItems() {
      // get items from newdata.json
      const temp = [];
      for (let i = 0; i < this.newdata.items.length; i++) {
        temp.push(this.newdata.items[i]);
      }
      return temp;
    },
    GetItemsByJson(datas) {
      // get items from tierItem.json
      const temp = [];
      for (let i = 0; i < this.newdata.items.length; i++) {
        for (let j in datas.items.length) {
          if (this.newdata.items[i].id == datas.items[j].ID)
            temp.push(this.newdata.items[i]);
        }
      }
      return temp;
    },
    isEmptyArr(arr) {
      // check array empty
      if (Array.isArray(arr) && arr.length === 0) {
        return true;
      }

      return false;
    },
    baseFilterT(item) {
      if (item.from.includes(this.pagebase) || item.id == this.pagebase)
        return true;
    },
    typeFilterT(item) {
      const word = [
        'Standard/',
        'Emblem',
        'Ornn_',
        'Radiant/',
        'Shimmerscale/',
      ];
      for (let j in this.pagetype) {
        if (this.pagetype[j] === 1) {
          if (item.icon.includes(word[j])) return true;
        }
      }
    },
    totalFilterT() {
      let result = [];
      if (this.pagebase != 0 && this.pagetype.includes(1)) {
        console.log('together');
        result = this.tempItems
          .filter((item) => this.baseFilter(item))
          .filter((item) => this.typeFilter(item));
      } else if (this.pagebase == 0 && !this.pagetype.includes(1)) {
        console.log('reset');
        result = this.GetItems();
      } else if (this.pagebase != 0 && !this.pagetype.includes(1)) {
        console.log('base');
        result = this.tempItems.filter((item) => this.baseFilter(item));
      } else if (this.pagebase == 0 && this.pagetype.includes(1)) {
        console.log('typefilter');
        result = this.tempItems.filter((item) => this.typeFilter(item));
      }

      return result;
    },
    initItems() {
      console.log('initItems()');
      this.filteredItems = this.GetItems();
    },
    excute() {
      console.log('excute()');
      this.$store.commit('SetItems', this.filteredItems);
    },
    baseFilter(e) {
      console.log('baseFilter()');
      this.initItems();
      if (e == 0) {
        this.excute();
        return;
      }
      this.filteredItems = this.filteredItems.filter(
        (item) => item.from.includes(e) || item.id == e
      );
      console.log('filtered', this.filteredItems);
      this.excute();
    },
  },
  created() {
    this.initItems();
    this.excute();
  },
  mounted() {
    this.emitter.on('baseFilter', (e) => {
      console.log('emitter', e);
      this.baseFilter(e);
    });
  },
};
</script>

<style scoped>
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
.table-container {
  overflow: auto;
  height: 590px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.table-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
th .table-item {
  min-width: 170px;
  max-width: 170px;
  text-align: left;
}
.table-tier {
  display: flex;
}
.table-frequency {
  text-align: right;
}
td .table-item {
  display: flex;
  align-items: center;
}
td .table-item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
td .table-tier {
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
td .table-avg {
  font-size: 16px;
  color: rgb(15, 67, 73);
}
td .table-winrate {
  font-size: 14px;
}
td .table-frequency {
  text-align: right;
  font-size: 14px;
}
.tip-container {
  position: relative;
  top: -70px;
  left: 40px;
}
.tip-name-container {
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
.tip-detail,
.tip-name {
  display: none;
  text-align: left;
  background-color: #1e2021;
  padding: 10px;
  /* detail window width */
  width: 150px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1;
}
.tip-detail img {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  border-radius: 50%;
}
.help-tip strong {
  color: rgb(31, 132, 144);
}
.tip-name {
  font-size: 8px;
  width: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 2;
  padding: 5px;
}
</style>
