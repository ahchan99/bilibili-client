import { PageProps } from "./page";
import { UserProps } from "./user";

export interface CommentProps {
	id: string;
	parentId: string;
	content: string;
	createTime: string;
	likeCount: number;
	likeStatus: boolean;
	user: UserProps;
	replyPage?: PageProps;
	replyUser?: UserProps;
	replyList?: Array<CommentProps>;
}

export interface CommentSubmitParam {
	content: string;
	parentId: string;
	targetId: string;
	finish: (comment: CommentProps) => void;
}

export interface CommentInputSubmitParam {
	content: string;
	parentId: string;
	finish: () => void;
}
