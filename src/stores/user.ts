import { defineStore } from "pinia";
import { getToken, setToken, removeToken } from "@/utils/cookies";
import { UserStoreInfo } from "types/user";
import { userLogin, userLogout, getUserInfo, getRSAPublicKey } from "@/api/user";
import { UserLoginCmd } from "types/user";
import JSEncrypt from "jsencrypt";
import { isNull } from "@/utils/object";

export const userStore = defineStore("user", () => {
	const info = ref<Partial<UserStoreInfo>>({
		avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
		token: isNull(getToken(), "")
	});

	const id = computed(() => {
		return info.value!.id;
	});
	const name = computed(() => {
		return info.value!.name;
	});
	const avatar = computed(() => {
		return info.value!.avatar;
	});
	const isLogin = computed(() => {
		return info.value!.isLogin;
	});

	async function login(cmd: UserLoginCmd, success: () => void, error: (err: any) => void) {
		try {
			// rsa 加密
			const { data: key } = await getRSAPublicKey();
			let jsencrypt = new JSEncrypt();
			jsencrypt.setPublicKey(key);
			cmd.password = jsencrypt.encrypt(cmd.password) as string;

			const { data: token } = await userLogin(cmd);
			if (token) {
				setToken(token);
				const { data: userInfo } = await getUserInfo();
				info.value = userInfo;
				info.value.token = token;
				info.value.isLogin = true;
				success();
			}
		} catch (err) {
			error(err);
		}
	}
	async function logout(success: () => void, error: (err: any) => void) {
		try {
			await userLogout();
			info.value.token = "";
			info.value.isLogin = false;
			removeToken();
			success();
		} catch (err) {
			error(err);
		}
	}

	return {
		info,
		id,
		name,
		avatar,
		isLogin,
		login,
		logout
	};
});
