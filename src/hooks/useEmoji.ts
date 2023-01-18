import axios from "axios";
interface Props {
	id: string;
	name: string;
	data: Map<string, string>;
	isLarge: boolean;
}
export default function useEmoji() {
	const emojiMap = ref<Map<string, string>>(new Map());
	const largeEmojiSet = ref<Set<string>>(new Set());
	const emojiList = ref<Array<Props>>([
		{
			id: "face",
			name: "小黄脸",
			data: new Map(),
			isLarge: false
		},
		{
			id: "hot",
			name: "热词系列一",
			data: new Map(),
			isLarge: true
		},
		{
			id: "tv",
			name: "tv_小电视",
			data: new Map(),
			isLarge: false
		},
		{
			id: "tv-old",
			name: "小电视",
			data: new Map(),
			isLarge: true
		},
		{
			id: "girl",
			name: "2233娘",
			data: new Map(),
			isLarge: true
		}
	]);

	function getUrl(value: string) {
		const BASE_PATH = "../assets/emojis/";
		return new URL(`${BASE_PATH}${value}`, import.meta.url).href;
	}

	onBeforeMount(() => {
		emojiList.value.forEach(emoji => {
			let url = getUrl(`${emoji.id}/index.json`);
			axios.get(url).then(res => {
				let data = new Map(Object.entries(res.data));
				data.forEach((value, key) => {
					emoji.data.set(key, getUrl(`${emoji.id}/${value}`));
					emojiMap.value.set(key, getUrl(`${emoji.id}/${value}`));
					if (emoji.isLarge) {
						largeEmojiSet.value.add(key);
					}
				});
			});
		});
	});

	return { emojiList, emojiMap, largeEmojiSet };
}
