<script setup lang="tsx">
import { useMessage } from "@/hooks/useMessage";
const props = defineProps<{ label: Array<string> }>();
const labelList = ref<{ value: string; label: string }[]>([]);
const labelSet = computed(() => new Set(props.label));
const isEnterWork = ref(true);
const LabelSuffix = defineComponent({
	setup() {
		return () => <div class="not-italic">还可以添加 {10 - props.label.length} 个标签</div>;
	}
});
function onKeydown(e: KeyboardEvent) {
	e = e || window.event;
	if (e.code == "Enter") {
		useMessage("error", "Σ( ° △ °|||) 该输入标签已经存在");
	}
}
onMounted(() => {
	const inputDom = document.querySelector(".upload-select")!.getElementsByTagName("input")[0] as HTMLInputElement;
	inputDom.addEventListener("input", e => {
		let target = e.target as HTMLInputElement;
		if (labelSet.value.has(target.value)) {
			isEnterWork.value = false;
			inputDom.addEventListener("keydown", onKeydown);
		} else {
			isEnterWork.value = true;
			inputDom.removeEventListener("keydown", onKeydown);
		}
	});
});
</script>

<template>
	<el-select
		class="upload-select"
		v-model="label"
		multiple
		filterable
		allow-create
		:default-first-option="isEnterWork"
		placeholder="按回车键 Enter 创建标签"
		popper-class="label-popper"
		:multiple-limit="10"
		:suffix-icon="LabelSuffix"
	>
		<el-option v-for="item in labelList" :key="item.value" :label="item.label" :value="item.label"></el-option>
	</el-select>
</template>

<style lang="scss" scoped>
.upload-select {
	@apply w-full;
}
</style>
<style lang="scss">
.label-popper {
	@apply hidden;
}
</style>
