import request from "@/utils/request";
import { UserLoginCmd, UserInfoProp } from "@/types/user";

export function userLogin(cmd: UserLoginCmd) {
	return request<string>({
		url: "/user-tokens",
		method: "Post",
		data: cmd
	});
}

export function userLogout() {
	return request({
		url: "/logout",
		method: "post"
	});
}

export function getUserInfo() {
	return request<UserInfoProp>({
		url: "/user-infos",
		method: "get"
	});
}

export function getUserList() {
	return request({
		url: "/users",
		method: "get"
	});
}

export function getRSAPublicKey() {
	return request<string>({
		url: "/rsa-pks",
		method: "get"
	});
}
