<script setup lang="ts">
import { CommentProps } from "@/types/comment";
import { UserProps } from "@/types/user";
interface Props {
	comment: CommentProps;
	offset?: number;
}
withDefaults(defineProps<Props>(), {
	offset: 2
});
defineEmits<{
	(e: "replyOpen", user: UserProps): void;
	(e: "like", id: string): void;
	(e: "dislike", id: string): void;
}>();
</script>

<template>
	<div class="flex items-center relative mt-[7px] text-tiny text-thirdly" :style="{ marginTop: `${offset}px` }">
		<span class="mr-5">{{ comment.createTime }}</span>
		<span class="flex items-center cursor-pointer mr-[19px]" @click="$emit(`like`, comment.id)">
			<SvgIcon class="mr-[5px] hover:text-blue-0" name="likeSmall" :width="16" :height="16" />
			{{ comment.likeCount == 0 ? "" : comment.likeCount }}
		</span>
		<span class="flex items-center cursor-pointer mr-[19px]" @click="$emit(`dislike`, comment.id)">
			<SvgIcon class="mr-[5px] hover:text-blue-0" name="dislikeSmall" :width="16" :height="16" />
		</span>
		<span class="cursor-pointer hover:text-blue-0" @click="$emit('replyOpen', comment.user)">回复</span>
	</div>
</template>

<style lang="scss" scoped></style>
