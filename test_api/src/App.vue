<template>
  <nav>
    <router-link @click="getHome" to="/">Home</router-link> |
    <router-link @click="getPost" to="/post">Post</router-link> |
    <router-link @click="getCreate" to="/create">Create</router-link> |
    <router-link @click="getUser" to="/user">User</router-link>
  </nav>
  <router-view />
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postid: 10,
      userid: 1,
    };
  },
  methods: {
    getHome() {
      axios.get('/').then((res) => {
        // 불러온 값을 Console에 뿌려줍니다.
        console.log(res.data);
      });
    },
    getCreate() {
      axios.get('/create/').then((res) => {
        // 불러온 값을 Console에 뿌려줍니다.
        console.log('getCreate()');
        console.log(res.data);
      });
    },
    getPost() {
      axios.get(`/post/${this.postid}`).then((res) => {
        // 불러온 값을 Console에 뿌려줍니다.
        console.log(res.data);
        console.log(this.postid);
      });
    },
    getUser() {
      axios.get(`/user/${this.userid}`).then((res) => {
        // 불러온 값을 Console에 뿌려줍니다.
        console.log(res.data);
        console.log(this.userid);
      });
    },
  },
  created() {
    this.getHome();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
