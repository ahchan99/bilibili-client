<script setup lang="ts">
import CommentListItem from "./CommentListItem.vue";
import { CommentOption } from "types/comment";
const comments: Array<CommentOption> = [
	{
		avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
		userName: "bili_123456789",
		isVip: false,
		level: 0,
		content: `叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]，叔叔可以讲户松遥吗[吃瓜][2233娘_疑问]`,
		time: "2023-01-13 0:16",
		agreeCount: 0
	},
	{
		avatar: "https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif",
		userName: "bili_123456789",
		isVip: false,
		level: 0,
		content: `[吃瓜]`,
		time: "2023-01-13 0:16",
		agreeCount: 0,
		subComments: [
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
		agreeCount: 0
	}
];
</script>

<template>
	<div class="pt-3.5 w-full">
		<CommentListItem v-for="(item, index) in comments" :key="index" :comment="item" />
	</div>
</template>

<style lang="scss" scoped></style>
