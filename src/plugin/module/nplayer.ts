import { App } from "vue";
import NPlayer from "@nplayer/vue";

export function setupNPlayer(app: App) {
	app.use(NPlayer);
}
