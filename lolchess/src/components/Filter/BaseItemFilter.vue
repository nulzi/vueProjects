<template>
  <div class="filter2">
    <img
      v-for="item in items"
      :key="item"
      :id="item.name"
      class="filter-item-img unclicked"
      @click="changeButton(item.name)"
      :src="this.GetItem(item.id)"
      :alt="item.name"
    />
  </div>
</template>

<script>
import alldata from '../../assets/data.json';

export default {
  data() {
    return {
      items: [
        { isClicked: 0, name: 'swordFilter', id: 1 },
        { isClicked: 0, name: 'bowFilter', id: 2 },
        { isClicked: 0, name: 'rodFilter', id: 3 },
        { isClicked: 0, name: 'tearFilter', id: 4 },
        { isClicked: 0, name: 'vestFilter', id: 5 },
        { isClicked: 0, name: 'cloakFilter', id: 6 },
        { isClicked: 0, name: 'beltFilter', id: 7 },
        { isClicked: 0, name: 'glovesFilter', id: 9 },
      ],
    };
  },
  methods: {
    changeButton(id) {
      const classList = document.getElementById(id).classList;
      const isExist = document.getElementsByClassName(
        'filter-item-img clicked'
      );

      if (isExist.length === 0) {
        //선택된 필터가 없는 경우
        classList.replace('unclicked', 'clicked');
      } else {
        //선택된 필터가 이미 있는 경우

        //이미 선택된 것을 끄고 싶을 경우
        if (classList.contains('clicked')) {
          classList.replace('clicked', 'unclicked');
        } else {
          //다른 것을 선택한 경우
          //선택된 필터를 끄기
          isExist.item(0).classList.replace('clicked', 'unclicked');
          //선택한 필터 켜기
          classList.replace('unclicked', 'clicked');
        }
      }
    },
    GetItem(item) {
      // console.log(item);
      for (let j in alldata.items) {
        if (item == alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${alldata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
  },
};
</script>

<style scoped>
.filter2 {
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  display: flex;
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
.filter-item-img {
  display: flex;
  margin-right: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
}
</style>
