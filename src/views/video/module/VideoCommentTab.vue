<script setup lang="ts">
defineProps<{
	total: number;
}>();
const isHot = ref(true);
</script>

<template>
	<div class="mb-[22px]">
		<ul class="flex items-center m-0 p-0">
			<li class="flex items-center">
				<span class="text-xl text-primary">评论</span>
				<span class="text-tiny ml-1.5 mr-9 text-thirdly">{{ total }}</span>
			</li>
			<li class="flex items-center text-tiny text-thirdly">
				<div class="cursor-pointer" :class="isHot ? 'tab-active' : 'tab-inactive'" @click="() => (isHot = true)">最热</div>
				<div class="h-[11px] my-0 mx-3 border-r-[1px] border-solid border-gray-5"></div>
				<div class="cursor-pointer" :class="!isHot ? 'tab-active' : 'tab-inactive'" @click="() => (isHot = false)">最新</div>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
.tab-active {
	@apply text-primary;
}
.tab-inactive {
	&:hover {
		@apply text-link;
	}
}
</style>
