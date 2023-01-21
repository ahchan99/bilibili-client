import { App } from "vue";
import { setupElementIcons } from "./module/element";
import { setupPinia } from "./module/pinia";
import { setupTailwindcss } from "./module/tailwindcss";
import { setupDompurify } from "./module/dompurify";
import { setupNPlayer } from "./module/nplayer";

export function setupPlugins(app: App) {
	setupElementIcons(app);
	setupPinia(app);
	setupTailwindcss();
	setupDompurify(app);
	setupNPlayer(app);
}
