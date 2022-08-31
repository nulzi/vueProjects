<template>
  <div>
    <h2>주사위 게임</h2>
    <p>사용자: {{ username }}</p>
    <div class="dicecontainer">
      <img src="../../assets/dice1.png" alt="dice1" width="50" height="50" />
      <img src="../../assets/dice1.png" alt="dice2" width="50" height="50" />
      <img src="../../assets/dice1.png" alt="dice3" width="50" height="50" />
      <img src="../../assets/dice1.png" alt="dice4" width="50" height="50" />
      <img src="../../assets/dice1.png" alt="dice5" width="50" height="50" />
    </div>
    <button>주사위 굴리기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
    };
  },
  created() {
    this.emitter.on("userName", (name) => {
      this.username = name;
    });
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 0px;
}
p {
  margin-top: 0px;
}
.dicecontainer {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  margin: 10px 0px;
}
</style>
