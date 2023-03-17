import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/reset.css";
import "@/assets/my_headshot.jpeg";

createApp(App).use(router).mount("#app");
