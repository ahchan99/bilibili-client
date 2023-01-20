<script setup lang="ts">
const isExpire = ref(true);
</script>

<template>
	<div class="relative flex flex-col items-center">
		<div class="mb-[26px] w-full text-center text-lg leading-4 text-primary">扫描二维码登录</div>
		<div class="relative mb-[18px] w-[173px] h-[173px] cursor-pointer border-gray-2 border rounded-lg">
			<div class="flex justify-center items-center w-full h-full">
				<div class="w-40 h-40 m-auto" :class="{ 'opacity-10': isExpire }">
					<img src="@/assets/images/demo.png" />
				</div>
			</div>
			<div
				class="absolute flex flex-col justify-center items-center top-[1px] left-[1px] w-[168px] h-[168px] text-tiny text-secondly cursor-pointer"
				v-show="isExpire"
				@click="() => {}"
			>
				<img class="mb-[10px] p-4 w-14 h-14 rounded-full bg-white" src="@/assets/images/loading.png" />
				<span>二维码已过期</span>
				<span>点击刷新</span>
			</div>
		</div>
		<div class="mb-4 text-tiny text-center text-secondly">
			<p>请使用 <a class="text-blue-2" href="#">哔哩哔哩客户端</a></p>
			<p>扫码登录或扫码下载APP</p>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
