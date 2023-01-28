export default function useUpload() {
	const options = [
		{
			value: "生活",
			label: "生活",
			children: [
				{
					value: "搞笑",
					label: "搞笑"
				},
				{
					value: "亲子",
					label: "亲子"
				},
				{
					value: "出行",
					label: "出行"
				}
			]
		},
		{
			value: "游戏",
			label: "游戏",
			children: [
				{
					value: "单机游戏",
					label: "单机游戏"
				},
				{
					value: "网络游戏",
					label: "网络游戏"
				},
				{
					value: "手机游戏",
					label: "手机游戏"
				}
			]
		},
		{
			value: "娱乐",
			label: "娱乐",
			children: [
				{
					value: "综艺",
					label: "综艺"
				},
				{
					value: "娱乐杂谈",
					label: "娱乐杂谈"
				}
			]
		}
	];

	return { options };
}
