export interface CommentOption {
	avatar: string;
	userName: string;
	isVip: boolean;
	level: number;
	content: string;
	time: string;
	agreeCount: number;
	replyName?: string;
	subComments?: Array<CommentOption>;
}
