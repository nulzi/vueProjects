<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="`background-image:url(${post.userImage})`"
      ></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div
      class="post-body"
      :class="post.filter"
      :style="`background-image:url(${post.postImage})`"
      @click="$store.commit('setLikes', post)"
    ></div>
    <div class="post-content">
      <p>{{ post.likes }} Likes</p>
      <p>
        <strong>{{ post.name }}</strong> {{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "post",
  props: {
    post: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  /* background-image: url("https://placeimg.com/640/480/animals"); */
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
