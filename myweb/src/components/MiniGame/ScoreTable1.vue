<template>
  <div class="container">
    <div class="col1">Turn {{turn}}/12</div>
    <div class="col2">p1</div>
    <div class="col3">p2</div>
    <div class="col1" v-for="category,i in categories1" :key="i" > {{category}} </div>
    <div class="bonus">Bonus if 1~6 are over 63 points</div>
    <div class="col1" v-for="category,i in categories2" :key="i" > {{category}} </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      turn: 1,
      categories1:['Aces','Deuces','Threes','Fours','Fives','Sixes','Subtotal'],
      categories2:['Choice','4 of a Kind','Full House','Small Straight','Large Straight','Yacht','Total']
    }
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 195px 60px 60px;
  grid-template-rows: repeat(16, minmax(10px,26px));
  justify-items: center;
  gap: 1px;
  border: 1px solid black;
}
.col1, .col2{
  width: 100%;
  height: 100%;
  border-right: 0.5px solid black;
}
.col1{
  grid-column: 1;
}
.col2{
  grid-column: 2;
}
.col3{
  grid-column: 3;
}
.bonus{
  grid-column: 1 / span 3;
  border: 0.5px dotted rgba(0, 0, 0, 0.251);
}
</style>