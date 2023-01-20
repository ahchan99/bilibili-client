import LoginDialog from "@/components/login-dialog/index.vue";
import { createVNode, render } from "vue";

export default function useLoginDialog() {
	const container = document.createElement("div");
	const props = {
		destroy: () => {
			render(null, container);
		}
	};
	const vnode = createVNode(LoginDialog, props);
	render(vnode, container);
	document.body.appendChild(container.firstElementChild!);
}
