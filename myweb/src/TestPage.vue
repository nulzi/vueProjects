<template>
  <div class="login">
    <div class="logo_container">
      <img class="logo" src="./assets/img/logo.png" ref="" />
    </div>
    <div class="login_button">
      <button class="kakao">
        <img class="kakao_img" src="./assets/img/logo.png" alt="" />카카오
        로그인
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin-bottom: 1rem;
}
.kakao {
  background-color: yellow;
  border: none;
  font-size: 1rem;
  text-align: center;
  width: 200px;
  height: 30px;
}
.kakao_img {
  height: 15px;
  width: 15px;
  margin-right: 0.5rem;
}
</style>
