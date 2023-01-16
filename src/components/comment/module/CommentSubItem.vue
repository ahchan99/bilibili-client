<script setup lang="ts">
import { CommentOption } from "types/comment";
import { UserOption } from "types/user";
import useCommentItem from "./useCommentItem";
interface Props {
	comment: CommentOption;
}
defineEmits<{
	(e: "openReply", user: UserOption): void;
}>();
const props = defineProps<Props>();
let className = "text-primary text-[15px] leading-6 overflow-hidden whitespace-pre-wrap align-baseline overflow-wrap break-word";
const { renderStr } = useCommentItem();
const content = computed(() =>
	renderStr(props.comment.content, className, props.comment.replyUser ? props.comment.replyUser.name : undefined)
);
function like() {}
function dislike() {}
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
		<div class="flex items-center relative mt-[7px] text-tiny text-thirdly">
			<span class="mr-5">{{ comment.createTime }}</span>
			<span class="flex items-center cursor-pointer mr-[19px]" @click="like">
				<SvgIcon class="mr-[5px] hover:text-blue-0" name="likeSmall" :width="16" :height="16" />
				{{ comment.likeCount == 0 ? "" : comment.likeCount }}
			</span>
			<span class="flex items-center cursor-pointer mr-[19px]" @click="dislike">
				<SvgIcon class="mr-[5px] hover:text-blue-0" name="dislikeSmall" :width="16" :height="16" />
			</span>
			<span class="cursor-pointer hover:text-blue-0" @click="$emit('openReply', comment.user)">回复</span>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
