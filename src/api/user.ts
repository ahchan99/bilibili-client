import request from "@/utils/request";

export interface UserProp {
	id: string;
	name: string;
	avatar?: string;
	level?: number;
	isVip?: boolean;
}

export interface UserInfoProp extends UserProp {
	permission: string;
	roleList: string[];
}

export interface UserLoginParam {
	phone?: string;
	email?: string;
	password: string;
	captcha?: string;
}

export function login(param: UserLoginParam) {
	return request<string>({
		url: "/user-tokens",
		method: "Post",
		data: param
	});
}

export function logout() {
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
