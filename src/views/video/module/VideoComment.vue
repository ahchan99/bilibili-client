<script setup lang="ts">
import { CommentProp, CommentSubmitParam } from "@/api/comment";
import VideoCommentTab from "./VideoCommentTab.vue";
const commentList = ref<Array<CommentProp>>([]);
const total = ref(0);
const replyShowNum = 2;
const replyPageNum = 10;
function onLoad() {}
function onSubmit(param: CommentSubmitParam) {
	let { content, parentId, targetId } = param;
	console.log(content, parentId, targetId);
	// 模拟添加评论
	const com: CommentProp = {
		user: {
			id: "1343",
			avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
			name: "bili_123456789",
			isVip: false,
			level: 0
		},
		id: "1342",
		parentId,
		content,
		createTime: "2023-01-13 0:16",
		likeCount: 0,
		likeStatus: false
	};
	param.finish(com);
}
</script>

<template>
	<VideoCommentTab :total="total" />
	<Comment
		:data="commentList"
		:total="total"
		:load="onLoad"
		:reply-show-num="replyShowNum"
		:reply-page-num="replyPageNum"
		:buffer-time="1000"
		@submit="onSubmit"
	/>
</template>

<style lang="scss" scoped></style>
