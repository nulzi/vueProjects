<template>
  <div class="localcontainer">
    <h2>주사위 게임</h2>
    <p>사용자: {{ username }}</p>
    <div class="menu">
      <button @click="reset">reset</button>
      <button
        @click="rollDice"
        :disabled="
          dice1[1] === 0 ||
          dice2[1] === 0 ||
          dice3[1] === 0 ||
          dice4[1] === 0 ||
          dice5[1] === 0
        "
      >
        전체 굴리기
      </button>
    </div>
    <div class="dicecontainer">
      <img
        :src="require(`../../assets/img/dice${dice1[0]}.png`)"
        alt="dice1"
        width="50"
        height="50"
      />
      <img
        :src="require(`../../assets/img/dice${dice2[0]}.png`)"
        alt="dice2"
        width="50"
        height="50"
      />
      <img
        :src="require(`../../assets/img/dice${dice3[0]}.png`)"
        alt="dice3"
        width="50"
        height="50"
      />
      <img
        :src="require(`../../assets/img/dice${dice4[0]}.png`)"
        alt="dice4"
        width="50"
        height="50"
      />
      <img
        :src="require(`../../assets/img/dice${dice5[0]}.png`)"
        alt="dice5"
        width="50"
        height="50"
      />
    </div>
    <div class="btncontainer">
      <button @click="rollDice1" :disabled="dice1[1] === 0">
        굴리기:{{ dice1[1] }}
      </button>
      <button @click="rollDice2" :disabled="dice2[1] === 0">
        굴리기:{{ dice2[1] }}
      </button>
      <button @click="rollDice3" :disabled="dice3[1] === 0">
        굴리기:{{ dice3[1] }}
      </button>
      <button @click="rollDice4" :disabled="dice4[1] === 0">
        굴리기:{{ dice4[1] }}
      </button>
      <button @click="rollDice5" :disabled="dice5[1] === 0">
        굴리기:{{ dice5[1] }}
      </button>
    </div>
    <div class="usercontainer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      dice1: [1, 3],
      dice2: [1, 3],
      dice3: [1, 3],
      dice4: [1, 3],
      dice5: [1, 3],
    };
  },
  methods: {
    reset() {
      this.dice1 = [1, 3];
      this.dice2 = [1, 3];
      this.dice3 = [1, 3];
      this.dice4 = [1, 3];
      this.dice5 = [1, 3];
    },
    diceAnimation(dice) {
      let count = 0;
      const timer = setInterval(() => {
        // console.log("Dice1 rolled!");
        const randomDiceNum = Math.floor(Math.random() * 6) + 1;
        dice[0] = randomDiceNum;
        if (count >= 6) {
          clearInterval(timer);
        }
        count += 1;
      }, 150);
    },
    rollDice() {
      this.rollDice1();
      this.rollDice2();
      this.rollDice3();
      this.rollDice4();
      this.rollDice5();
    },
    rollDice1() {
      this.diceAnimation(this.dice1);
      // this.dice1[0] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.dice1[1] -= 1;
    },
    rollDice2() {
      this.diceAnimation(this.dice2);
      // this.dice2[0] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.dice2[1] -= 1;
    },
    rollDice3() {
      this.diceAnimation(this.dice3);
      // this.dice3[0] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.dice3[1] -= 1;
    },
    rollDice4() {
      this.diceAnimation(this.dice4);
      // this.dice4[0] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.dice4[1] -= 1;
    },
    rollDice5() {
      this.diceAnimation(this.dice5);
      // this.dice5[0] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      this.dice5[1] -= 1;
    },
  },
  watch: {
    // dice1() {
    //   console.log("Dice1 rolled!");
    // },
  },
  created() {
    this.emitter.on("userName", (name) => {
      this.username = name;
    });
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css");
.localcontainer,
.menu button,
.btncontainer button {
  font-family: "Galmuri14";
}
h2 {
  margin-bottom: 0px;
}
p {
  margin-top: 0px;
  margin-bottom: 10px;
}
button {
  color: #fff;
  background-color: #161f27;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #324759;
}
button:focus {
  box-shadow: 0 0 0 2px rgba(0, 150, 191, 0.67);
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.menu button {
  margin: 0px 10px;
}
.dicecontainer {
  margin: 10px 0px;
}
.dicecontainer,
.btncontainer {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0px 220px;
  justify-items: center;
}
.btncontainer button {
  width: 70px;
}
</style>
