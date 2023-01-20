<script setup lang="ts">
defineEmits<{
	(e: "passwordInputFocus"): void;
	(e: "passwordInputBlur"): void;
}>();
const isPassword = ref(true);
const isMasked = ref(true);
const account = ref("");
const password = ref("");
const phone = ref("");
const captcha = ref("");
const prefix = ref("+86");
const options = [
	{
		value: "+86",
		label: "+86"
	},
	{
		value: "+852",
		label: "+852"
	},
	{
		value: "+853",
		label: "+853"
	}
];
</script>

<template>
	<div class="relative w-[400px]">
		<ul class="flex items-center justify-center mb-[24px]">
			<li class="flex h-5 items-center justify-center text-lg text-gray-8">
				<div class="cursor-pointer" :class="{ 'text-cyan-blue-2': isPassword }" @click="() => (isPassword = true)">密码登录</div>
				<span class="h-5 w-[1px] mx-[21px] bg-line-regular"></span>
				<div class="cursor-pointer" :class="{ 'text-cyan-blue-2': !isPassword }" @click="() => (isPassword = false)">
					短信登录
				</div>
			</li>
		</ul>
		<div v-if="isPassword" class="relative">
			<form class="block w-[400px] h-[90px] text-sm text-primary rounded-lg border border-line-regular">
				<div class="relative flex justify-start items-center w-full h-[43px] py-3 px-5">
					<div class="mr-5 text-sm text-primary">账号</div>
					<input
						class="w-[230px] text-sm text-primary"
						v-model="account"
						autocomplete="on"
						maxlength="32"
						placeholder="请输入账号"
						type="text"
					/>
				</div>
				<div class="block w-full h-0 border-b border-line-regular" />
				<div class="relative flex justify-start items-center w-full h-[43px] py-3 px-5">
					<div class="mr-5 text-sm text-primary">密码</div>
					<input
						class="w-[210px] text-sm text-primary"
						v-model="password"
						autocomplete="on"
						maxlength="32"
						placeholder="请输入密码"
						:type="isMasked ? 'password' : 'text'"
						@blur="$emit('passwordInputBlur')"
						@focus="$emit('passwordInputFocus')"
					/>
					<div
						class="relative mr-[10px] cursor-pointer w-5 h-5 text-gray-5 hover:text-blue-2"
						@click="() => (isMasked = !isMasked)"
					>
						<SvgIcon v-if="isMasked" name="eye_close" :width="20" :height="20" />
						<SvgIcon v-else name="eye_open" :width="20" :height="20" />
					</div>
					<a class="relative text-tiny text-blue-2" href="#">忘记密码?</a>
				</div>
			</form>
			<div class="w-full mt-5 justify-center flex">
				<el-button class="register-btn">注册</el-button>
				<el-button class="login-btn">登录</el-button>
			</div>
		</div>
		<div v-else class="relative">
			<form class="block w-[400px] h-[90px] text-sm text-primary rounded-lg border border-line-regular">
				<div class="relative flex justify-between items-center w-full h-[43px] py-3 px-5">
					<div class="flex items-center justify-between">
						<el-select v-model="prefix" size="large">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
						</el-select>
						<input
							class="w-[170px] text-sm text-primary"
							v-model="phone"
							autocomplete="on"
							maxlength="32"
							placeholder="请输入手机号"
							type="text"
						/>
					</div>
					<div class="flex items-center justify-between">
						<span class="inline-block w-[1px] h-[26px] bg-line-regular mr-6"></span>
						<a class="relative text-tiny text-blue-2" href="#">获取验证码</a>
					</div>
				</div>
				<div class="block w-full h-0 border-b border-line-regular" />
				<div class="relative flex justify-start items-center w-full h-[43px] py-3 px-5">
					<div class="mr-5 text-sm text-primary">验证码</div>
					<input
						class="w-[210px] text-sm text-primary"
						v-model="captcha"
						autocomplete="on"
						maxlength="32"
						placeholder="请输入验证码"
						type="text"
					/>
				</div>
			</form>
			<div class="w-full mt-5 justify-center flex">
				<el-button class="login-btn">登录 / 注册</el-button>
			</div>
		</div>
		<div class="w-full mt-6">
			<div class="text-tiny mb-3 leading-4 text-center text-thirdly">其他方式登录</div>
			<div class="flex justify-center text-primary text-xs">
				<span class="flex items-center mr-[30px] cursor-pointer weichat">微信登陆</span>
				<span class="flex items-center mr-[30px] cursor-pointer weibo">微博登陆</span>
				<span class="flex items-center mr-[30px] cursor-pointer qq">QQ登陆</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.el-button {
	@apply h-[40px] w-[194px] rounded-lg text-sm leading-10 pt-0;
}
.register-btn {
	@apply border-line-regular text-black bg-white hover:border-blue-2 hover:text-blue-2;
}
.login-btn {
	@apply border-blue-0 text-white bg-blue-0 hover:opacity-80;
}
.el-select {
	--el-select-input-font-size: 13px;
	--el-input-icon-color: var(--b-c-gray-3);
	--el-select-border-color-hover: white;
	--el-select-input-focus-border-color: white;
	@apply mr-[7px];
	:deep(.el-input__wrapper) {
		@apply shadow-none p-0;
	}
	:deep(.el-input) {
		--el-input-text-color: var(--b-c-text-primary);
		--el-text-color-placeholder: var(--b-c-gray-3);
		@apply w-[56px];
	}
}
.weichat {
	&::before {
		content: "";
		background: url("@/assets/images/weichat.png") no-repeat;
		@apply inline-block bg-cover mr-2 w-7 h-7;
	}
}
.weibo {
	&::before {
		content: "";
		background: url("@/assets/images/weibo.png") no-repeat;
		@apply inline-block bg-cover mr-2 w-7 h-7;
	}
}
.qq {
	&::before {
		content: "";
		background: url("@/assets/images/qq.png") no-repeat;
		@apply inline-block bg-cover mr-2 w-7 h-7;
	}
}
</style>
