<script setup lang="ts">
import TableHeadOption from "./TableHeadOption.vue";
export type TableColumnOption<T> = import("./TableHeadOption.vue").TableColumnOption<T>;
</script>

<template>
	<div class="h-[40px] w-full border-b border-base border-solid">
		<slot name="title" />
		<TableHeadOption v-bind="$attrs" />
		<slot />
	</div>
</template>

<style scoped></style>
