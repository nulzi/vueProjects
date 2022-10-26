<template>
  <div class="blackBG">
    <div class="info-container">
      <div class="info-title">
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
            :src="require(`../assets/${star[index]}.png`)"
            alt="champ-star"
          />
        </div>
        <div class="champ-detail-header">
          <img
            src="../assets/logo.png"
            alt="champ-img"
            width="60"
            height="60"
          />
          <div class="champ-detail-name">champ-name</div>
          <div class="champ-detail-sub">
            <div class="champ-detail-cost">
              <div class="champ-detail-cost-name">cost</div>
              <img
                class="champ-detail-cost-image"
                src="../assets/coin.png"
                alt="coin-img"
              />4
            </div>
            <div class="champ-detail-trait">
              <div class="champ-detail-trait-name">traits</div>
              <img
                class="champ-detail-cost-image"
                src="../assets/coin.png"
                alt="coin-img"
              />
              <img
                class="champ-detail-cost-image"
                src="../assets/coin.png"
                alt="coin-img"
              />
            </div>
          </div>
        </div>
        <div class="champ-detail-body">
          <div class="champ-detail-main">
            <div class="champ-detail-hp">hp</div>
            <div class="champ-detail-mana">initialmana/mana</div>
            <div class="champ-detail-skill">
              <!-- <div class="champ-detail-skill-image"> -->
              <img
                class="champ-detail-skill-image"
                src="https://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/VladimirQ.png"
                alt="skill-img"
                width="44"
                height="44"
              />
              <!-- </div> -->
              <div class="champ-detail-skill-info">
                <div class="champ-detail-skill-name">skill-name</div>
                <div class="champ-detail-skill-desc">
                  Vladimir deals @ModifiedDamage@ magic damage to the target and
                  heals for @ModifiedHeal@ Health.
                </div>
                <div
                  class="champ-detail-skill-variables"
                  v-for="variable in variables"
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
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />40
                </td>
                <td>
                  <img
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />100%
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />45
                </td>
                <td>
                  <img
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />45
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />0.6
                </td>
                <td>
                  <img
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />2
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />0.25
                </td>
                <td>
                  <img
                    class="champ-detail-cost-image"
                    src="../assets/coin.png"
                    alt="coin-img"
                  />130
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
              src="../assets/logo.png"
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
export default {
  components: {},
  data() {
    return {
      variables: [
        { name: 'variable', value: 'value' },
        { name: 'variable', value: 'value' },
      ],
      champStars: [1, 0, 0],
      star: ['starbronze', 'star', 'star'],
      recommandItems: [10, 20, 25],
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
  position: fixed;
  padding: 60px;
}
.btn-close {
  display: flex;
  /* justify-self: right; */
  margin-left: auto;
}
.info-container {
  box-sizing: border-box;
  width: 40%;
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
}
.second-star,
.third-star {
  -webkit-filter: grayscale(100%);
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
.champ-detail-stats-table td {
  border: none;
}
</style>
