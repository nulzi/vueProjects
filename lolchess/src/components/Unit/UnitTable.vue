<template>
  <div class="table-container">
    <table>
      <thead>
        <th><div class="table-item">Unit</div></th>
        <th><div class="table-tier">Tier</div></th>
        <th><div class="table-avg">Avg Place</div></th>
        <th><div class="table-winrate">Winrate</div></th>
        <th><div class="table-frequency">Frequency</div></th>
      </thead>
      <tbody>
        <tr v-for="(name, index) in champs" :key="index" :v-show="filter">
          <!-- <img :src="this.GetSkillUrl(name)" alt="dd" /> -->
          <!-- {{
            this.GetChampionUrl(name)
          }} -->
          <td>
            <div class="table-item">
              <div class="help-tip">
                <a>
                  <img
                    class="unit-img"
                    :src="GetChampionUrl(name)"
                    :style="GetChampBorderByCost(costs[index])"
                    alt="itemImg"
                    @click="showModal(name)"
                  />
                </a>
                <div class="tip-container">
                  <div class="tip-name-container">
                    <p class="tip-name">
                      {{ name.slice(5, name.length) }}
                    </p>
                  </div>
                  <p class="tip-detail">
                    <br />
                    특성: 블라블라
                    <br />
                    추천템:
                    <img
                      v-for="(recommand, index) in recommands"
                      :key="index"
                      :src="this.GetItemUrl(recommand)"
                      alt="recommanditem1"
                      width="15"
                      height="15"
                    />
                  </p>
                </div>
              </div>
              <div class="itemName">
                <a>{{ name.slice(5, name.length) }}</a>
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
// import alldata from '../../assets/data.json';
import newdata from '../../assets/newdata.json';

export default {
  props: ['topcost', 'toptraits'],
  data() {
    return {
      newdata,
      champs: [],
      stage2: [],
      costs: [],
      championBorderStyle: [
        'border:solid 2px gray;',
        'border:solid 2px green;',
        'border:solid 2px blue;',
        'border:solid 2px purple;',
        'border:solid 2px #ffd700;',
      ],
      recommands: [1, 6, 3],
    };
  },
  methods: {
    showModal(name) {
      // console.log(`emit:${name}`);
      this.$emit('open', 1, name);
    },
    filter() {
      return false;
    },
    GetItemUrl(item) {
      // console.log(item);
      // for (let j in alldata.items) {
      //   if (item == alldata.items[j].id) {
      //     return `https://raw.communitydragon.org/latest/game/${alldata.items[
      //       j
      //     ].icon
      //       .toLowerCase()
      //       .slice(0, -4)}.png`;
      //   }
      // }// console.log(item)
      for (let j in this.newdata.items) {
        if (item == this.newdata.items[j].id) {
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
    GetChampName() {
      for (let i = 0; i < newdata.setData[0].champions.length; i++) {
        let name = newdata.setData[0].champions[i].apiName.replace(/ /g, '');
        const exception = [
          'TFT6_TheGoldenEgg',
          'TFT7_IvernMinion',
          'TFT7_JadeStatue',
          'TFT7_LagoonRelic',
          'TFT7_Nomsy',
        ];
        if (exception.includes(name)) continue;
        // else if (
        //   name == 'TFT7_Nomsymage' ||
        //   name == 'TFT7_Nomsyevoker' ||
        //   name == 'TFT7_Nomsycannoneer'
        // ) {
        //   // name = 'TFT7_Nomsy';
        //   this.champs.push(name);
        // }
        // else if (name =='TFT7b_Heimerdinger') {
        //   name ='TFT7_Heimerdinger';
        //   this.champs.push(name);
        // } else if (name =='TFT7b_Lulu') {
        //   name ='TFT7_Lulu';
        //   this.champs.push(name);
        // } else if (name =='TFT7b_Lristana') {
        //   name ='TFT7_Lristana';
        //   this.champs.push(name);
        // }
        else this.champs.push(name);
      }
      // console.log(this.champs);
    },
    GetChampNameStage2() {
      //store name that has different url
      const exceptionStage2 = ['lagoon', 'monolith', 'darkflight', 'prodigy'];
      for (let i = 0; i < newdata.setData[0].champions.length; i++) {
        let name = newdata.setData[0].champions[i].apiName
          .toLowerCase()
          .replace(/ /g, '');
        if (
          newdata.setData[0].champions[i].traits[0] === undefined ||
          newdata.setData[0].champions[i].traits[1] === undefined
        )
          continue;
        else if (
          exceptionStage2.includes(
            newdata.setData[0].champions[i].traits[0].toLowerCase()
          ) ||
          exceptionStage2.includes(
            newdata.setData[0].champions[i].traits[1].toLowerCase()
          )
        )
          this.stage2.push(name);
        // console.log(newdata.setData[0].champions[i].traits[0].toLowerCase());
      }
      // console.log(newdata.setData[0].champions[0].traits[0].toLowerCase());
      this.stage2.push(
        'tft7b_heimerdinger',
        'tft7b_lulu',
        'tft7b_tristana',
        'tft7_jayce',
        'tft7_graves',
        'tft7_pantheon',
        'tft7_rakan',
        'tft7_lux',
        'tft7_zyra',
        'tft7_jax',
        'tft7_nasus',
        'tft7_wukong'
      );
      // console.log(this.stage2);
    },
    GetChampCost() {
      //store cost for champBorder
      for (let i = 0; i < newdata.setData[0].champions.length; i++) {
        let cost = newdata.setData[0].champions[i].cost;
        if (cost === 11 || cost === 8) continue;
        else {
          this.costs.push(cost);
          // console.log(`${this.champs[i]}:${this.costs[i]}`);
        }
        // console.log(`${this.champs[i]}:${this.costs[i]}`);
      }
      // console.log(this.costs);
    },
    GetChampBorderByCost(champCost) {
      //return border style each cost
      if (champCost === 1) {
        return this.championBorderStyle[0];
      } else if (champCost === 2) {
        return this.championBorderStyle[1];
      } else if (champCost === 3) {
        return this.championBorderStyle[2];
      } else if (champCost === 4) {
        return this.championBorderStyle[3];
      } else if (champCost === 5) {
        return this.championBorderStyle[4];
      }
    },
    GetChampionUrl(championID) {
      // get url by champion ID
      // ex) TFT7_NomsyCannonee
      for (let i in this.newdata.setData) {
        for (let j in this.newdata.setData[i].champions) {
          if (this.newdata.setData[i].champions[j].apiName == championID) {
            let temp = this.newdata.setData[i].champions[j].icon
              .toLowerCase()
              .split('/');
            // console.log(temp);
            // let newUrl = temp.slice(0, -1);
            let newUrl2 = temp.slice(-1)[0].split('.');
            // console.log(newUrl);
            // console.log(newUrl2);
            if (newUrl2[0] == 'tft7_volibear') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/${
                newUrl2[0]
              }_square.${newUrl2[1].slice(0, 8)}.png`;
            } else if (newUrl2[0] == 'tft7_zippy') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/icons2d/${
                newUrl2[0]
              }_square.${newUrl2[1]}.png`;
            } else if (newUrl2[0] == 'tft7_dragongreen') {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/tft7_jadedragon_square.${newUrl2[1].slice(
                0,
                8
              )}.png`;
            } else {
              return `https://raw.communitydragon.org/latest/game/assets/characters/${championID.toLowerCase()}/hud/${
                newUrl2[0]
              }_square.${newUrl2[1]}.png`;
            }
          }
        }
      }
    },
    costFilter() {
      const { champions } = this.newdata.setData[0];
      const costs = [1, 0, 1, 1, 0];
      let champs = [];
      for (let cost = 0; cost < costs.length; cost++) {
        if (costs[cost] == 1) {
          const temp = champions.filter((v) => v.cost == cost + 1);
          // console.log(temp);
          champs.push(temp);
        }
      }
      let temp = champs[0];
      if (champs.length > 1) {
        for (let i = 1; i < champs.length; i++) {
          temp = temp.concat(champs[i]);
        }
      }
      champs = temp;
      console.log(champs);
    },
    traitsFilter() {
      const { champions } = this.newdata.setData[0];
      const filteredChampionsTrait = champions.filter((champion) =>
        champion.traits.includes('Astral')
      );
      console.log(filteredChampionsTrait);
    },
    testFilter() {
      const objPersons = {
        persons: [
          { name: 'kim', age: 20, gender: 'man' },
          { name: 'vicky', age: 22, gender: 'women' },
          { name: 'gloria', age: 42, gender: 'women' },
          { name: 'gom', age: 27, gender: 'man' },
        ],
      };
      const { persons } = objPersons;
      // ES5: const persons = Object.assign([], objPersons.persons)와 동일
      console.log(Object.values(persons));
      const mapPersons = Object.values(persons).map((v) =>
        Object.keys(v).map((v2) => v[v2])
      );
      const filteredPersonsAge = persons.filter((v) => v.age > 25);
      console.log(mapPersons);
      console.log(filteredPersonsAge);
    },
  },
  created() {
    this.GetChampName();
    this.GetChampNameStage2();
    this.GetChampCost();
  },
  updated() {
    // console.log(this.cost);
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
  width: 200px;
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
.unit-img {
  border-radius: 5px;
}
</style>
