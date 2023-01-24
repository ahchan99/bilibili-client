import LoginDialog from "@/components/login-dialog/index.vue";
import { createVNode, render } from "vue";
import { userStore } from "@/store";

export default function useLoginDialog() {
	onErrorCaptured(function (err, instance, info) {
		console.log("[errorCaptured]", err, instance, info);
	});

	function showLoginDialog() {
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

	function checkLogin() {
		// TODO: 全局异常捕获未登录
		const store = userStore();
		if (!store.isLogin) {
			showLoginDialog();
		}
		return store.isLogin;
	}

	return { showLoginDialog, checkLogin };
}
