<script setup lang="tsx">
import type { UploadProps, UploadUserFile, UploadInstance, UploadRawFile } from "element-plus";
import { genFileId } from "element-plus";
import useUpload from "./useUpload";
import UploadLabelSelect from "./module/UploadLabelSelect.vue";
const { options } = useUpload();
const form = reactive({
	name: "",
	type: "自制",
	desc: "",
	check: [],
	zone: "",
	label: []
});
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const videoUploadRef = ref<UploadInstance>();
const imageUploadRef = ref<UploadInstance>();
const videoList = ref<UploadUserFile[]>([]);
const imageList = ref<UploadUserFile[]>([]);
const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
	console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = uploadFile => {
	console.log(uploadFile);
};

const handlePictureCardPreview: UploadProps["onPreview"] = uploadFile => {
	dialogImageUrl.value = uploadFile.url!;
	dialogVisible.value = true;
};

const handleVideoExceed: UploadProps["onExceed"] = files => {
	videoUploadRef.value!.clearFiles();
	const file = files[0] as UploadRawFile;
	file.uid = genFileId();
	videoUploadRef.value!.handleStart(file);
};
const handleImageExceed: UploadProps["onExceed"] = files => {
	imageUploadRef.value!.clearFiles();
	const file = files[0] as UploadRawFile;
	file.uid = genFileId();
	imageUploadRef.value!.handleStart(file);
};
</script>

<template>
	<div class="relative h-full w-full p-0 bg-gray-0">
		<div class="h-full min-w-[1000px] max-w-[1100px] border-t-[80px] border-gray-0 mx-auto bg-white">
			<div class="relative w-4/5 min-w-[900px] mt-3 mr-[30px] px-8 py-[10px]">
				<el-form :model="form" label-width="120px">
					<el-form-item label="视频">
						<el-upload
							ref="videoUploadRef"
							v-model:file-list="videoList"
							class="w-full"
							:auto-upload="false"
							:on-preview="handlePreview"
							:on-remove="handleRemove"
							:on-exceed="handleVideoExceed"
							:limit="1"
						>
							<template #trigger>
								<el-button class="add-btn" type="primary">+ 添加视频</el-button>
							</template>
						</el-upload>
					</el-form-item>
					<el-form-item label="封面">
						<el-upload
							v-model:file-list="imageList"
							ref="imageUploadRef"
							list-type="picture-card"
							:auto-upload="false"
							:on-preview="handlePictureCardPreview"
							:on-exceed="handleImageExceed"
							:limit="1"
						>
							<div class="flex flex-col items-center justify-center">
								<el-icon><Plus /></el-icon>
								<div class="text-xs text-secondly hover:text-secondl">上传封面</div>
							</div>
						</el-upload>
					</el-form-item>
					<el-form-item label="标题">
						<el-input v-model="form.name" maxlength="80" show-word-limit />
					</el-form-item>
					<el-form-item label="类型">
						<el-radio-group v-model="form.type">
							<el-radio label="自制" />
							<el-radio label="转载" />
						</el-radio-group>
					</el-form-item>
					<el-form-item label="分区">
						<el-cascader
							v-model="form.zone"
							:options="options"
							placeholder="请选择分区"
							separator=" → "
							popper-class="zone-popper"
						/>
					</el-form-item>
					<el-form-item label="标签">
						<UploadLabelSelect :label="form.label" />
					</el-form-item>
					<el-form-item label="简介">
						<el-input
							class="h-[160px]"
							v-model="form.desc"
							type="textarea"
							maxlength="2000"
							resize="none"
							show-word-limit
							placeholder="填写更全面的相关信息，让更多的人能找到你的视频吧"
						/>
					</el-form-item>
					<el-form-item label="二创设置">
						<el-checkbox-group v-model="form.check">
							<el-checkbox label="允许二创" />
						</el-checkbox-group>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" class="up-btn">立即投稿</el-button>
						<el-button type="primary" class="save-btn">存草稿</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
	<el-dialog v-model="dialogVisible">
		<img w-full :src="dialogImageUrl" alt="Preview Image" />
	</el-dialog>
</template>

<style lang="scss" scoped>
.el-button {
	@apply bg-blue-2 text-white px-[16px] py-[10px] leading-3 hover:opacity-80;
}
.save-btn {
	@apply border-line-regular text-primary bg-white hover:border-blue-2 hover:text-blue-2 h-10 w-[120px];
}
.add-btn {
	@apply h-[38px] w-[172px];
}
.up-btn {
	@apply h-10 w-[120px];
}
.el-form-item {
	--el-color-primary: var(--b-c-blue-2);
	:deep(.el-form-item__label) {
		@apply justify-start items-center text-xs text-primary;
	}
	:deep(.el-upload--picture-card) {
		@apply h-[108px] w-[172px];
	}
	:deep(.el-upload-list--picture-card) {
		.el-upload-list__item {
			@apply h-[108px] w-[172px];
		}
	}
	:deep(.el-select) {
		.el-select__tags {
			@apply pr-[120px];
		}
		.el-tag {
			--el-tag-bg-color: var(--b-c-blue-2);
			--el-tag-border-color: var(--b-c-blue-2);
			--el-tag-hover-color: var(--b-c-blue-2);
			--el-fill-color: var(--b-c-blue-2);
			--el-color-info: white;
			.el-tag__close {
				@apply hover:filter brightness-[1.15];
			}
		}
		.el-select__caret {
			@apply transition-none transform-none w-[140px] text-thirdly;
		}
		.el-input__suffix-inner {
			@apply items-end mb-2;
		}
	}
}
.el-textarea {
	:deep(.el-textarea__inner) {
		@apply h-full rounded-md pl-3 pr-[60px] py-[12px] text-xs;
	}
}
</style>
<style lang="scss">
.zone-popper {
	--el-cascader-menu-selected-text-color: var(--b-c-blue-2);
	.el-cascader-node__prefix {
		@apply hidden;
	}
}
</style>
