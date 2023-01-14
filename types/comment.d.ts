export interface CommentOption {
	avatar: string;
	userName: string;
	isVip: boolean;
	level: number;
	content: string;
	time: string;
	agreeCount: number;
	replyCount: number;
	replyCurrentPage?: number;
	replys?: Array<CommentReplyOption>;
}

export interface CommentReplyOption {
	avatar: string;
	userName: string;
	replyName?: string;
	isVip: boolean;
	level: number;
	content: string;
	time: string;
	agreeCount: number;
}
