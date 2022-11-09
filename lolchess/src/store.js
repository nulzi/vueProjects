import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      page: 0,
      name: '',
      matchData: [],
      matchData2: [],
      matchData3: [],
      matchData4: [],
      matchData5: [],
      items: [],
      filteredItems: [],
      itemFilter: { base: 0, type: [] },
      // baseFilter: 0,
    };
  },
  mutations: {
    SetPage(state, inputValue) {
      state.page = inputValue;
    },
    SetName(state, inputValue) {
      state.name = inputValue;
    },
    SetMatchData(state, inputValue) {
      state.matchData = inputValue;
    },
    SetMatchData2(state, inputValue) {
      state.matchData2 = inputValue;
    },
    SetMatchData3(state, inputValue) {
      state.SetMatchData3 = inputValue;
    },
    SetMatchData4(state, inputValue) {
      state.SetMatchData4 = inputValue;
    },
    SetMatchData5(state, inputValue) {
      state.SetMatchData5 = inputValue;
    },
    SetItems(state, inputValue) {
      state.items = inputValue;
    },
    SetFilteredItems(state, inputValue) {
      state.filteredItems = inputValue;
    },
    // SetBase(state, inputValue) {
    //   state.baseFilter = inputValue;
    // },
    SetItemFilterBase(state, inputValue) {
      state.itemFilter.base = inputValue;
    },
    SetItemFilterType(state, inputValue) {
      state.itemFilter.type = inputValue;
    },
  },
  // ajax 요청 받는거
  actions: {
    initItems(context, origin) {
      // copy origin(items)
      // console.log('store.initItems()');
      context.commit('SetFilteredItems', origin);
    },
    // filterBase(context, base) {
    //   console.log('store.filterBase()');
    //   console.log(`base:${base}`);
    //   context.commit('SetBase', base);
    //   console.log(`store.base:${this.state.baseFilter}`);
    //   this.dispatch('baseFilter', base);
    //   console.log(`store.origin:${this.state.items}`);
    //   console.log(`store.filtered:${this.state.filteredItems}`);
    // },
    filterItems(context, filter) {
      console.log('store.filterItems()');
      // // base button only
      // if (typeof filter == 'number' && this.state.itemFilter.type.length == 0) {
      //   this.dispatch('initItems', this.state.items);
      //   context.commit('SetItemFilterBase', filter);
      //   this.dispatch('baseFilter', filter);
      // }
      // // type button only
      // if (Array.isArray(filter) && this.state.itemFilter.base == 0) {
      //   this.dispatch('initItems', this.state.items);
      //   context.commit('SetItemFilterType', filter);
      //   this.dispatch('typesFilter', filter);
      // }
      this.dispatch('initItems', this.state.items);
      this.dispatch('typesFilter', filter.type);
      this.dispatch('baseFilter', filter.base);
    },
    baseFilter(context, base) {
      // console.log('store.baseFilter()');
      if (base == 0) {
        // console.log(`store.base:${base}`);
        return;
      }
      // console.log(`store.base:${base}`);
      context.commit(
        'SetFilteredItems',
        this.state.filteredItems.filter(
          (item) => item.from.includes(base) || item.id == base
        )
      );
    },
    typesFilter(context, types) {
      // console.log('store.typesFilter()');
      if (types.length === 0) {
        // console.log(`store.types.length:${types.length}`);
        return;
      }
      // console.log(`store.types.length:${types.length}`);
      // console.log('store.types:', types);
      let temp = [];
      for (let i in types) {
        temp = temp.concat(
          this.state.items.filter((el) => el.icon.includes(types[i]))
        );
      }
      this.commit('SetFilteredItems', temp);
    },
    GetMatchHistory(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `http://localhost:8659/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory8659: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory8659');
          console.log(e);
        });
    },
    GetMatchHistory2(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `http://localhost:8660/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory8660: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData2', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory8660');
          console.log(e);
        });
    },
    GetMatchHistory3(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `http://localhost:8080/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory8080: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData3', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory8080');
          console.log(e);
        });
    },
    GetMatchHistory4(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `http://localhost/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData4', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory');
          console.log(e);
        });
    },
    GetMatchHistory5(context, name) {
      console.log(`/GetMatchHistory/${name}`);
      axios
        .get(
          // name: 병그니, 액정깨기장인, ..
          `/GetMatchHistory/${name}`,
          {
            transformRequest: [
              (data, headers) => {
                delete headers.common['X-Requested-With'];
                return data;
              },
            ],
          }
        )
        .then((result) => {
          //요청 성공시 가져오는 코드
          console.log(`GetMatchHistory: ${result.data}`);
          console.log(result.data);
          console.log(result);
          context.commit('SetMatchData5', result.data);
        })
        .catch((e) => {
          console.log('error-GetMatchhistory');
          console.log(e);
        });
    },
  },
});

export default store;
