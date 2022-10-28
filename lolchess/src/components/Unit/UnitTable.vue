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
        <tr v-for="(name, index) in champs" :key="index">
          <td>
            <div class="table-item">
              <div class="help-tip">
                <a>
                  <img
                    class="unit-img"
                    :src="GetChampionUrlByName(name)"
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
                      :src="this.GetItem(recommand)"
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
import alldata from '../../assets/data.json';
import newdata from '../../assets/newdata.json';

export default {
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
    GetItem(item) {
      // console.log(item);
      for (let j in alldata.items) {
        if (item == alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${alldata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
    GetChampName() {
      for (let i = 0; i < newdata.setData[0].champions.length; i++) {
        let name = newdata.setData[0].champions[i].apiName
          .toLowerCase()
          .replace(/ /g, '');
        const exception = [
          'tft6_thegoldenegg',
          'tft7_ivernminion',
          'tft7_jadestatue',
          'tft7_lagoonrelic',
        ];
        if (exception.includes(name)) continue;
        else if (
          name == 'tft7_nomsymage' ||
          name == 'tft7_nomsyevoker' ||
          name == 'tft7_nomsycannoneer'
        ) {
          name = 'tft7_nomsy';
          this.champs.push(name);
        } else if (name == 'tft7b_heimerdinger') {
          name = 'tft7_heimerdinger';
          this.champs.push(name);
        } else if (name == 'tft7b_lulu') {
          name = 'tft7_lulu';
          this.champs.push(name);
        } else if (name == 'tft7b_tristana') {
          name = 'tft7_tristana';
          this.champs.push(name);
        } else this.champs.push(name);
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
    GetChampionUrlByName(championName) {
      // console.log(championName);
      let changeName = '';
      let temp = championName.toLowerCase();

      if (temp == 'tft7_dragonblue') {
        changeName = 'tft7_miragedragon';
      } else if (temp == 'tft7_dragongold') {
        changeName = 'tft7_shimmerscaledragon';
      } else if (temp == 'tft7_dragongreen') {
        changeName = 'tft7_jadedragon';
      } else if (temp == 'tft7_dragonpurple') {
        changeName = 'tft7_whispersdragon';
      } else if (temp == 'tft7_aquaticdragon') {
        changeName = 'tft7_sohm';
      } else if (temp == 'tft7_nomsy') {
        temp = 'tft7_nomsymage';
        changeName = 'tft7_nomsy';
      } else if (temp == 'tft7_heimerdinger') {
        temp = 'tft7b_heimerdinger';
        changeName = temp;
      } else if (temp == 'tft7_tristana') {
        temp = 'tft7b_tristana';
        changeName = temp;
      } else if (temp == 'tft7_lulu') {
        temp = 'tft7b_lulu';
        changeName = temp;
      } else {
        changeName = temp;
      }
      // console.log(temp)
      // console.log(changeName)
      if (this.stage2.includes(temp))
        return `https://raw.communitydragon.org/latest/game/assets/characters/${temp}/hud/${changeName}_square.tft_set7_stage2.png`;
      else if (temp == 'tft7_dragonguild')
        return 'https://raw.communitydragon.org/latest/game/assets/characters/tft7_dragonguild/hud/icons2d/tft7_zippy_square.tft_set7_stage2.png';
      else
        return `https://raw.communitydragon.org/latest/game/assets/characters/${temp}/hud/${changeName}_square.tft_set7.png`;
    },
  },
  mounted() {
    this.GetChampName();
    this.GetChampNameStage2();
    this.GetChampCost();
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
