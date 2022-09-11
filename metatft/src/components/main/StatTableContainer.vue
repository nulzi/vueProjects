<template>
  <div class="test">
    <div class="test2">
      <div class="test2-1">
        Select View:
        <div class="test2-1-1">
          <div class="test2-1-2">Table</div>
          <div class="test2-1-3">Graph</div>
        </div>
      </div>
      <div class="test2-2">
        <div class="test2-2-1">Item Filters:</div>
        <div class="test2-2-2">+</div>
      </div>
      <div class="test2-3">Select an Item for more details</div>
    </div>
    <div class="test3">
      <table>
        <thead>
          <th><div class="table_item">Item</div></th>
          <th><div class="table_tier">Tier</div></th>
          <th><div class="table_avg">Avg Place</div></th>
          <th><div class="table_winrate">Winrate</div></th>
          <th><div class="table_frequency">Frequency</div></th>
        </thead>
        <tbody>
          <td><div>Item</div></td>
          <td><div>S</div></td>
          <td><div>3.53</div></td>
          <td><div>22.9%</div></td>
          <td><div>24,258 (2.5%)</div></td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test {
  display: flex;
  background-color: skyblue;
  max-width: 1140px;
}
.test2 {
  display: flex;
  background-color: cadetblue;
  min-height: 100px;
  padding: 10px;
  margin: 0px 5px 0px 0px;
  flex-direction: column;
  text-align: left;
  font-size: 13px;
}
.test2-1,
.test2-2,
.test2-3 {
  width: 180px;
}
.test2-1 {
  margin: 0px 0px 10px 0px;
  height: 44.5;
}
.test2-1-1 {
  display: flex;
  padding-top: 5px;
}
.test2-1-2,
.test2-1-3 {
  border: 1px solid black;
  margin: 2px 5px 2px 2px;
  min-width: 55px;
  background-color: rgb(30, 84, 86);
  border-radius: 8px;
  text-align: center;
  padding: 6px 4px;
}
.test2-2 {
  display: flex;
  height: 28px;
  align-items: center;
  font-weight: 400;
}
.test2-2-2 {
  margin: 2px 0px 2px 5px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  text-align: center;
  /* make center way 2
    display: flex;
    justify-content: center;*/
}
.test2-3 {
  display: flex;
  height: 42px;
  text-align: center;
  font-size: 14px;
}
.tes3 {
  display: flex;
  background-color: darkcyan;
  margin: 0px 0px 16px 0px;
}
table {
  border-spacing: 0;
}
th,
td {
  padding: 6.4px 9.6px;
}
</style>
