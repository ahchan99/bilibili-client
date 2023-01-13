import { RouteRecordRaw } from "vue-router";

export default {
	path: "/admin",
	name: "background",
	meta: { menu: { title: "首页", icon: "Monitor" } },
	redirect: { name: "dashboard" },
	component: () => import("@/layouts/back/index.vue"),
	children: [
		{
			path: "dashboard",
			name: "dashboard",
			meta: { menu: { title: "工作台" } },
			component: () => import("@/views/back/dashboard/index.vue")
		}
	]
} as RouteRecordRaw;
