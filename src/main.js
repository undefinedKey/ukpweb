import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// router
import router from "./router/index";
// element
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
