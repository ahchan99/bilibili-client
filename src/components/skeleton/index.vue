<script setup lang="ts">
interface Props {
	id?: string;
	viewCount?: number;
	bulletCount?: number;
	duration?: string;
	title?: string;
	userId?: string;
	userName?: string;
	time?: string;
	hasPlayer?: boolean;
}
withDefaults(defineProps<Props>(), {
	id: "1",
	viewCount: 0,
	bulletCount: 0,
	duration: "1:00",
	title: "测试视频",
	userId: "1",
	userName: "测试姓名",
	time: "昨天",
	hasPlayer: false
});
const imageUrl = ref(
	"//i0.hdslb.com/bfs/archive/d583b6f274e40d7295cb0f8b057b0359160e901a.jpg@672w_378h_1c_!web-home-common-cover"
);
const isLoaded = ref(true);
</script>

<template>
	<div class="relative rounded-md">
		<div :class="{ 'skeleton-base__hidden': isLoaded }">
			<div class="pt-[56.25%] rounded-md bg-gray-1"></div>
			<div class="flex items-start justify-start mt-2 1.5xl:mt-[10px]">
				<div class="flex-1 min-w-0">
					<p class="w-[94%] h-[18px] bg-gray-1 rounded mb-1"></p>
					<p class="w-[72%] h-[18px] bg-gray-1 rounded mb-1"></p>
					<p class="w-[50%] h-[17px] bg-gray-1 rounded mt-2"></p>
				</div>
			</div>
		</div>
		<div class="absolute top-0 left-0 z-20 w-full bg-white rounded-md">
			<a :href="`/video/${id}`">
				<div class="relative rounded-md z-20">
					<div class="pt-[56.25%] bg-gray-1 cursor-pointer rounded-md">
						<slot name="badge"></slot>
						<!-- TODO: 稍后观看 -->
						<picture class="absolute top-0 left-0 z-20 w-full h-full skeleton-cover">
							<source :srcset="imageUrl" type="image/avif" />
							<source :srcset="imageUrl" type="image/webp" />
							<img :src="imageUrl" onload />
						</picture>
						<!-- TODO: 内部播放器 -->
					</div>
					<div class="absolute z-20 top-0 left-0 w-full h-full">
						<slot name="stats">
							<div class="absolute z-20 bottom-0 left-0 w-full h-[38px] skeleton-stats">
								<div class="flex justify-start items-center flex-1 min-w-0">
									<span class="mr-3 flex items-start">
										<SvgIcon class="mr-[2px]" name="view" :width="18" :height="18" />
										<span>{{ viewCount }}</span>
									</span>
									<span class="mr-3 flex items-start">
										<SvgIcon class="mr-[2px]" name="danmaku" :width="18" :height="18" />
										<span>{{ bulletCount }}</span>
									</span>
								</div>
								<span>{{ duration }}</span>
							</div>
						</slot>
					</div>
				</div>
			</a>
			<div class="flex items-start justify-start mt-2 1.5xl:mt-[10px] min-h-[22px]">
				<slot name="report">
					<div class="flex-1 min-w-0">
						<h3 class="flex items-start justify-start overflow-hidden skeleton-title skeleton-link">
							<a :href="`/video/${id}`">{{ title }}</a>
						</h3>
						<div class="flex justify-start items-center text-thirdly mt-1 text-tiny">
							<a class="inline-flex justify-start items-center skeleton-link" href="#">
								<SvgIcon class="mr-[2px]" name="up" :width="17" :height="17" />
								<span class="flex-1 overflow-hidden break-words leading-[17px]">{{ userName }}</span>
								<span class="ml-1 leading-[17px]"> · {{ time }}</span>
							</a>
						</div>
					</div>
				</slot>
			</div>
		</div>
		<slot name="layer"></slot>
	</div>
</template>

<style lang="scss" scoped>
.skeleton-base__hidden {
	@apply invisible;
}
.skeleton-cover {
	@apply rounded object-contain overflow-hidden inline-block align-middle bg-gray-1;
}
.skeleton-stats {
	background-image: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 80%) 100%);
	@apply text-white text-tiny leading-[18px] flex items-center justify-center rounded-br-lg rounded-bl-lg pt-4 pb-1.5 px-2;
}
.skeleton-title {
	@apply text-[15px] leading-[22px] h-[44px] text-primary break-words pr-4;
}
.skeleton-link {
	transition: color 0.2s linear;
	@apply hover:text-blue-0;
}
</style>
