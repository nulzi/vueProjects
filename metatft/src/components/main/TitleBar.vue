<template>
  <div class="container localcontainer">
    <div class="container titlecontainer">
      <h3>TFT Item Tier List</h3>
      <div class="text">
        Stats on the best items to build in TFT Set 7. Select an item to see
        more stats on that item, such as best item holders and performance by
        stage. Data updates every 5 minutes.
      </div>
    </div>
    <div class="round container">
      <div class="dataInfo container">
        Last Updated: <span> {{ time }}</span>
      </div>
      <div class="dataInfo container">Comps Analyzed: <span>516,248</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "a few seconds ago",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.localcontainer {
  margin: 20px 0px 10px 0px;
  justify-content: space-between;
}
.titlecontainer {
  flex-direction: column;
  text-align: left;
}
h3,
.text {
  margin: 0;
}
.text {
  font-size: 13px;
  margin-right: 5px;
}
h3 {
  margin-bottom: 10px;
}
.round {
  border-radius: 4px;
  background-color: black;
  justify-items: center;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  padding: 5px 10px;
}
.dataInfo {
  font-size: 12px;
  min-width: 200px;
  justify-content: space-between;
  margin-bottom: 4px;
}
span {
  margin-left: 5px;
  font-weight: 600px;
}
</style>
