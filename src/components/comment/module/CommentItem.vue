<script setup lang="ts">
import { CommentProp } from "@/api/comment";
import useCommentItem from "./useCommentItem";
interface Props {
	comment: CommentProp;
}
const props = defineProps<Props>();
let className = "relative w-full text-primary overflow-hidden whitespace-pre-wrap align-baseline break-words float-left";
const { renderStr } = useCommentItem();
const content = computed(() => renderStr(props.comment.content, className));
</script>

<template>
	<div class="relative pt-[22px] pl-20 w-full">
		<div class="flex justify-center absolute left-0 w-20 cursor-pointer">
			<el-avatar :size="48" :src="comment.user.avatar">
				<img src="@/assets/imgs/avatar.gif" />
			</el-avatar>
		</div>
		<div class="relative flex-1">
			<div class="flex text-tiny mb-1 items-center">
				<div class="cursor-pointer mr-[5px]" :class="comment.user.isVip ? 'text-pink-0' : ' text-secondly'">
					{{ comment.user.name }}
				</div>
				<div class="cursor-pointer w-[30px] h-[30px] pt-[2.5px]">
					<SvgIcon :name="`lv${comment.user.level}`" :width="23" :height="23" />
				</div>
			</div>
			<div class="relative flex flex-col w-full py-0.5">
				<span class="relative inline-block w-full text-primary py-0.5 text-[15px] leading-6" v-dompurify-html="content" />
				<slot name="toolbar"></slot>
			</div>
		</div>
	</div>
	<slot name="bottom"></slot>
</template>

<style lang="scss" scoped></style>
