import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "virtual:svg-icons-register";
import { setupPlugins } from "./plugin";

const app = createApp(App);
setupPlugins(app);
app.use(router);
app.mount("#app");
