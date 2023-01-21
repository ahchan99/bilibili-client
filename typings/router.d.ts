import { RouteMeta } from "vue-router";

interface IMenu {
	title?: string;
	icon?: string;
	priority?: number;
	isClick?: boolean;
	route?: string;
	path?: string;
	iframe_link?: string;
	children?: IMenu[];
}

declare module "vue-router" {
	interface Menu extends IMenu {
		// 是否为嵌套路由
		nested?: boolean;
	}
	interface RouteMenu extends RouteMeta {
		menu?: Menu;
	}
}

export {};
