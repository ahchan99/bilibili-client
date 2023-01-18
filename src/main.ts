import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "tailwindcss/tailwind.css";
import "@/style/base.scss";
import NPlayer from "@nplayer/vue";
import "virtual:svg-icons-register";
import VueDOMPurifyHTML from "vue-dompurify-html";
import { setupPlugins } from "./plugin";

const app = createApp(App);
setupPlugins(app);
app.use(router);
app.use(NPlayer);
app.use(VueDOMPurifyHTML);
app.mount("#app");
