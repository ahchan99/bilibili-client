import { RouteRecordRaw } from "vue-router";

export default {
	path: "/",
	name: "frontdesk",
	component: () => import("@/layouts/common/index.vue"),
	children: [
		{
			path: "",
			name: "home",
			component: () => import("@/views/home/index.vue")
		},
		{
			path: "video/:id",
			name: "video",
			component: () => import("@/views/video/index.vue")
		},
		{
			path: "anime",
			name: "anime",
			component: () => import("@/views/anime/index.vue")
		},
		{
			path: "search",
			name: "search",
			component: () => import("@/views/search/index.vue")
		},
		{
			path: "upload",
			name: "upload",
			component: () => import("@/views/upload/index.vue")
		}
	]
} as RouteRecordRaw;
