<template>
  <div class="test">
    <div class="test2">
      <div class="test4">
        <div class="test4-1">(img)</div>
        <div class="test4-2">Ranked</div>
        <div class="test4-2">Patch 12.15</div>
        <div class="test4-2">Last 2 Days</div>
        <div class="test4-2">()Diamond+</div>
        <div class="test4-2">+</div>
      </div>
    </div>
    <div class="test3">
      <input type="search" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test {
  display: flex;
  background-color: blue;
  max-width: 1140px;
  height: 32px;
  margin-bottom: 5px;
  justify-content: space-between;
}
.test2 {
  display: flex;
  background-color: blueviolet;
  max-width: 445.51px;
  height: 32px;
}
.test3 {
  display: flex;
  max-width: 200px;
  height: 32px;
}
.test4 {
  display: flex;
  width: 445.51px;
  height: 32px;
  align-items: center;
}
.test4-1 {
  display: flex;
  width: 20px;
  height: 20px;
  font-size: 8px;
  background-color: aqua;
  color: black;
  flex-grow: 1;
  justify-content: center;
}
.test4-2 {
  display: flex;
  height: auto;
  background-color: aqua;
  color: black;
  flex-grow: 1;
  border-radius: 4px;
  justify-content: center;
  padding: 5px 5px 5px 7px;
  margin: 2px 2px 2px 4px;
}
</style>
