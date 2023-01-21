<script setup lang="ts">
import Danmaku from "@nplayer/danmaku";
import { usePlayer } from "./usePlayer";
export interface BulletOption {
	color?: string; // 弹幕颜色
	text: string; // 弹幕文字
	time: number; // 弹幕出现时间
	type?: "top" | "bottom" | "scroll"; // 弹幕类型，默认为滚动类型
	isMe?: boolean; // 是否是当前用户发送的
	force?: boolean; // 是否强制展示该弹幕（弹幕较多，并且是防碰撞模式时，可能会丢弃一部分弹幕）
}
interface Props {
	src: string;
	bullets: Array<BulletOption>;
}
const props = defineProps<Props>();
const { mirrorSwitch, quantitySelector, speedSelector, playStatePlugin, danmakuPlugin, volumePlugin, themePlugin } = usePlayer();
</script>

<template>
	<div class="relative w-full h-full">
		<n-player
			crossOrigin="anonymous"
			:options="{
				themeColor: 'rgba(35,173,229, 1)',
				progressBg: 'rgba(35,173,229, 1)',
				volumeProgressBg: 'rgba(35,173,229, 1)',
				posterEnable: false,
				plugins: [
					new Danmaku({ autoInsert: true, items: props.bullets }),
					playStatePlugin,
					danmakuPlugin,
					volumePlugin,
					themePlugin
				],
				controls: [
					[
						'play',
						'time',
						'spacer',
						'airplay',
						new quantitySelector(src),
						speedSelector,
						'volume',
						'settings',
						'web-fullscreen',
						'fullscreen'
					],
					['progress']
				],
				settings: [mirrorSwitch],
				bpControls: {
					650: [['play', 'progress', 'time', 'web-fullscreen', 'fullscreen'], [], []]
				}
			}"
		/>
	</div>
</template>
<style lang="scss">
@import "./index.scss";
</style>
