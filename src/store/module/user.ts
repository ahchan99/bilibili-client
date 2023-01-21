import { defineStore } from "pinia";
import { getToken, setToken, removeToken } from "@/utils/cookies";
import {
	login as loginRequest,
	logout as logoutRequest,
	getUserInfo,
	getRSAPublicKey,
	UserInfoProp,
	UserLoginParam
} from "@/api/user";
import JSEncrypt from "jsencrypt";
import { isEmpty, isNull } from "@/utils/object";

export const userStore = defineStore("user", () => {
	const info = ref<Partial<UserInfoProp>>({
		avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif"
	});
	const token = ref<string>(isNull(getToken(), ""));

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
		return !isEmpty(token.value);
	});

	async function login(param: UserLoginParam, success: () => void, error: (err: any) => void) {
		try {
			// rsa 加密
			const { data: rsaPublicKey } = await getRSAPublicKey();
			let jsencrypt = new JSEncrypt();
			jsencrypt.setPublicKey(rsaPublicKey);
			param.password = jsencrypt.encrypt(param.password) as string;

			const { data: authToken } = await loginRequest(param);
			if (authToken) {
				setToken(authToken);
				token.value = authToken;
				const { data: userInfo } = await getUserInfo();
				info.value = userInfo;
				success();
			}
		} catch (err) {
			error(err);
		}
	}
	async function logout(success: () => void, error: (err: any) => void) {
		try {
			await logoutRequest();
			token.value = "";
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
