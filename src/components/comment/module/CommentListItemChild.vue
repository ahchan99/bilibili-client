<script setup lang="ts">
import { CommentOption } from "types/comment";
import useCommentListItem from "./useCommentListItem";
interface Props {
	comment: CommentOption;
}
const props = defineProps<Props>();
let className = "text-primary text-[15px] leading-6 overflow-hidden whitespace-pre-wrap align-baseline overflow-wrap break-word";
const { renderStr } = useCommentListItem();
const content = computed(() => renderStr(props.comment.content, className, props.comment.replyName));
function agree() {}
function disagree() {}
function reply() {}
</script>

<template>
	<div class="relative pt-2 pb-2 pl-[42px] w-full">
		<div class="inline-flex items-center mr-[9px] leading-6 align-baseline whitespace-nowrap">
			<div class="absolute left-2 cursor-pointer">
				<el-avatar :size="24" :src="comment.avatar">
					<img src="@/assets/imgs/avatar.gif" />
				</el-avatar>
			</div>
			<div class="cursor-pointer mr-[5px] text-tiny leading-6" :class="comment.isVip ? 'text-pink-0' : ' text-secondly'">
				{{ comment.userName }}
			</div>
			<div class="cursor-pointer w-[30px] h-[30px] pt-0.5">
				<SvgIcon :name="`lv${comment.level}`" :width="23" :height="23" />
			</div>
		</div>
		<span v-dompurify-html="content" />
		<div class="flex items-center relative mt-[7px] text-tiny text-thirdly">
			<span class="mr-5">{{ comment.time }}</span>
			<span class="flex items-center cursor-pointer mr-[19px]" @click="agree">
				<SvgIcon class="mr-[5px] hover:text-blue-0" name="agreeSmall" :width="16" :height="16" />
				{{ comment.agreeCount == 0 ? "" : comment.agreeCount }}
			</span>
			<span class="flex items-center cursor-pointer mr-[19px]" @click="disagree">
				<SvgIcon class="mr-[5px] hover:text-blue-0" name="disagreeSmall" :width="16" :height="16" />
			</span>
			<span class="cursor-pointer hover:text-blue-0" @click="reply">回复</span>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
