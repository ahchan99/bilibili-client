import { App } from "vue";
import { setupElementIcons } from "./module/element";
import { setupPinia } from "./module/pinia";

export function setupPlugins(app: App) {
	setupElementIcons(app);
	setupPinia(app);
}
