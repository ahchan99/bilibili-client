import { App } from "vue";
import VueDOMPurifyHTML from "vue-dompurify-html";

export function setupDompurify(app: App) {
	app.use(VueDOMPurifyHTML);
}
