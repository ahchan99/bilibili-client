<script setup lang="ts">
import { CommentOption } from "types/comment";
let demoComments = [
	{
		avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
		userName: "bili_123456789",
		isVip: false,
		level: 0,
		content: `叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]`,
		time: "2023-01-13 0:16",
		agreeCount: 0,
		replyCount: 0
	},
	{
		avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
		userName: "bili_123456789",
		isVip: false,
		level: 0,
		content: `[吃瓜]`,
		time: "2023-01-13 0:16",
		agreeCount: 0,
		replyCount: 205,
		replyCurrentPage: 1,
		replys: [
			{
				avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
				userName: "试试看中文名",
				isVip: false,
				level: 6,
				content: `叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]`,
				time: "2023-01-13 0:16",
				agreeCount: 0
			},
			{
				avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
				userName: "bili_123456789",
				replyName: "bilibili_1111111111你好",
				isVip: false,
				level: 0,
				content: `在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件`,
				time: "2023-01-13 0:16",
				agreeCount: 0
			}
		]
	},
	{
		avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
		userName: "bili_123456789",
		isVip: false,
		level: 0,
		content: `在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件在演示的html内引了额外的css文件`,
		time: "2023-01-13 0:16",
		agreeCount: 0,
		replyCount: 2
	}
];
const comments = ref<Array<CommentOption>>([]);
const commentCount = ref(20);
const isHot = ref(true);
function onLoadComment() {
	// 模拟加载数据
	comments.value = comments.value.concat(demoComments);
}
</script>

<template>
	<Comment :comments="comments" :comment-count="commentCount" :load-comment="onLoadComment">
		<template #tab>
			<div class="mb-[22px]">
				<ul class="flex items-center m-0 p-0">
					<li class="flex items-center">
						<span class="text-xl text-primary">评论</span>
						<span class="text-tiny ml-1.5 mr-9 text-thirdly">{{ commentCount }}</span>
					</li>
					<li class="flex items-center text-tiny text-thirdly">
						<div class="cursor-pointer" :class="isHot ? 'sort-active' : 'sort-inactive'" @click="() => (isHot = true)">最热</div>
						<div class="h-[11px] my-0 mx-3 border-r-[1px] border-solid border-gray-5"></div>
						<div class="cursor-pointer" :class="!isHot ? 'sort-active' : 'sort-inactive'" @click="() => (isHot = false)">
							最新
						</div>
					</li>
				</ul>
			</div>
		</template>
	</Comment>
</template>

<style lang="scss" scoped>
.sort-active {
	@apply text-primary;
}
.sort-inactive {
	&:hover {
		@apply text-link;
	}
}
</style>
