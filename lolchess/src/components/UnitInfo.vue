<template>
  <div class="info-container">
    <h5>Unit Info</h5>
    <div class="champion-container">
      <div class="champ-detail-header">
        <img src="../assets/logo.png" alt="champ-img" width="60" height="60" />
        <div class="champ-detail-name">name</div>
        <div class="champ-detail-stars">
          <img
            class="champ-detail-cost-image"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="coin-img"
          />
          <img
            class="champ-detail-cost-image second-star"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="coin-img"
          />
          <img
            class="champ-detail-cost-image third-star"
            src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
            alt="coin-img"
          />
        </div>
        <div class="champ-detail-sub">
          <div class="champ-detail-cost">
            <div class="champ-detail-cost-name">cost</div>
            <img
              class="champ-detail-cost-image"
              src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
              alt="coin-img"
            />4
          </div>
          <div class="champ-detail-trait">
            <div class="champ-detail-trait-name">traits</div>
            <img
              class="champ-detail-cost-image"
              src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
              alt="coin-img"
            />
            <img
              class="champ-detail-cost-image"
              src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
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
            <div class="champ-detail-skill-image">
              <img
                src="https://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/VladimirQ.png"
                alt="skill-img"
              />
            </div>
            <div class="champ-detail-skill-info">
              <div class="champ-detail-skill-name">name</div>
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
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
                  alt="coin-img"
                />40
              </td>
              <td>
                <img
                  class="champ-detail-cost-image"
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
                  alt="coin-img"
                />100%
              </td>
            </tr>
            <tr>
              <td>
                <img
                  class="champ-detail-cost-image"
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
                  alt="coin-img"
                />45
              </td>
              <td>
                <img
                  class="champ-detail-cost-image"
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
                  alt="coin-img"
                />45
              </td>
            </tr>
            <tr>
              <td>
                <img
                  class="champ-detail-cost-image"
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
                  alt="coin-img"
                />0.6
              </td>
              <td>
                <img
                  class="champ-detail-cost-image"
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
                  alt="coin-img"
                />2
              </td>
            </tr>
            <tr>
              <td>
                <img
                  class="champ-detail-cost-image"
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
                  alt="coin-img"
                />0.25
              </td>
              <td>
                <img
                  class="champ-detail-cost-image"
                  src="https://raw.communitydragon.org/latest/game/assets/items/icons2d/pykegold.png"
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
    };
  },
  methods: {},
};
</script>

<style>
.info-container {
  padding: 0.5rem;
}
.champion-container {
  display: flex;
  flex-direction: column;
}
.second-star,
.third-star {
  -webkit-filter: grayscale(100%);
}
.champ-detail-name {
  align-self: center;
  font-weight: 700;
  font-size: 1.5rem;
}
.champ-detail-stars {
  display: flex;
}
.champ-detail-header {
  display: flex;
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
}
.champ-detail-skill {
  display: flex;
}
.champ-detail-stats {
  display: flex;
  flex-basis: 40%;
}
.champ-detail-hp {
  color: whitesmoke;
  background-color: rgb(6, 179, 72);
}
.champ-detail-mana {
  color: whitesmoke;
  background-color: rgb(36, 83, 240);
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
  /* display: flex;
  flex-basis: 40px;
  padding: 5px; */
  margin: 10px;
}
.champ-detail-skill-image img {
  /* width: 40px;
  height: 40px; */
}
.champ-detail-skill-info,
.champ-detail-stats-right,
.champ-detail-stats-right {
  display: flex;
  flex-direction: column;
}
</style>
