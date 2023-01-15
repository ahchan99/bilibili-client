<script setup lang="ts">
const avatar = ref("https://s2.loli.net/2023/01/10/GFkXYWf6Csa3c5g.gif");
const name = ref("测试名称");
const isVip = ref(true);
const intro = ref("各位点个关注再走呗");
const fansCount = ref(100);
const isFollow = ref(true);
</script>

<template>
	<div class="flex items-center mb-[10px] min-h-[58px]">
		<div class="relative flex-shrink-0 w-12 h-12 justify-start">
			<el-avatar :size="48" :src="avatar">
				<img src="@/assets/imgs/avatar.gif" />
			</el-avatar>
		</div>
		<div class="overflow-auto ml-3 flex-1">
			<div class="flex items-center h-[22px] leading-[22px] text-[15px]">
				<a class="relative mr-3 overflow-hidden whitespace-nowrap" href="#" :class="isVip ? `text-pink-0` : `text-primary`">
					{{ name }}
				</a>
				<a class="flex items-center text-tiny text-secondly hover:text-link" href="#">
					<SvgIcon class="mr-1 mb-0.5" name="message" :height="14" :width="14" />
					发信息
				</a>
			</div>
			<div class="mt-0.5 mb-[10px] text-tiny h-4 text-thirdly whitespace-nowrap overflow-hidden">
				{{ intro }}
			</div>
			<div class="flex items-center justify-start mt-[5px] whitespace-nowrap clear-both">
				<el-button :class="{ 'is-follow': isFollow }">
					<SvgIcon v-if="isFollow" class="mr-1" name="identity" :width="16" :height="16" />
					<SvgIcon v-else class="mr-1" name="plus" :width="16" :height="16" />
					{{ isFollow ? "已关注" : "关注" }} {{ fansCount }}
				</el-button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.el-button {
	@apply h-[30px] max-w-[200px] leading-[14px] pt-1.5 w-full rounded-[6px] text-sm text-white bg-blue-0 opacity-100 border-blue-0;
	&:hover {
		@apply opacity-80;
	}
}
.is-follow {
	@apply text-thirdly bg-gray-2 border-gray-2;
}
</style>
