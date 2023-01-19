<script setup lang="ts">
const isVisible = ref(true);
</script>

<template>
	<el-dialog v-model="isVisible" title="Warning" width="30%" :append-to-body="true" :lock-scroll="false" align-center></el-dialog>
</template>

<style lang="scss" scoped></style>
