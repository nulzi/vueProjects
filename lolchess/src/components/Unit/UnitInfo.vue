<template>
  <div class="blackBG">
    <div class="info-container">
      <div class="info-title">
        <!-- {{ this.GetChampionUrl(this.champ.apiName) }} -->
        <h5>Unit Info</h5>
        <button class="btn-close" @click="this.$emit('close', 0)"></button>
      </div>
      <hr />
      <div class="champion-container">
        <div class="champ-detail-stars">
          <img
            class="champ-detail-stars-image"
            v-for="(champstar, index) in champStars"
            :key="index"
            @click="fillStar(index)"
            :src="require(`../../assets/${star[index]}.png`)"
            alt="champ-star"
          />
        </div>
        <div class="champ-detail-header">
          <img
            :src="GetChampionUrl(this.champ.apiName)"
            alt="champ-img"
            width="60"
            height="60"
          />
          <div class="champ-detail-name">{{ this.champ.name }}</div>
          <div class="champ-detail-sub">
            <div class="champ-detail-cost">
              <div class="champ-detail-cost-name">cost</div>
              <img
                class="champ-detail-cost-image"
                src="../../assets/coin.png"
                alt="coin-img"
              />{{ this.champ.cost }}
            </div>
            <div class="champ-detail-trait">
              <div class="champ-detail-trait-name">traits</div>
              <img
                v-for="trait in this.champ.traits"
                :key="trait"
                class="champ-detail-trait-image"
                :src="GetTraitUrl(trait)"
                alt="coin-img"
              />
            </div>
          </div>
        </div>
        <div class="champ-detail-body">
          <div class="champ-detail-main">
            <div class="champ-detail-hp">
              {{ this.champ.stats.hp }}
            </div>
            <div class="champ-detail-mana">
              {{ this.champ.stats.initialMana }} / {{ this.champ.stats.mana }}
            </div>
            <div class="champ-detail-skill">
              <img
                class="champ-detail-skill-image"
                :src="GetSkillUrl(this.champ.apiName)"
                alt="skill-img"
                width="44"
                height="44"
              />
              <div class="champ-detail-skill-info">
                <div class="champ-detail-skill-name">
                  {{ this.champ.ability.name }}
                </div>
                <div class="champ-detail-skill-desc">
                  {{ this.champ.ability.desc }}
                </div>
                <div
                  class="champ-detail-skill-variables"
                  v-for="variable in this.champ.ability.variables"
                  :key="variable"
                >
                  {{ variable.name }}: {{ variable.value }}
                </div>
              </div>
            </div>
          </div>
          <div class="champ-detail-stats">
            <table class="champ-detail-stats-table">
              <tr>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/AD.png"
                    alt="coin-img"
                  />{{ this.champ.stats.damage }}
                </td>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/AP.png"
                    alt="coin-img"
                  />100%
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/Armor.png"
                    alt="coin-img"
                  />{{ this.champ.stats.armor }}
                </td>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/MagicResist.png"
                    alt="coin-img"
                  />{{ this.champ.stats.magicResist }}
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/AS.png"
                    alt="coin-img"
                  />{{ this.champ.stats.attackSpeed.toFixed(1) }}
                </td>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/rangeGray.png"
                    alt="coin-img"
                  />{{ this.champ.stats.range }}
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/CritChance.png"
                    alt="coin-img"
                  />{{ this.champ.stats.critChance * 100 }}%
                </td>
                <td>
                  <img
                    class="champ-detail-stat-image"
                    src="../../assets/stats/critAdd.png"
                    alt="coin-img"
                  />{{ this.champ.stats.critMultiplier.toFixed(2) * 100 }}%
                </td>
              </tr>
            </table>
            <!-- <div class="champ-detail-stats-left">
              <div class="champ-detail-stat">ad/ad/ad</div>
              <div class="champ-detail-stat">armor</div>
              <div class="champ-detail-stat">attackspeed</div>
              <div class="champ-detail-stat">critchance</div>
            </div>
            <div class="champ-detail-stats-right">
              <div class="champ-detail-stat">100%</div>
              <div class="champ-detail-stat">magicResist</div>
              <div class="champ-detail-stat">range</div>
              <div class="champ-detail-stat">critMultiplier</div>
            </div> -->
          </div>
        </div>
        <div class="recommand-item">
          추천템
          <div class="recommand-item-container">
            <img
              class="recommand-item-image"
              v-for="recommandItem in recommandItems"
              :key="recommandItem"
              :src="GetItemUrl(recommandItem)"
              alt="recommand-item"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newdata from '../../assets/newdata.json';

export default {
  props: ['champName'],
  components: {},
  data() {
    return {
      newdata,
      champ: {},
      stage2: [],
      variables: [
        { name: 'variable', value: 'value' },
        { name: 'variable', value: 'value' },
      ],
      champStars: [1, 0, 0],
      star: ['starbronze', 'star', 'star'],
      recommandItems: [1, 2, 25],
    };
  },
  methods: {
    checkStar(index) {
      for (let i = 0; i < this.star.length; i++) {
        if (this.champStars[i] === 1) {
          if (index === 0) this.star[0] = 'starbronze';
          else if (index === 1) this.star[i] = 'starsilver';
          else this.star[i] = 'stargold';
        } else this.star[i] = 'star';
      }
    },
    fillStar(index) {
      if (index === 0) this.champStars = [1, 0, 0];
      else if (index === 1) this.champStars = [1, 1, 0];
      else this.champStars = [1, 1, 1];
      this.checkStar(index);
    },
    GetChamp(champName) {
      var temp = {};
      for (let i = 0; i < this.newdata.setData[0].champions.length; i++) {
        let name = this.newdata.setData[0].champions[i].apiName.replace(
          / /g,
          ''
        );
        if (name === champName) temp = this.newdata.setData[0].champions[i];
      }
      // console.log(`getchamp:${this.champ}`);
      // console.log(this.champ);
      // console.log(`temp:${temp}`);
      // console.log(temp);
      return temp;
    },
    GetChampNameStage2() {
      //store name that has different url
      const exceptionStage2 = ['lagoon', 'monolith', 'darkflight', 'prodigy'];
      for (let i = 0; i < this.newdata.setData[0].champions.length; i++) {
        let name = this.newdata.setData[0].champions[i].apiName
          .toLowerCase()
          .replace(/ /g, '');
        if (
          this.newdata.setData[0].champions[i].traits[0] === undefined ||
          this.newdata.setData[0].champions[i].traits[1] === undefined
        )
          continue;
        else if (
          exceptionStage2.includes(
            this.newdata.setData[0].champions[i].traits[0].toLowerCase()
          ) ||
          exceptionStage2.includes(
            this.newdata.setData[0].champions[i].traits[1].toLowerCase()
          )
        )
          this.stage2.push(name);
        // console.log(this.newdata.setData[0].champions[i].traits[0].toLowerCase());
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
    GetSkillUrl(championID) {
      for (let i in this.newdata.setData[0].champions) {
        if (this.newdata.setData[0].champions[i].apiName == championID) {
          let temp = this.newdata.setData[0].champions[i].ability.icon
            .toLowerCase()
            .split('/');
          // console.log(temp);
          let newUrl2 = temp.slice(-1)[0].split('.');
          // console.log(newUrl2);
          if (newUrl2[1] != 'dds') {
            return `https://raw.communitydragon.org/latest/game/assets/characters/${temp[2]}/hud/icons2d/${newUrl2[0]}.${newUrl2[1]}.png`;
          } else
            return `https://raw.communitydragon.org/latest/game/assets/characters/${temp[2]}/hud/icons2d/${newUrl2[0]}.png`;
        }
      }
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
  created() {
    // console.log(this.champName);
    this.champ = this.GetChamp(this.champName);
    console.log(`mounted:${this.champ}`);
    console.log(this.champName);
    console.log(this.champ);
    console.log(this.champ.stats.hp);
    this.GetChampNameStage2();
  },
};
</script>

<style>
.blackBG {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  padding: 60px;
  z-index: 1;
}
.btn-close {
  display: flex;
  /* justify-self: right; */
  margin-left: auto;
}
.info-container {
  box-sizing: border-box;
  max-width: 800px;
  background: white;
  border-radius: 8px;
  padding: 8px 20px 15px;
  margin: 0px auto;
}
.info-title {
  display: flex;
  /* margin-bottom: 10px; */
}
.champion-container {
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
}
.info-container hr {
  margin-top: 0px;
}
.info-title h5 {
  margin-bottom: 0px;
}
.champ-detail-name {
  align-self: flex-end;
  font-weight: 700;
  font-size: 1.5rem;
}
.champ-detail-stars {
  display: flex;
}
.champ-detail-header {
  display: flex;
  margin-bottom: 8px;
}
.champ-detail-sub {
  display: flex;
  flex-direction: column;
  margin-left: auto;
}
.champ-detail-cost {
  display: flex;
  align-items: center;
}
.champ-detail-trait {
  display: flex;
  align-items: center;
}
.champ-detail-body {
  display: flex;
}
.champ-detail-main {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.champ-detail-skill {
  /* display: flex; */
  /* flex-direction: column; */
  padding: 10px 20px 10px 70px;
  position: relative;
}
.champ-detail-stats {
  display: flex;
  flex-basis: 40%;
}
.champ-detail-hp {
  color: whitesmoke;
  background-color: rgb(6, 179, 72);
  padding-right: 1em;
  text-align: right;
}
.champ-detail-mana {
  color: whitesmoke;
  background-color: rgb(36, 83, 240);
  padding-right: 1em;
  text-align: right;
}
.recommand-item-container {
  display: flex;
}
.recommand-item-image {
  margin-left: 10px;
}
.champ-detail-stars-image {
  margin-left: 0.2rem;
}
.champ-detail-cost-name,
.champ-detail-trait-name {
  width: 50px;
}
.champ-detail-cost-image {
  width: 20px;
  height: 20px;
  margin-right: 0.1rem;
  padding: 0.2rem 0rem 0.1rem;
  border-radius: 10px;
}
.champ-detail-trait-image {
  width: 20px;
  height: 20px;
  margin-right: 0.1rem;
  padding: 0.2rem 0rem 0.1rem;
  border-radius: 10px;
  background-color: black;
}
.champ-detail-skill-image {
  position: absolute;
  left: 0px;
  top: 10px;
  /* display: flex;
  flex-basis: 40px;
  padding: 5px; */
  /* margin: 10px; */
}
.champ-detail-skill-info,
.champ-detail-stats-right,
.champ-detail-stats-right {
  display: flex;
  flex-direction: column;
}
.champ-detail-stat-image {
  margin-right: 0.4rem;
}
.champ-detail-stats-table {
  width: 100%;
}
.champ-detail-stats-table td {
  border: none;
  width: 50%;
}
</style>
