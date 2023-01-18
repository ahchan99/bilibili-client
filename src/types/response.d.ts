export interface Response<T> {
	success: boolean;
	errCode: string;
	errMessage: string;
	data: T;
}
