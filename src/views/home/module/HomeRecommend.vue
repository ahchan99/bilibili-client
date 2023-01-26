<script setup lang="ts">
import HomeRecommendSkeleton from "./HomeRecommendSkeleton.vue";
interface RecommendAssembly {
	videoList: Array<string>;
	channel: { type: string };
}

const rollDeg = ref(0);
const channelList = ["直播", "番剧", "国创", "综艺", "课堂", "电影", "电视剧", "记录片", "漫画"];
let channelIndex = 0;
const isLoading = ref(false);
const loadList = ref<Array<RecommendAssembly>>([]);
getRecommendVideo();
function getRecommendVideo() {
	let channel = channelList[channelIndex++];
	if (channelIndex == channelList.length) {
		channelIndex = 0;
	}
	// 第一次加载 13 个推荐视频，之后为 5 个
	let videoList = [];
	if (loadList.value.length == 0) {
		for (let i = 0; i < 13; i++) {
			videoList.push("模拟数据");
		}
	} else {
		for (let i = 0; i < 5; i++) {
			videoList.push("模拟数据");
		}
	}
	loadList.value.push({ videoList, channel: { type: channel } });
}
function load() {
	isLoading.value = true;
	setTimeout(() => {
		isLoading.value = false;
		getRecommendVideo();
	}, 1000);
}
</script>

<template>
	<div class="relative w-full my-0 mx-auto px-[60px] 2xl:px-[140px] bg-white">
		<div class="relative pb-[60px]">
			<div class="grid-container relative w-full" v-infinite-scroll="load" :infinite-scroll-disabled="isLoading">
				<template v-for="(item, index) in loadList" :key="index">
					<div v-if="index == 0" class="relative col-start-1 col-end-3 row-start-1 row-end-3">TODO: 轮播图</div>
					<Skeleton
						v-for="(video, subIndex) in item.videoList"
						:key="subIndex"
						:class="index == 0 ? 'first-group' : 'recommend-video'"
					/>
					<HomeRecommendSkeleton :type="item.channel.type" class="recommend-channel" />
				</template>
			</div>
			<div class="absolute left-[100%] top-0 z-20 translate-x-[10px]">
				<button class="primary-button flex-col ml-0 w-10 p-[9px] h-auto" @click="rollDeg += 360">
					<SvgIcon
						class="mr-0 mb-[6px] transition-transform duration-1000"
						:style="`transform: rotate(${rollDeg}deg)`"
						name="roll"
						:width="12"
						:height="12"
					/>
					<span class="leading-[13px]">换一换</span>
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.grid-container {
	@apply grid grid-cols-4 col-start-4 col-end-auto gap-5 1.5xl:grid-cols-5 1.5xl:col-start-5 3xl:grid-cols-6 3xl:col-start-6;
	.first-group {
		&:nth-of-type(1n + 9) {
			@apply hidden 1.5xl:block;
		}
		&:nth-of-type(1n + 12) {
			@apply hidden 3xl:block;
		}
		&:nth-of-type(1n + 6) {
			@apply mt-10 1.5xl:mt-0;
		}
		&:nth-of-type(1n + 8) {
			@apply 1.5xl:mt-10 3xl:mt-0;
		}
		&:nth-of-type(1n + 10) {
			@apply 3xl:mt-10;
		}
	}
	.recommend-video {
		@apply mt-6;
		&:nth-of-type(5n + 3) {
			@apply hidden 1.5xl:block;
		}
		&:nth-of-type(5n + 4) {
			@apply hidden 3xl:block;
		}
	}
	.recommend-channel {
		@apply mt-6;
		&:first-of-type {
			@apply mt-10;
		}
	}
}
.primary-button {
	@apply flex justify-center items-center rounded-lg text-xs border border-line-regular cursor-pointer bg-white text-primary hover:bg-gray-2;
}
</style>
