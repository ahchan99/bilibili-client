export interface UserOption {
	id: string;
	name: string;
	avatar?: string;
	level?: number;
	isVip?: boolean;
}

export interface UserStoreInfo extends UserOption {
	token: string;
	isLogin: boolean;
	permission: string;
	roleList: string[];
}

export interface UserLoginCmd {
	phone?: string;
	email?: string;
	password: string;
	captcha?: string;
}

export interface User {
	id?: number;
	acount?: string;
	password?: string;
	avatar?: string;
	name?: string;
	email?: string;
	create_time?: string;
}
