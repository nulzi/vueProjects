<template>
  <div class="first_container">
    <div class="top_menu">
      <div class="top_menu_content">
        <img class="user_circle" src="./assets/img/user.png" alt="" />
        <div class="bar"></div>
        <div class="stations">
          <p class="top_source">사당역</p>
          <img class="arrow" src="./assets/img/arrow.png" alt="" />
          <p class="top_destination">강남역</p>
        </div>
      </div>
    </div>
    <div class="bottom_menu">
      <div class="bottom_menu_bar">
        <div class="subway_line">2</div>
        <div class="round_bar"></div>
        <div class="close_btn">X</div>
      </div>
      <div class="bottom_menu_content">
        <div class="bottom_menu_column">
          <div class="bottom_source">사당</div>
          <img
            class="arrow"
            src="./assets/img/arrow.png"
            alt=""
            width="25"
            height="20"
          />
          <div class="bottom_destination">강남</div>
        </div>
        <div class="bottom_menu_column">
          <div class="post_container">
            <div class="post_content1">
              <img src="./assets/img/dice1.png" alt="" width="20" height="20" />
              맡길게요
            </div>
            <div class="post_content2">
              <p>중형 5개</p>
              <p>소형 10개</p>
            </div>
          </div>
          <div class="post_bar"></div>
          <div class="post_container">
            <div class="post_content1">
              <img src="./assets/img/dice1.png" alt="" width="20" height="20" />
              옮길게요
            </div>
            <div class="post_content2">
              <p>중형 5개</p>
              <p>소형 10개</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.first_container {
  background-image: url("@/assets/img/load.png");
  /* background-color: transparent; */
  width: 100vw;
  height: 100vh;
}
.top_menu {
  position: fixed;
  width: 200px;
  height: 100px;
  /* Layout Properties */
  top: 44px;
  left: 13px;
  /* margin: 0 auto; */
  width: 395px;
  height: 69px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #0303034d;
  border-radius: 9px;
  opacity: 1;
}
.top_menu_content {
  width: 365px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: absolute;
  /* Layout Properties */
  top: 15px;
  left: 15px;
}
.user_circle {
  width: 40px;
  height: 40px;
  /* UI Properties */
  background: transparent 0% 0% no-repeat padding-box;
  border-radius: 26px;
  opacity: 1;
}
.stations {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.bar {
  border-right: 1.5px darkgray solid;
  height: 34px;
  margin: 0 10px;
}
.top_source,
.top_destination {
  margin: 0;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / 26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.bottom_menu {
  position: fixed;
  /* bottom: 0; */
  /* position: absolute; */
  width: 200px;
  height: 100px;
  /* Layout Properties */
  /* top: 231px; */
  bottom: 0px;
  left: 0px;
  /* margin: 0 auto; */
  width: 420px;
  height: 200px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #fff 0% 0% no-repeat padding-box;
  opacity: 1;
}
.bottom_menu_bar {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #888888;
  border-bottom: 1.5px solid #ccc;
}
.subway_line {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 14px;
  text-align: center;
  margin-left: 10px;
  /* Layout Properties */
  width: 27px;
  height: 27px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  background: #6fbb69 0% 0% no-repeat padding-box;
  opacity: 1;
}
.round_bar {
  margin-bottom: 17px;
  /* Layout Properties */
  /* top: 10px; */
  /* left: 200px; */
  width: 80px;
  height: 3px;
  /* UI Properties */
  background: var(--unnamed-color-cfcfcf) 0% 0% no-repeat padding-box;
  background: #cfcfcf 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
}
.close_btn {
  margin-right: 10px;
  /* Layout Properties */
  /* top: 5px; */
  /* right: 10px; */
  width: 10px;
  height: 26px;
  /* UI Properties */
  /* font: var(--unnamed-font-style-normal) normal 100 var(--unnamed-font-size-20) / 26px Roboto; */
  /* letter-spacing: var(--unnamed-character-spacing-0); */
  /* color: var(--unnamed-color-707070); */
  text-align: left;
  font: normal normal 100 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.bottom_menu_content {
  display: flex;
  flex-direction: column;
}
.bottom_menu_column {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
}
.bottom_source,
.bottom_destination {
  display: flex;
  justify-content: center;
  align-items: center;

  /* Layout Properties */
  top: 61px;
  left: 79px;
  width: 116px;
  height: 31px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-ffffff);
  background: #6fbb69 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #ffffff;
  border-radius: 20px;
  opacity: 1;

  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    17px/23px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fafafa);
  text-align: left;
  font: normal normal bold 17px/23px Roboto;
  letter-spacing: 0px;
  color: #fafafa;
  opacity: 1;
}
.post_container {
  display: flex;
}
.post_content1,
.post_content2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.post_content2 p {
  margin-top: 0;
}
.post_bar {
  margin: 0 10px;
  /* Layout Properties */
  width: 3px;
  height: 70px;
  /* UI Properties */
  background: var(--unnamed-color-cfcfcf) 0% 0% no-repeat padding-box;
  background: #888 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
}
</style>
