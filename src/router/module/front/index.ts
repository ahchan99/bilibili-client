import { RouteRecordRaw } from "vue-router";

export default {
	path: "/",
	name: "frontdesk",
	component: () => import("@/layouts/front/index.vue"),
	children: [
		{
			path: "",
			name: "home",
			component: () => import("@/views/front/home/index.vue")
		},
		{
			path: "video/:id",
			name: "video",
			component: () => import("@/views/front/video/index.vue")
		},
		{
			path: "anime",
			name: "anime",
			component: () => import("@/views/front/anime/index.vue")
		}
	]
} as RouteRecordRaw;
