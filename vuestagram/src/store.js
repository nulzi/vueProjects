import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      postListOrigin: [],
      postList: [],
      more: {},
    };
  },
  mutations: {
    initPostList(state, _postList) {
      state.postListOrigin = [..._postList];
      state.postList = [..._postList];
    },
    setLikes(state, _post) {
      const i = state.postList.indexOf(_post);
      const newPost = {};
      if (_post.liked) {
        newPost["likes"] = _post.likes - 1;
        newPost["liked"] = false;
      } else {
        newPost["likes"] = _post.likes + 1;
        newPost["liked"] = true;
      }
      state.postList.splice(i, 1, { ..._post, ...newPost });
    },
    setMore(state, _more) {
      state.more = _more;
    },
  },
  actions: {
    more(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more0.json`)
        .then((result) => {
          context.commit("setMore", result.data);
        })
        .catch(() => {
          alert("더 이상 게시물이 존재하지 않습니다.");
        });
    },
  },
});

export default store;
