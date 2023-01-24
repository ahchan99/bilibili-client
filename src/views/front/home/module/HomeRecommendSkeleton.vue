<script setup lang="ts">
interface Props {
	id?: string;
	viewCount?: number;
	title?: string;
	info?: string;
	type?: string;
}
withDefaults(defineProps<Props>(), {
	id: "1",
	viewCount: 0,
	title: "测试标题",
	info: "测试信息",
	type: "直播"
});
const typeMap = new Map([
	["直播", "channel_live"],
	["番剧", "channel_anime"],
	["国创", "channel_own"],
	["综艺", "channel_variety"],
	["课堂", "channel_knowledge"],
	["电影", "channel_movie"],
	["电视剧", "channel_tv"],
	["记录片", "channel_documentary"],
	["漫画", "channel_comic"]
]);
</script>

<template>
	<Skeleton class="border border-gray-2 pb-4" :title="title">
		<template #badge>
			<div class="absolute left-1.5 top-1.5 h-[27px] z-30 bg-white px-1.5 cursor-pointer flex items-center rounded-md">
				<SvgIcon class="mr-[2px]" :name="typeMap.get(type) || `channel_live`" :width="20" :height="20" />
				<span class="text-[15px] text-primary leading-[17px] text-left">{{ type }}</span>
			</div>
		</template>
		<template #stats>
			<div class="absolute z-20 bottom-0 left-0 w-full h-[38px] skeleton-stats">
				<div class="flex justify-start items-center flex-1 min-w-0">
					<span class="mr-3 flex items-start">
						<SvgIcon class="mr-[2px]" name="eye_open" :width="18" :height="18" />
						<span>{{ viewCount }}</span>
					</span>
				</div>
			</div>
		</template>
		<template #report>
			<div class="flex-1 min-w-0 px-3 pb-4">
				<h3 class="flex items-start justify-start overflow-hidden skeleton-title skeleton-link">
					<a :href="`/video/${id}`">{{ title }}</a>
				</h3>
				<div class="flex justify-start items-center text-thirdly mt-1 text-tiny">
					<a class="inline-flex justify-start items-center skeleton-link" href="#">
						<span class="flex-1 overflow-hidden break-words leading-[17px]">{{ info }}</span>
					</a>
				</div>
			</div>
		</template>
		<template #layer>
			<div class="absolute w-[90%] h-full left-1/2 z-10 top-0 rounded-md bg-gray-2 -translate-x-1/2 translate-y-1.5"></div>
			<div class="absolute w-[80%] h-full left-1/2 top-0 rounded-md bg-gray-0 -translate-x-1/2 translate-y-3"></div>
		</template>
	</Skeleton>
</template>

<style lang="scss" scoped>
.skeleton-stats {
	background-image: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 80%) 100%);
	@apply text-white text-tiny leading-[18px] flex items-center justify-center rounded-br-lg rounded-bl-lg pt-4 pb-1.5 px-2;
}
.skeleton-title {
	@apply text-[15px] leading-[22px] h-[44px] text-primary break-words;
}
.skeleton-link {
	transition: color 0.2s linear;
	@apply hover:text-blue-0;
}
</style>
