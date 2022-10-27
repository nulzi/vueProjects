<template>
  <div class="filter">
    <button
      id="tableBtn"
      @click="changeTable('tableBtn')"
      class="filter-change-button clicked"
    >
      table
    </button>
    <button
      id="graphBtn"
      @click="changeTable('graphBtn')"
      class="filter-change-button unclicked"
    >
      graph
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeTable(id) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName(
        'filter-change-button clicked'
      );
      //checked filter off
      isExist.item(0).classList.replace('clicked', 'unclicked');
      //checked filter on
      classList.replace('unclicked', 'clicked');
      if (id === 'tableBtn') this.container = 0;
      else this.container = 1;
    },
  },
};
</script>

<style scoped>
.filter {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
}
.filter-change-button {
  margin-right: 10px;
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
