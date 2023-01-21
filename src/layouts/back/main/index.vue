<script setup lang="ts">
import MainEmptyBlock from "./module/MainEmptyBlock.vue";
import { useTab } from "@/hooks/useTab";
import { RouteMenu } from "vue-router";
const {} = useTab();
</script>

<template>
	<el-main>
		<router-view v-slot="{ Component, route }">
			<template v-if="(route.meta as RouteMenu).menu?.iframe_link">
				<Transition appear name="el-fade-in-linear">
					<MainEmptyBlock>
						<iframe class="w-full h-full" :src="(route.meta as RouteMenu).menu?.iframe_link" frameborder="0"></iframe>
					</MainEmptyBlock>
				</Transition>
			</template>
			<template v-else>
				<Transition appear name="el-fade-in-linear">
					<MainEmptyBlock>
						<keep-alive>
							<component :is="Component" />
						</keep-alive>
					</MainEmptyBlock>
				</Transition>
			</template>
		</router-view>
	</el-main>
</template>

<style lang="scss" scoped></style>
