<template>
  <el-tabs type="border-card" class="manage-tabs">
    <el-tab-pane label="Search"> <SearchProduct/> </el-tab-pane>
    <el-tab-pane label="Add New">Add new here</el-tab-pane>
  </el-tabs>
</template>

<script>
import SearchProduct from "@/components/products/management/tabs/SearchProduct";
export default {
  name: "ManageProducts",
  components: {
    SearchProduct
  }
}
</script>

<style scoped>

.manage-tabs > .el-tabs_content {
  margin-left: 100px;
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.manage-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.manage-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

</style>
