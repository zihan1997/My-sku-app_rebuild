<template>
  <el-aside class="sider" >

    <el-col>
      <div id="Project-Icon">My-Sku</div>
      <el-menu >
        <el-icon ><HomeFilled /></el-icon> Home
      </el-menu>
      <el-menu index="2">
        <el-icon><UserFilled /></el-icon>User
      </el-menu>
      <el-menu index="3">
        <el-icon><List /></el-icon>Product
      </el-menu>
    </el-col>

  </el-aside>
</template>

<script>

import { HomeFilled, UserFilled, List } from "@element-plus/icons-vue"
export default {
  name: "SideBar",
  components: {
    HomeFilled,
    UserFilled,
    List
  }
}
</script>

<style scoped>

/* Web Side bar */
.sider {
  vertical-align: auto;
  align-content: center;
  width: 200px;
  display: flex;
  background-color: rgb(54, 57, 62);

}
.sider ul{
  color: rgb(235, 235, 235);
  text-align: center;
  background-color: inherit;
  height: 30px;
}

.el-menu{
  padding-top: 10px;
}
</style>
