import request from "@/utils/request";
import { UserProp } from "./user";

export interface CommentProp {
	id: string;
	parentId: string;
	content: string;
	createTime: string;
	likeCount: number;
	likeStatus: boolean;
	user: UserProp;
	replyPage?: PaginationParam;
	replyUser?: UserProp;
	replyList?: Array<CommentProp>;
}

export interface CommentSubmitParam {
	content: string;
	parentId: string;
	targetId: string;
	finish: (comment: CommentProp) => void;
}

export interface CommentInputSubmitParam {
	content: string;
	parentId: string;
	finish: () => void;
}

export function addComment() {
	return request({
		url: "/comments",
		method: "post"
	});
}
