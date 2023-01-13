<script setup lang="ts">
const videoSrc = ref("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
const bullets = ref([{ time: 1, text: "弹幕～" }]);
</script>

<template>
	<Player :src="videoSrc" :bullets="bullets"></Player>
</template>

<style lang="scss" scoped></style>
