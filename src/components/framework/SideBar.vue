<template>
  <el-aside class="sider" >

    <el-col>
      <div id="Project-Icon">My-Sku</div>
      <el-menu >
        <router-link to="/">
          <el-icon ><HomeFilled /></el-icon> Home
        </router-link>
      </el-menu>
<!--      <el-menu index="2">-->
<!--        <router-link to="/"-->
<!--        <el-icon><UserFilled /></el-icon>User-->
<!--      </el-menu>-->
<!--      <div class="heading">Products</div>-->
      <p class="side-bar-group-title">Products</p>
      <el-menu index="3">
        <router-link to="/products">
          <el-icon><List /></el-icon> Table
        </router-link>
      </el-menu>
      <el-menu index="4">
        <router-link to="/manage">
          <el-icon><Management /></el-icon> Manage
        </router-link>
      </el-menu>
    </el-col>

  </el-aside>
</template>

<script>

import { HomeFilled, List, Management } from "@element-plus/icons-vue"
export default {
  name: "SideBar",
  components: {
    HomeFilled,
    // UserFilled,
    List,
    Management
  }
}
</script>

<style scoped>
.side-bar-group-title {
  color: white;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
}

/* Web Side bar */
div.heading {
  padding-left: 20px;
  color: lightgray;
}

.router-link-active {
  text-decoration: none;
  color: #409eff;
}
a {
  text-decoration: none;
  color: white;
}

.sider {
  width: 200px;
  display: flex;
  background-color: rgb(54, 57, 62);
}
.sider ul{
  color: rgb(235, 235, 235);
  background-color: inherit;
  height: 30px;
  margin-left: 40px;
  margin-top: 5px;
}

.el-menu{
  padding-top: 10px;
}
</style>
