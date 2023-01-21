<!-- 用户管理 -->
<script setup lang="ts">
import { useDataTable } from "@/hooks/useDataTable";
import Table, { TableColumnOption } from "@/components/table/index.vue";
interface User {
	id?: number;
	acount?: string;
	password?: string;
	avatar?: string;
	name?: string;
	email?: string;
	create_time?: string;
}
const userColumns = computed<TableColumnOption<User>[]>(() => {
	return [
		{
			type: "selection",
			show: true,
			width: "55"
		},
		{
			prop: "id",
			show: true,
			label: "ID",
			width: "55"
		},
		{
			prop: "name",
			show: true,
			label: "名称",
			width: "270"
		},
		{
			prop: "acount",
			show: true,
			label: "账号",
			width: "270"
		},
		{
			prop: "password",
			show: true,
			label: "密码",
			width: "270"
		},
		{
			prop: "email",
			show: true,
			label: "邮箱",
			width: "270"
		},
		{
			prop: "create_time",
			show: true,
			label: "创建时间",
			showOverflowTooltip: true
		},
		{
			prop: "actions",
			show: true,
			label: "操作",
			fixed: "right",
			scoped: "actions",
			width: "150"
		}
	];
});
const userUrl = "/users";
const {
	ids,
	loading,
	dataSource,
	pagination,
	// modalFormRef,
	// loadData,
	handleSizeChange,
	handleCurrentChange,
	handleSelectionChange,
	handleOpenAddDialog,
	handleOpenEditDialog,
	handleDelete,
	handleBatchDelete,
	handleSearch
	// handleReset
} = useDataTable<User>(userUrl);

const isEmpty = computed(() => {
	return ids.value.length === 0;
});
</script>

<template>
	<div class="relative w-full">
		<div class="p-[8px] absolute w-full">
			<Table
				v-loading="loading"
				:table-data="dataSource"
				:show-header="true"
				:columns="userColumns"
				header-align="right"
				stripe
				style="width: 100%"
				@selection-change="handleSelectionChange"
			>
				<template #options>
					<el-button icon="refresh" circle @click="handleSearch" />
					<el-button type="primary" icon="plus" circle @click="handleOpenAddDialog" />
					<el-popconfirm title="批量删除" @confirm="handleBatchDelete()">
						<template #reference>
							<el-button :disabled="isEmpty" type="danger" icon="delete" circle />
						</template>
					</el-popconfirm>
				</template>
				<template #actions="{ scope }">
					<el-button size="small" @click="handleOpenEditDialog(scope.row)">编辑</el-button>
					<el-popconfirm title="删除" @confirm="handleDelete(scope.row.id)">
						<template #reference>
							<el-button size="small" type="danger">删除</el-button>
						</template>
					</el-popconfirm>
				</template>
			</Table>
			<div class="float-right mt-2">
				<el-pagination
					v-model:currentPage="pagination.current"
					v-model:page-size="pagination.pageSize"
					small
					:page-sizes="pagination.pageSizeOptions"
					:background="true"
					layout="sizes, prev, pager, next"
					:total="pagination.total"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
