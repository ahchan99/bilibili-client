<script setup lang="ts">
import { isEmpty, isNull } from "@/utils/object";
import { CommentInputSubmitParam } from "@/api/comment";
import { userStore } from "@/store";
interface Props {
	parentId?: string;
	placeholder?: string;
}
const props = withDefaults(defineProps<Props>(), {
	parentId: "",
	placeholder: "发一条友善的评论"
});
const emit = defineEmits<{
	(e: "submit", { content, parentId, finish }: CommentInputSubmitParam): void;
}>();
const content = ref("");
const isExpended = ref(false);
const store = userStore();

function onSubmit() {
	if (isEmpty(content.value)) {
		return;
	}
	emit("submit", {
		content: content.value,
		parentId: isNull(props.parentId, null),
		finish: () => {
			content.value = "";
		}
	});
}

function onMousedown(e: MouseEvent) {
	e.preventDefault();
}
</script>

<template>
	<div class="flex flex-col w-full">
		<div class="flex w-full">
			<div class="flex justify-center items-center w-20 h-[50px]">
				<el-avatar :size="48" :src="store.avatar">
					<img src="@/assets/imgs/avatar.gif" />
				</el-avatar>
			</div>
			<div class="flex justify-center flex-1" :style="{ height: `${isExpended ? 65 : 50}px` }">
				<el-input
					v-model="content"
					resize="none"
					type="textarea"
					:placeholder="placeholder"
					@focus="() => (isExpended = true)"
					@blur="() => (isExpended = false)"
				/>
			</div>
			<div class="flex justify-center items-center ml-2.5 w-[70px]" :style="{ height: `${isExpended ? 65 : 50}px` }">
				<el-button @mousedown.enter="onMousedown" @click="onSubmit"> 发布 </el-button>
			</div>
		</div>
		<div class="flex w-full" v-show="isExpended">
			<div class="flex justify-center items-center ml-20 mt-[5px]">
				<EmojiPopover :on-mousedown="onMousedown" @add-emoji="val => (content = content.concat(val))">
					<div class="expend-btn" @mousedown.enter="onMousedown">
						<SvgIcon name="emoji" :width="16" :height="16" />
					</div>
				</EmojiPopover>
				<div class="expend-btn ml-1.5" @mousedown.enter="onMousedown">
					<SvgIcon name="call" :width="16" :height="16" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.el-textarea {
	--el-input-bg-color: var(--b-c-gray-1);
	--el-input-border-color: var(--b-c-gray-1);
	--el-input-hover-border-color: var(--b-c-gray-3);
	--el-input-focus-border-color: var(--b-c-gray-3);
	--el-input-clear-border-color: var(--b-c-gray-3);
	--el-input-text-color: var(--b-c-text-primary);
	--el-input-placeholder-color: var(--b-c-text-thirdly);
	:deep(.el-textarea__inner) {
		@apply h-full rounded-md px-[10px] py-[5px] text-xs;

		line-height: v-bind('content?"normal":"38px"');
		&:hover {
			@apply bg-white;
		}
		&:focus {
			@apply bg-white;
		}
	}
}
.el-button {
	@apply h-full w-full rounded text-base text-white bg-blue-0 opacity-50 border-blue-0;
	&:hover {
		@apply opacity-100;
	}
}
.expend-btn {
	@apply flex justify-center items-center w-8 h-[26px] cursor-pointer text-thirdly rounded border-gray-1 border border-solid;
}
</style>
