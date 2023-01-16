import request from "@/utils/request";

export function addComment() {
	return request({
		url: "/comments",
		method: "post"
	});
}
