<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">Add</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :postList="postList"
    :step="step"
    :urlList="urlList"
    @publish="content = $event"
  />
  <button v-if="step == 0" @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import posts from "./assets/posts.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      postListOrigin: [...posts],
      postList: posts,
      addPost: 0,
      urlList: [],
      content: "",
      filter: "",
    };
  },
  mounted() {
    this.emitter.on("fire", (data) => {
      this.filter = data;
    });
  },
  components: {
    Container,
  },
  methods: {
    publish() {
      let myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.urlList[0],
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.filter,
      };
      this.postList.unshift(myPost);
      this.step = 0;
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.addPost}.json`)
        .then((result) => {
          this.postList.push(result.data);
          this.addPost++;
        })
        .catch(() => {
          alert("더 이상 게시물이 존재하지 않습니다.");
        });
    },
    upload(e) {
      let fileList = e.target.files; //object type
      fileList = Object.entries(fileList);
      if (fileList.every((file) => file[1].type === "image/png")) {
        for (let i = 0; i < fileList.length; i++) {
          let url = URL.createObjectURL(fileList[i][1]);
          // url = url.slice(5);
          //blob:을 지우려고 사용했지만 blob까지 있어야 이미지를 인식한다
          this.urlList.push(url);
        }
        this.step++;
      } else alert("png 확장자만 가능합니다.");
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
