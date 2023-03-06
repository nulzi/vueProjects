import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      postListOrigin: [],
      postList: [],
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
  },
});

export default store;
