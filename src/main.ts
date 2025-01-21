import { createApp } from "vue";

import { vuetify } from "@/core/Vuetify.ts";
import { i18n } from "@/core/Vue-i18n.ts";
import App from "./App.vue";

const app = createApp(App);
app.use(i18n);
app.use(vuetify);
app.mount("#app");
