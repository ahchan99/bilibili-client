<script setup lang="ts">
import LoginDialogScan from "./module/LoginDialogScan.vue";
import LoginDialogForm from "./module/LoginDialogForm.vue";
import { isNull } from "@/utils/object";
defineProps<{
	destroy?: () => void;
}>();
const isVisible = ref(true);
const isMasked = ref(false);
</script>

<template>
	<el-dialog
		class="login-dialog"
		:class="{ 'login-dialog__masked': isMasked }"
		v-model="isVisible"
		:lock-scroll="false"
		:show-close="false"
		:close-on-click-modal="false"
		:close-on-press-escape="false"
		align-center
	>
		<template #header="{ close }">
			<div class="close-icon" @click="isNull(destroy, close)()"></div>
		</template>
		<div class="flex">
			<LoginDialogScan />
			<div class="block w-[1px] h-[228px] bg-gray-2 mx-[45px] mt-[46px]"></div>
			<LoginDialogForm @password-input-blur="() => (isMasked = false)" @password-input-focus="() => (isMasked = true)" />
		</div>
		<div class="block text-xs mt-[40px] text-thirdly text-center">
			<p>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</p>
			<p>
				登录或完成注册即代表你同意 <a class="text-blue-2" href="#">用户协议</a> 和 <a class="text-blue-2" href="#">隐私政策</a>
			</p>
		</div>
	</el-dialog>
</template>

<style lang="scss">
.login-dialog {
	background-image: url("@/assets/images/22_open.png"), url("@/assets/images/33_open.png");
	background-repeat: no-repeat, no-repeat;
	background-position: 0 100%, 100% 100%;
	background-size: 14%;
	@apply relative w-[820px] min-h-[430px] rounded-lg pt-[52px] pr-[64px] pb-[29px] pl-[92px];
	.el-dialog__header {
		@apply m-0 p-0;
		.close-icon {
			background: url("@/assets/images/close.png");
			@apply absolute w-[18px] h-[18px] top-5 right-5 cursor-pointer z-10 bg-cover;
		}
	}
	.el-dialog__body {
		@apply flex flex-col p-0;
	}
}
.login-dialog__masked {
	background-image: url("@/assets/images/22_close.png"), url("@/assets/images/33_close.png");
}
</style>
