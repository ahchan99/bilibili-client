<script setup lang="ts"></script>

<template>
	<div class="flex items-center relative w-full h-[110px] my-0 mx-auto px-[60px] 2xl:px-[140px] bg-white">
		<div class="flex items-center mr-2">
			<a class="flex flex-col relative mr-6" href="#">
				<div class="channel-icon bg-[#ff9212]">
					<SvgIcon class="text-white" name="tide" :width="22" :height="23" />
				</div>
				<span class="text-center text-sm text-primary">动态</span>
			</a>
			<a class="flex flex-col relative mr-6" href="#">
				<div class="channel-icon bg-[#f07775]">
					<SvgIcon class="text-white" name="hot" :width="22" :height="22" />
				</div>
				<span class="text-center text-sm text-primary">热门</span>
			</a>
			<a class="flex flex-col relative mr-6" href="#">
				<div class="channel-icon bg-[#59ca73]">
					<SvgIcon class="text-white" name="channel" :width="21" :height="21" />
				</div>
				<span class="text-center text-sm text-primary">频道</span>
			</a>
		</div>
		<div class="flex justify-between w-full text-primary">TODO: 频道词条</div>
	</div>
</template>

<style lang="scss" scoped>
.channel-icon {
	@apply flex items-center justify-center rounded-full mb-1.5 w-[46px] h-[46px] hover:opacity-80;
}
</style>
