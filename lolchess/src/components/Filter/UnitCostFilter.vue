<template>
  <div class="filter1">
    <button id="1cost" class="cost unclicked" @click="changeButton('1cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">1</span>
    </button>
    <button id="2cost" class="cost unclicked" @click="changeButton('2cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">2</span>
    </button>
    <button id="3cost" class="cost unclicked" @click="changeButton('3cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">3</span>
    </button>
    <button id="4cost" class="cost unclicked" @click="changeButton('4cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">4</span>
    </button>
    <button id="5cost" class="cost unclicked" @click="changeButton('5cost')">
      <img class="coin" src="../../assets/coin.png" alt="coin" />
      <span class="coin">5</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeButton(id) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName('cost clicked');
      if (isExist.length === 0) {
        //no checked filter
        classList.replace('unclicked', 'clicked');
      } else {
        //already checked filter

        //already checked filter off
        if (classList.contains('clicked')) {
          classList.replace('clicked', 'unclicked');
        } else {
          //select another
          //checked filter off
          isExist.item(0).classList.replace('clicked', 'unclicked');
          //checked filter on
          classList.replace('unclicked', 'clicked');
        }
      }
    },
  },
};
</script>

<style scoped>
.filter1 {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.cost {
  display: flex;
  margin-right: 10px;
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
