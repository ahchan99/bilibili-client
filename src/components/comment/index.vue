<script setup lang="ts">
import CommentInput from "./module/CommentInput.vue";
import CommentItem from "./module/CommentItem.vue";
import CommentSubItem from "./module/CommentSubItem.vue";
import CommentToolbar from "./module/CommentToolbar.vue";
import { CommentProp, CommentSubmitParam, CommentInputSubmitParam } from "@/api/comment";
import { UserProp } from "@/api/user";
import hashStr from "@/utils/hashStr";
import { isNull, isEmpty } from "@/utils/object";
import useLoginDialog from "@/hooks/useLoginDialog";
interface Props {
	total: number; // 评论总数
	data: Array<CommentProp>;
	load: () => void;
	replyShowNum?: number; // 回复默认显示数
	replyPageNum?: number; // 回复分页显示数
	bufferTime?: number;
}
const props = withDefaults(defineProps<Props>(), {
	total: 0,
	data: () => [],
	replyShowNum: 2,
	replyPageNum: 10,
	bufferTime: 2000
});
const emit = defineEmits<{
	(e: "submit", { content, parentId, targetId, finish }: CommentSubmitParam): void;
	(e: "like", id: string, finish: () => void): void;
	(e: "dislike", id: string, finish: () => void): void;
	(e: "replyPage", parentId: string, page: PaginationParam, finish: () => void): void;
}>();
const isExpended = ref(false);
const isLoading = ref(false);
const isFinished = computed(() => props.data.length >= props.total);
const isDisabled = computed(() => isLoading.value || isFinished.value);
const replyKey = ref("");
const replyId = ref("");
const replyName = ref("");
const { checkLogin } = useLoginDialog();

function onReplyOpen(user: UserProp, index: number) {
	if (!checkLogin()) {
		return;
	}

	const key = hashStr(index.toString(), "reply");
	// 点击第二次关闭
	if (replyKey.value === key) {
		replyKey.value = "";
		replyName.value = "";
		replyId.value = "";
		return;
	}
	replyKey.value = key;
	replyName.value = user.name;
	replyId.value = user.id;
}

function onLoad() {
	isLoading.value = true;
	setTimeout(() => {
		isLoading.value = false;
		props.load();
	}, props.bufferTime);
}

function onSubmit(param: CommentInputSubmitParam) {
	if (!checkLogin()) {
		return;
	}
	let { content, parentId } = param;
	if (isEmpty(content)) {
		return;
	}
	emit("submit", {
		content,
		parentId: isNull(parentId, null), // 评论 or 回复
		targetId: isNull(replyId.value, null), // 用户 id
		finish: (comment: CommentProp) => {
			// 回调添加数据
			param.finish();
			// 回复
			if (!isEmpty(param.parentId)) {
				let target = props.data.find(c => c.id == param.parentId);
				if (!target) {
					throw new Error("comment components: parentId is error in onSubmit");
				}
				if (target.replyList) {
					target.replyList.unshift(comment);
					target.replyPage!.total++;
				} else {
					target.replyList = [comment];
					target.replyPage = { total: 1, pageNum: 1 };
				}
			} else {
				// 评论
				props.data.unshift(comment);
			}
		}
	});
}

function onLike() {
	if (!checkLogin()) {
		return;
	}
}
function onDislike() {
	if (!checkLogin()) {
		return;
	}
}

const onCurrentChange = (val: number) => {
	console.log(`current page: ${val}`);
};
</script>

<template>
	<div class="flex flex-col w-full">
		<CommentInput @submit="onSubmit" />
		<div class="pt-3.5 w-full overflow-auto" v-infinite-scroll="onLoad" :infinite-scroll-disabled="isDisabled">
			<CommentItem v-for="(comment, index) in data" :key="index" :comment="comment">
				<template #toolbar>
					<CommentToolbar
						:comment="comment"
						:offset="2"
						@reply-open="user => onReplyOpen(user, index)"
						@like="onLike"
						@dislike="onDislike"
					/>
				</template>
				<template #bottom>
					<div v-if="!isEmpty(comment.replyList)" class="relative w-full pl-[72px]">
						<CommentSubItem v-for="(reply, subIndex) in comment.replyList" :key="subIndex" :comment="reply">
							<template #toolbar>
								<CommentToolbar
									:comment="reply"
									:offset="7"
									@reply-open="user => onReplyOpen(user, index)"
									@like="onLike"
									@dislike="onDislike"
								/>
							</template>
						</CommentSubItem>
					</div>
					<div v-if="!isEmpty(comment.replyPage) && comment.replyPage!.total > replyShowNum" class="relative w-full pl-[72px]">
						<div v-if="!isExpended" class="text-thirdly text-tiny pl-2">
							<span>共{{ comment.replyPage!.total }}条回复, </span>
							<span class="cursor-pointer hover:text-link" @click="() => (isExpended = true)">点击查看</span>
						</div>
						<div v-else class="pl-2">
							<el-pagination
								class="page"
								v-model:current-page="comment.replyPage!.pageNum"
								v-model:page-size="replyPageNum"
								:hide-on-single-page="true"
								:total="comment.replyPage!.total"
								layout="prev, pager, next"
								:small="true"
								@current-change="onCurrentChange"
								prev-text="上一页"
								next-text="下一页"
							/>
						</div>
					</div>
					<div v-if="replyKey === hashStr(index.toString(), `reply`)" class="pt-[25px] pb-[10px] pl-[80px] pr-0">
						<CommentInput :parent-id="comment.id" :placeholder="`@${replyName}`" @submit="onSubmit" />
					</div>
					<div class="ml-20 mt-3.5 border-gray-2 border-solid border-b" />
				</template>
			</CommentItem>
			<div v-show="isLoading" class="text-tip">正在加载...</div>
			<div v-show="isFinished" class="text-tip">没有更多评论</div>
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
.text-tip {
	@apply mt-5 pb-[100px] text-tiny text-thirdly text-center;
}
</style>
