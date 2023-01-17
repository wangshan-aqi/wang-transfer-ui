import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from "@/router/index";
import WangUI from "../packages/index";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
// app.use(router);
app.use(WangUI);
// app.config.globalProperties.WangUI = WangUI;
app.mount("#app");
