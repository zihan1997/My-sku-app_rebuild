<template>
  <el-aside class="sider" width="200px" >
    <el-scrollbar>
      <el-menu id="Project-Icon">
        icon
      </el-menu>
      <el-menu >
        <el-icon ><HomeFilled /></el-icon> Home
      </el-menu>
      <el-menu index="2">
        User
      </el-menu>
      <el-menu index="3">
        Product
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>

import { HomeFilled } from "@element-plus/icons-vue"
export default {
  name: "SideBar",
  components: {
    HomeFilled,
  }
}
</script>

<style scoped>

</style>
