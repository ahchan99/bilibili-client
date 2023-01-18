<script setup lang="ts">
import { CommentProps } from "@/types/comment";
import useCommentItem from "./useCommentItem";
interface Props {
	comment: CommentProps;
}
const props = defineProps<Props>();
let className = "text-primary text-[15px] leading-6 overflow-hidden whitespace-pre-wrap align-baseline break-words";
const { renderStr } = useCommentItem();
const content = computed(() => {
	let replyname = props.comment.replyUser ? props.comment.replyUser.name : undefined;
	return renderStr(props.comment.content, className, replyname);
});
</script>

<template>
	<div class="relative pt-2 pb-2 pl-[42px] w-full">
		<div class="inline-flex items-center mr-[9px] leading-6 align-baseline whitespace-nowrap">
			<div class="absolute left-2 cursor-pointer">
				<el-avatar :size="24" :src="comment.user.avatar">
					<img src="@/assets/imgs/avatar.gif" />
				</el-avatar>
			</div>
			<div class="cursor-pointer mr-[5px] text-tiny leading-6" :class="comment.user.isVip ? 'text-pink-0' : ' text-secondly'">
				{{ comment.user.name }}
			</div>
			<div class="cursor-pointer w-[30px] h-[30px] pt-0.5">
				<SvgIcon :name="`lv${comment.user.level}`" :width="23" :height="23" />
			</div>
		</div>
		<span v-dompurify-html="content" />
		<slot name="toolbar"></slot>
	</div>
</template>

<style lang="scss" scoped></style>
