<template>
  <div class="blackBG">
    <div class="info-container">
      <div class="info-title">
        <h5>Item Info</h5>
        <button class="btn-close" @click="this.$emit('close', 0)"></button>
      </div>
      <hr />
      <div class="item-container">
        <div class="item-detail-header">
          <img
            src="../../assets/logo.png"
            alt="item-img"
            width="60"
            height="60"
          />
          <div class="item-detail-sub">
            <div class="item-detail-name">item-name</div>
            <div class="item-detail-effect">
              <div
                class="item-detail-effect-box"
                v-for="effect in effects"
                :key="effect"
              >
                <img
                  class="item-detail-effect-image"
                  :src="require(`../../assets/stats/${effect.name}.png`)"
                  alt="effect-image"
                  width="20"
                  height="20"
                />
                +20
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="item-detail-skill-desc">
          Vladimir deals @ModifiedDamage@ magic damage to the target and heals
          for @ModifiedHeal@ Health.
        </div>
        <hr />
        <div class="item-detail-mix">
          <img
            class="item-detail-cost-image"
            src="../../assets/logo.png"
            alt="coin-img"
            width="35"
            height="35"
          />
          +
          <img
            class="item-detail-cost-image"
            src="../../assets/logo.png"
            alt="coin-img"
            width="35"
            height="35"
          />
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
      effects: [
        { name: 'AD', value: 10.0 },
        { name: 'AS', value: 30.0 },
      ],
    };
  },
  methods: {},
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
}
.item-container {
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
.item-detail-name {
  align-self: flex-start;
  font-weight: 700;
  font-size: 1.5rem;
}
.item-detail-header {
  display: flex;
  margin-bottom: 8px;
}
.item-detail-sub {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 0.8rem;
}
.item-detail-effect {
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
}
.item-detail-mix {
  display: flex;
  margin-left: auto;
  align-items: center;
  margin-right: 1rem;
}
.item-detail-effect-box {
  display: flex;
  margin-right: 1rem;
  align-items: center;
}
.item-detail-effect-image {
  padding: 2px 0px;
}
</style>
