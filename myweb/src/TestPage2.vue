<template>
  <div class="first_container">
    <div class="station_container">
      <div class="circle"></div>
      <div class="start_station">사당역</div>
      <div class="arrow_image"></div>
      <div class="end_station">강남역</div>
    </div>
    <div class="info_container">
      <div class="menu_bar">
        <div class="info_circle"></div>
        <div class="info_bar"></div>
        <div class="info_close">x</div>
        <div class="info_hr"></div>
      </div>
      <div class="content">
        <div class="info_start"><div class="text">사당</div></div>
        <div class="info_arrow"></div>
        <div class="info_end"><div class="text">강남</div></div>
        <!-- <div class="info_startbox"></div> -->
        <div class="info_colbar"></div>
        <!-- <div class="info_endbox"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.station_container {
  position: relative;
  /* Layout Properties */
  top: 44px;
  /* left: 13px; */
  width: 395px;
  height: 69px;
  margin: 0 auto;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #0303034d;
  border-radius: 9px;
  opacity: 1;
  /* display: flex; */
}
.circle {
  position: absolute;
  /* Layout Properties */
  top: 15px;
  left: 33px;
  width: 40px;
  height: 40px;
  /* UI Properties */
  background: transparent url('./assets/img/logo.png') 0% 0% no-repeat
    padding-box;
  border-radius: 26px;
  opacity: 1;
  /* background-color: black; */
}
.start_station {
  position: absolute;
  /* Layout Properties */
  top: 27px;
  left: 128px;
  width: 60px;
  height: 27px;
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
.arrow_image {
  /* Layout Properties */
  position: absolute;
  top: 27px;
  left: 221px;
  width: 25px;
  height: 17px;
  /* UI Properties */
  background: transparent url('./assets/img/logo.png') 0% 0% no-repeat
    padding-box;
  opacity: 1;
}
.end_station {
  /* Layout Properties */
  position: absolute;
  top: 21px;
  left: 286px;
  width: 60px;
  height: 27px;
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
.info_container {
  position: relative;
  /* Layout Properties */
  top: 231px;
  /* bottom: 0px; */
  left: 0px;
  /* width: 420px; */
  width: auto;
  height: 200px;
  /* UI Properties */
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
.text {
  /* Layout Properties */
  position: absolute;
  top: 3px;
  left: 40px;
  width: 34px;
  height: 23px;
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
.info_circle {
  position: absolute;
  /* Layout Properties */
  top: 7px;
  left: 12px;
  width: 27px;
  height: 27px;
  /* UI Properties */
  background: var(--unnamed-color-6fbb69) 0% 0% no-repeat padding-box;
  background: #6fbb69 0% 0% no-repeat padding-box;
  opacity: 1;
}
.info_bar {
  position: absolute;
  /* Layout Properties */
  top: 10px;
  left: 200px;
  width: 80px;
  height: 3px;
  /* UI Properties */
  background: var(--unnamed-color-cfcfcf) 0% 0% no-repeat padding-box;
  background: #cfcfcf 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
}
.info_close {
  position: absolute;
  /* Layout Properties */
  top: 5px;
  right: 10px;
  width: 10px;
  height: 26px;
  /* UI Properties */
  font: var(--unnamed-font-style-normal) normal 100 var(--unnamed-font-size-20) /
    26px Roboto;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: left;
  font: normal normal 100 20px/26px Roboto;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.info_hr {
  /* Layout Properties */
  position: absolute;
  top: 41px;
  left: 0px;
  width: auto;
  height: 0px;
  /* UI Properties */
  border: 1px solid var(--unnamed-color-cfcfcf);
  border: 1px solid #cfcfcf;
  opacity: 1;
}
.info_start {
  position: absolute;
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
}
.info_arrow {
  position: absolute;
  /* Layout Properties */
  top: 69px;
  left: 228px;
  width: 25px;
  height: 17px;
  /* UI Properties */
  background: transparent url('./assets/img/logo.png') 0% 0% no-repeat
    padding-box;
  opacity: 1;
}
.info_end {
  position: absolute;
  /* Layout Properties */
  top: 61px;
  left: 283px;
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
}
.info_startbox {
}
.info_colbar {
  /* Layout Properties */
  position: absolute;
  top: 100px;
  left: 235px;
  width: 3px;
  height: 80px;
  /* transform: matrix(0, 1, -1, 0, 0, 0); */
  /* UI Properties */
  background: var(--unnamed-color-6d6d6d) 0% 0% no-repeat padding-box;
  background: #6d6d6d 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
  transform: rotate(0deg);
}
.info_endbox {
}
</style>
