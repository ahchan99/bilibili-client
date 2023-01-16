<script setup lang="ts">
import { CommentOption } from "types/comment";
import { UserOption } from "types/user";
import useCommentItem from "./useCommentItem";
interface Props {
	comment: CommentOption;
}
const props = defineProps<Props>();
defineEmits<{
	(e: "openReply", user: UserOption): void;
}>();
let className =
	"relative w-full text-primary overflow-hidden whitespace-pre-wrap align-baseline overflow-wrap break-word float-left";
const { renderStr } = useCommentItem();
const content = computed(() => renderStr(props.comment.content, className));
function like() {}
function dislike() {}
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
				<div class="flex items-center relative mt-0.5 text-tiny text-thirdly">
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
		</div>
	</div>
	<slot></slot>
	<div class="ml-20 mt-3.5 border-gray-2 border-solid border-b" />
</template>

<style lang="scss" scoped></style>
