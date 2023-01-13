<script setup lang="ts">
interface Props {
	prefix?: string;
	name: string;
	color?: string;
	width?: number;
	height?: number;
}
const props = withDefaults(defineProps<Props>(), {
	prefix: "icon",
	color: "#333",
	width: 18,
	height: 18
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
	<svg aria-hidden="true" :width="`${width}px`" :height="`${height}px`">
		<use :href="symbolId" :fill="color" />
	</svg>
</template>
<style lang="scss" scoped></style>
