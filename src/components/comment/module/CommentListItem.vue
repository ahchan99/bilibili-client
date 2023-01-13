<script setup lang="ts">
import { CommentOption } from "types/comment";
import useCommentListItem from "./useCommentListItem";
import CommentListItemChild from "./CommentListItemChild.vue";
interface Props {
	comment: CommentOption;
}
const props = defineProps<Props>();
let className =
	"relative w-full text-primary overflow-hidden whitespace-pre-wrap align-baseline overflow-wrap break-word float-left";
const { renderStr } = useCommentListItem();
const content = computed(() => renderStr(props.comment.content, className));
function agree() {}
function disagree() {}
function reply() {}
</script>

<template>
	<div class="relative pt-[22px] pl-20 w-full">
		<div class="flex justify-center absolute left-0 w-20 cursor-pointer">
			<el-avatar :size="48" :src="comment.avatar">
				<img src="@/assets/imgs/avatar.gif" />
			</el-avatar>
		</div>
		<div class="relative flex-1">
			<div class="flex text-tiny mb-1 items-center">
				<div class="cursor-pointer mr-[5px]" :class="comment.isVip ? 'text-pink-0' : ' text-secondly'">
					{{ comment.userName }}
				</div>
				<div class="cursor-pointer w-[30px] h-[30px] pt-[2.5px]">
					<SvgIcon :name="`lv${comment.level}`" :width="23" :height="23" />
				</div>
			</div>
			<div class="relative flex flex-col w-full py-0.5">
				<span class="relative inline-block w-full text-primary py-0.5 text-[15px] leading-6" v-dompurify-html="content" />
				<div class="flex items-center relative mt-0.5 text-tiny text-thirdly">
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
		</div>
	</div>
	<div v-if="comment.subComments != null" class="relative w-full pl-[72px]">
		<CommentListItemChild v-for="(item, index) in comment.subComments" :key="index" :comment="item" />
	</div>
	<div class="ml-20 mt-3.5 border-gray-2 border-solid border-b" />
</template>

<style lang="scss" scoped></style>
