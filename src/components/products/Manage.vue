<template>
  <el-tabs type="border-cards" class="manage-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><Calendar/></el-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config">Hello</el-tab-pane>
  </el-tabs>
</template>

<script>
import { Calendar } from '@element-plus/icons-vue'
export default {
  name: "ManageProducts",
  components: {
    Calendar
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
