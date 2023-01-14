<script setup lang="ts">
import CommentInput from "./module/CommentInput.vue";
import CommentItem from "./module/CommentItem.vue";
import CommentSubItem from "./module/CommentSubItem.vue";
import { CommentOption } from "types/comment";
import hashStr from "@/utils/hashStr";
interface Props {
	userAvatar?: string;
	commentCount?: number; // 评论总数
	replyShowCount?: number; // 回复默认显示数
	replyPageNum?: number; // 回复分页显示数
	bufferTime?: number;
	comments: Array<CommentOption>;
	loadComment: () => void;
}
const props = withDefaults(defineProps<Props>(), {
	userAvatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
	commentCount: 0,
	replyShowCount: 2,
	replyPageNum: 10,
	bufferTime: 2000
});
const isExpended = ref(false);
const isLoading = ref(false);
const isFinished = computed(() => props.comments.length >= props.commentCount);
const isDisabled = computed(() => isLoading.value || isFinished.value);
const replyInputKey = ref("");
const replyName = ref("");
const onCurrentChange = (val: number) => {
	console.log(`current page: ${val}`);
};
function onOpenReplyInput(val: string, index: number) {
	replyInputKey.value = hashStr(index.toString(), "reply");
	replyName.value = val;
}
function onLoad() {
	isLoading.value = true;
	setTimeout(() => {
		isLoading.value = false;
		props.loadComment();
	}, props.bufferTime);
}
</script>

<template>
	<slot name="tab"></slot>
	<div class="flex flex-col w-full">
		<CommentInput :avatar="userAvatar" />
		<div class="pt-3.5 w-full overflow-auto" v-infinite-scroll="onLoad" :infinite-scroll-disabled="isDisabled">
			<CommentItem
				v-for="(comment, index) in comments"
				:key="index"
				:comment="comment"
				@open-reply-input="(val:string)=>onOpenReplyInput(val,index)"
			>
				<div v-if="comment.replys != null" class="relative w-full pl-[72px]">
					<CommentSubItem
						v-for="(reply, subIndex) in comment.replys"
						:key="subIndex"
						:comment="reply"
						@open-reply-input="(val:string)=>onOpenReplyInput(val,index)"
					/>
				</div>
				<div v-if="comment.replyCount > replyShowCount" class="relative w-full pl-[72px]">
					<div v-if="!isExpended" class="text-thirdly text-tiny pl-2">
						<span>共{{ comment.replyCount }}条回复, </span>
						<span class="cursor-pointer hover:text-link" @click="() => (isExpended = true)">点击查看</span>
					</div>
					<div v-else class="pl-2">
						<el-pagination
							class="page"
							v-model:current-page="comment.replyCurrentPage"
							v-model:page-size="replyPageNum"
							:hide-on-single-page="true"
							:total="comment.replyCount"
							layout="prev, pager, next"
							:small="true"
							@current-change="onCurrentChange"
							prev-text="上一页"
							next-text="下一页"
						/>
					</div>
				</div>
				<div v-if="replyInputKey === hashStr(index.toString(), `reply`)" class="pt-[25px] pb-[10px] pl-[80px] pr-0">
					<CommentInput :avatar="userAvatar" :placeholder="`@${replyName}`" />
				</div>
			</CommentItem>
			<div v-show="isLoading" class="tip-text">正在加载...</div>
			<div v-show="isFinished" class="tip-text">没有更多评论</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.el-pagination {
	--el-pagination-hover-color: var(--b-c-text-active);
	--el-pagination-text-color: var(--b-c-text-primary);
	--el-pagination-button-color: var(--b-c-text-primary);
	--el-pagination-button-disabled-color: var(--b-c-gray-5);
	@apply p-0 h-[20px];
	:deep(.number) {
		@apply min-w-[15px] text-tiny;
		&:last-child {
			@apply min-w-[15px];
		}
	}
	:deep(span) {
		@apply text-tiny;
	}
}
.tip-text {
	@apply mt-5 pb-[100px] text-tiny text-thirdly text-center;
}
</style>
