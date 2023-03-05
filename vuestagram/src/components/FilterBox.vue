<template>
  <div
    class="filter-item"
    :class="filter"
    :style="`background-image:url(${image})`"
    @click="$emit('changeFilter', filter)"
  >
    <p class="filter-name">{{ filter }}</p>
  </div>
</template>

<script>
export default {
  name: "filterBox",
  props: {
    image: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 25px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
.filter-name {
  color: black;
  position: absolute;
  top: -40px;
}
</style>
