<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" @input="onSearch($event.target.value)" />
    <div
      class="post-header"
      v-for="follower in followerList"
      :key="follower.id"
    >
      <div
        class="profile"
        :style="`background-image:url(${follower.image})`"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "mypage",
  setup() {
    let origin = ref([]);
    let followerList = ref([]);
    onMounted(() => {
      axios.get("/follower.json").then((result) => {
        origin.value = result.data;
        followerList.value = result.data;
      });
    });

    function onSearch(word) {
      if (!word) return (followerList.value = origin.value);
      return (followerList.value = followerList.value.filter((v) =>
        v.name.includes(word)
      ));
    }
    return { followerList, onSearch };
  },
};
</script>

<style></style>
