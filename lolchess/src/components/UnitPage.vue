<template>
  <div class="app_container">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="sidebar-a"></div>
    <div class="sidebar-b"></div>
    <div class="filter-content">
      <div>
        <span class="filter">Filter</span>
        <button
          id="tableBtn"
          @click="changeTable('tableBtn', 'filter-change-button clicked')"
          class="filter-change-button clicked"
        >
          table
        </button>
        <button
          id="graphBtn"
          @click="changeTable('graphBtn', 'filter-change-button clicked')"
          class="filter-change-button unclicked"
        >
          graph
        </button>
      </div>
      <div class="filter1">
        <button
          id="1cost"
          class="cost unclicked"
          @click="changeButton('1cost', 'cost clicked')"
        >
          <img
            class="coin"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="cost"
          />
          <span class="coin">1</span>
        </button>
        <button
          id="2cost"
          class="cost unclicked"
          @click="changeButton('2cost', 'cost clicked')"
        >
          <img
            class="coin"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="cost"
          />
          <span class="coin">2</span>
        </button>
        <button
          id="3cost"
          class="cost unclicked"
          @click="changeButton('3cost', 'cost clicked')"
        >
          <img
            class="coin"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="cost"
          />
          <span class="coin">3</span>
        </button>
        <button
          id="4cost"
          class="cost unclicked"
          @click="changeButton('4cost', 'cost clicked')"
        >
          <img
            class="coin"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="cost"
          />
          <span class="coin">4</span>
        </button>
        <button
          id="5cost"
          class="cost unclicked"
          @click="changeButton('5cost', 'cost clicked')"
        >
          <img
            class="coin"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="cost"
          />
          <span class="coin">5</span>
        </button>
      </div>
      <div class="filter2">
        <div class="raw1">
          <div
            v-for="(trait, index) in traits"
            :key="index"
            :class="traitChange(index)"
            :style="{
              'background-image': `url(${this.GetTraitImage(trait)})`,
              'background-size': '65%',
              'background-repeat': 'no-repeat',
              'background-position': 'center',
            }"
            @click="changeState(index)"
            alt="trait image"
          />
        </div>
      </div>
      <div class="unit-content">
        <div v-if="container === 0" class="table-container">
          <table>
            <thead>
              <th><div class="table_item">Unit</div></th>
              <th><div class="table_tier">Tier</div></th>
              <th><div class="table_avg">Avg Place</div></th>
              <th><div class="table_winrate">Winrate</div></th>
              <th><div class="table_frequency">Frequency</div></th>
            </thead>
            <tbody>
              <tr v-for="name in units" :key="name">
                <td>
                  <div class="table_item">
                    <div class="help-tip">
                      <a
                        ><img
                          class="unit-img"
                          :src="GetChampionUrlByName(name)"
                          :style="championBorderStyle[0][0].border"
                          alt="itemImg"
                      /></a>
                      <div class="tip-container">
                        <div class="tip-name-container">
                          <p class="tip-name">{{ name }}</p>
                        </div>
                        <p class="tip-detail">
                          <br />
                          특성: 블라블라
                          <br />
                          추천템:
                          <img
                            :src="this.GetItem(1)"
                            alt="recommanditem1"
                            width="15px"
                            height="15px"
                          />
                          <img
                            :src="this.GetItem(7)"
                            alt="recommanditem2"
                            width="15px"
                            height="15px"
                          />
                          <img
                            :src="this.GetItem(3)"
                            alt="recommanditem3"
                            width="15px"
                            height="15px"
                          />
                        </p>
                      </div>
                    </div>
                    <div class="itemName">
                      <a>{{ name }}</a>
                    </div>
                  </div>
                </td>
                <td><div class="table_tier">S</div></td>
                <td><div class="table_avg">3.53</div></td>
                <td><div class="table_winrate">22.9%</div></td>
                <td><div class="table_frequency">24,258 (2.5%)</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="container === 1" class="graph-container">
          <Apex></Apex>
        </div>
      </div>
    </div>
    <div class="footer-content">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import alldata from '../assets/data.json';
import newdata from '../assets/newdata.json';
import traitsdata from '../assets/tfttraits.json';

import Header from './Header.vue';
import Footer from './Footer.vue';
import Apex from './Apex.vue';

export default {
  components: {
    Apex,
    Header,
    Footer,
  },
  data() {
    return {
      alldata,
      units: ['vladimir', 'ashe', 'braum', 'diana', 'dragonpurple'],
      container: 0,
      isClicked: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      championBorderStyle: [
        //코스트 기준으로 바꾸는게 좋아보임
        {
          0: {
            border: 'border:solid 2px gray;',
          },
        },
        {
          1: {
            border: 'border:solid 2px green;',
          },
        },
        {
          2: {
            border: 'border:solid 2px blue;',
          },
        },
        {
          3: {
            border: 'border:solid 2px purple;',
          },
        },
        {
          4: {
            border: 'border:solid 2px orange;',
          },
        },
        {
          5: {
            border: 'border:solid 2px yellow;',
          },
        },
        {
          6: {
            border: 'solid 2px red',
          },
        },
      ],
    };
  },
  methods: {
    changeState(index) {
      if (this.isClicked[index] === true) {
        this.isClicked[index] = false;
      } else {
        this.isClicked[index] = true;
      }
      // console.log(this.isClicked[i]);
    },
    changeButton(id, class_name) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName(class_name);
      if (isExist.length === 0) {
        //선택된 필터가 없는 경우
        classList.replace('unclicked', 'clicked');
      } else {
        //선택된 필터가 이미 있는 경우

        //이미 선택된 것을 끄고 싶을 경우
        if (classList.contains('clicked')) {
          classList.replace('clicked', 'unclicked');
        } else {
          //다른 것을 선택한 경우
          //선택된 필터를 끄기
          isExist.item(0).classList.replace('clicked', 'unclicked');
          //선택한 필터 켜기
          classList.replace('unclicked', 'clicked');
        }
      }
    },
    changeTable(id, class_name) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName(class_name);
      //checked filter off
      isExist.item(0).classList.replace('clicked', 'unclicked');
      //checked filter on
      classList.replace('unclicked', 'clicked');
      if (id === 'tableBtn') this.container = 0;
      else this.container = 1;
    },
    GetItem(item) {
      // console.log(item);
      for (let j in this.alldata.items) {
        if (item == this.alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${this.alldata.items[
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
      //url link媛 ?ㅻⅨ 梨?쇱??대? ??ν湲?+      const exceptionStage2 = ['lagoon', 'monolith', 'darkflight', 'prodigy'];
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
      //??由?蹂寃⑥ ?? 梨?쇱?肄?ㅽ????+      for (let i = 0; i < newdata.setData[0].champions.length; i++) {
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
      //肄?ㅽ몄 ?곕Ⅸ ??由??ㅽ??諛?
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
    GetTraitName() {
      for (let i = 0; i < traitsdata.length; i++) {
        if (traitsdata[i].set === 'TFTSet7') {
          this.traits.push(traitsdata[i].display_name);
        }
      }
      // console.log(this.traits);
    },
    GetTraitImage(trait) {
      // console.log(trait.toLowerCase());
      const exceptionNone = ['assassin', 'shapeshifter'];
      const exceptionStage2 = ['lagoon', 'monolith', 'darkflight', 'prodigy'];
      const exception2 = ['mage', 'mystic'];
      if (exceptionNone.includes(trait.toLowerCase())) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_${trait.toLowerCase()}.png`;
      } else if (exceptionStage2.includes(trait.toLowerCase())) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_${trait.toLowerCase()}.tft_set7_stage2.png`;
      } else if (trait.toLowerCase() === 'bruiser') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_6_bruiser.png`;
      } else if (exception2.includes(trait.toLowerCase())) {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_2_${trait.toLowerCase()}.png`;
      } else if (trait.toLowerCase() === 'scalescorn') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_dragonbane.png`;
      } else if (trait.toLowerCase() === 'cavalier') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_5_cavalry.png`;
      } else if (trait.toLowerCase() === 'spelltheif') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_spellthief.png`;
      } else if (trait.toLowerCase() === 'cannoneer') {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_5_cannoneer.png`;
      } else {
        return `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/trait_icon_7_${trait.toLowerCase()}.png`;
      }
    },
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
.filter1,
.filter2,
.filter {
  padding: 0.5rem 1.3rem;
  margin: 0.5rem 0rem;
}
.filter {
  font-size: 20px;
  color: black;
}
.filter1,
.filter2 .raw1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.filter2 .filter-trait-img {
  display: flex;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0.3rem;
}
.filter2 .empty-trait {
  width: 30px;
  height: 30px;
  margin: 0.3rem;
}
.clicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  /* background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.22),
    rgba(255, 255, 255, 0.25)
  ); */
  border: 0.1px solid #c3936f;
  box-shadow: 4px 4px 0px 0 #c3936f, -5px -7px 1px 0 rgba(255, 255, 255, 0.3);
}
.unclicked {
  color: black;
  border-radius: 10px;
  background-color: #faf8ec;
  border: 0.1px solid #eec9ad;
  box-shadow: inset 4px 4px 0px 0 #eec9ad,
    inset -1px -1px 7px 0 rgba(255, 255, 255, 0.5);
}
.unit-content {
  background-color: rgb(172, 225, 227);
  padding: 0px 0px 20px;
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
th .table_item {
  min-width: 170px;
  max-width: 170px;
  text-align: left;
}
.table_tier {
  display: flex;
}
.table_frequency {
  text-align: right;
}
td .table_item {
  display: flex;
  align-items: center;
}
td .table_item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
td .table_tier {
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
td .table_avg {
  font-size: 16px;
  color: rgb(15, 67, 73);
}
td .table_winrate {
  font-size: 14px;
}
td .table_frequency {
  text-align: right;
  font-size: 14px;
}
.changinP {
  z-index: 3;
}
.help-tip .tip-container {
  position: relative;
  top: -70px;
  left: 40px;
}
.help-tip .tip-name-container {
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
.help-tip .tip-detail,
.help-tip .tip-name {
  display: none;
  text-align: left;
  background-color: #1e2021;
  padding: 10px;
  /* 이 부분이 상세창 넓이 */
  width: 200px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1;
}
/* .help-tip .tip-detail::before {
  position: absolute;
  content: '';
  font-size: 10px;
  width: auto;
  height: 0;
  border: 6px solid transparent;
  border-bottom-color: #1e2021;
  top: 40px;
  left: -12px;
  rotate: -90deg;
} */
.help-tip .tip-detail img {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  border-radius: 50%;
}
.help-tip strong {
  color: rgb(31, 132, 144);
}
.help-tip .tip-name {
  font-size: 8px;
  width: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 2;
  padding: 5px;
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    opacity: 100%;
    transform: scale(1);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
.coin {
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0.1rem 0rem;
  padding: 0.2rem 0rem 0.1rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.cost {
  display: flex;
  margin-right: 10px;
}
.unit-img {
  border-radius: 5px;
}
.filter-change-button {
  margin-right: 10px;
}
</style>
