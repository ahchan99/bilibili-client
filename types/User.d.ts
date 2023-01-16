export interface UserOption {
	id: string;
	name: string;
	avatar?: string;
	level?: number;
	isVip?: boolean;
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
