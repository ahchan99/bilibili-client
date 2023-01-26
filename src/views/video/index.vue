<!-- 视频播放 -->
<script setup lang="ts">
import VideoPlayer from "./module/VideoPlayer.vue";
import VideoReport from "./module/VideoReport.vue";
import VideoToolBar from "./module/VideoToolbar.vue";
import VideoIntro from "./module/VideoIntro.vue";
import VideoTag from "./module/VideoTag.vue";
import VideoComment from "./module/VideoComment.vue";
import VideoUpInfo from "./module/VideoUpInfo.vue";
</script>

<template>
	<div class="relative flex w-full h-full pt-16 justify-center">
		<div class="relative flex flex-col items-start flex-shrink-0 2xl:w-[803px] w-[668px]">
			<div class="sticky w-full">
				<div class="h-[106px] pt-6 w-full">
					<VideoReport />
				</div>
				<div class="2xl:h-[452px] h-[376px] w-full">
					<VideoPlayer />
				</div>
				<div class="h-[57px] w-full">
					<VideoToolBar />
				</div>
				<div class="w-full">
					<VideoIntro />
				</div>
				<div class="w-full">
					<VideoTag />
				</div>
				<div class="min-h-[241px] w-full">
					<VideoComment />
				</div>
			</div>
		</div>
		<div class="relative flex flex-col items-start flex-shrink-0 w-[350px] ml-[30px]">
			<div class="sticky w-full -z-10">
				<div class="pt-[15px] w-full">
					<VideoUpInfo />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
