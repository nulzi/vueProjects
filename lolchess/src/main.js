import { createApp } from "vue";
import App from "./App.vue";
import { VueApexCharts } from "vue3-apexcharts";
import mitt from "mitt";
import store from "./store.js";

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(VueApexCharts);
app.use(store);
// app.use(BootstrapVue);
// app.use(BootstrapVueIcons);
app.mount("#app");
