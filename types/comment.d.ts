import { PageOption } from "./page";
import { UserOption } from "./user";

export interface CommentOption {
	id: string;
	parentId: string;
	content: string;
	createTime: string;
	likeCount: number;
	likeStatus: boolean;
	user: UserOption;
	replyPage?: PageOption;
	replyUser?: UserOption;
	replyList?: Array<CommentOption>;
}

export interface CommentSubmitParam {
	content: string;
	parentId: string;
	targetId: string;
	finish: (comment: CommentOption) => void;
}

export interface CommentInputSubmitParam {
	content: string;
	parentId: string;
	finish: () => void;
}
