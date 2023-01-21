import useEmoji from "@/hooks/useEmoji";

export default function useCommentItem() {
	const { emojiMap, largeEmojiSet } = useEmoji();

	function renderStr(value: string, className: string, replyName?: string) {
		const reg = /\[.+?\]/g;
		const smallClass = "w-[20px] h-[20px]";
		const largeClass = "w-[50px] h-[50px]";
		value = value.replace(reg, (str: any) => {
			const emojiPath = emojiMap.value.get(str);
			//表情库不存在的就默认返回原字符串
			if (!emojiPath) {
				return str;
			}
			return `<img src="${emojiPath}" class="${
				largeEmojiSet.value.has(str) ? largeClass : smallClass
			} align-text-bottom inline-block"/>`;
		});

		if (replyName) {
			return `<span class="${className}">回复<a href="#" class="text-link hover:text-cyan-blue-1"> @${replyName}</a> :${value}</span>`;
		}

		return `<span class="${className}">${value}</span>`;
	}

	return { renderStr };
}
