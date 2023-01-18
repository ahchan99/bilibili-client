export interface PageProps {
	total: number;
	pageNum: number;
	pageSize?: number;
	orderByColumn?: string;
	isAsc?: string;
}
