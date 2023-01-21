declare global {
	interface PaginationParam {
		total: number;
		pageNum: number;
		pageSize?: number;
		orderByColumn?: string;
		isAsc?: string;
	}
}

export {};
