<template>
  <el-aside class="sider" >

    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
    >

      <div id="Project-Icon">My-Sku</div>
      <router-link to="/">
        <el-menu-item index="1">
          <el-icon ><HomeFilled /></el-icon> Home
        </el-menu-item>
      </router-link>
<!--      <el-menu index="2">-->
<!--        <router-link to="/"-->
<!--        <el-icon><UserFilled /></el-icon>User-->
<!--      </el-menu>-->
<!--      <div class="heading">Products</div>-->
      <p class="side-bar-group-title">Products</p>

      <router-link to="/products">
        <el-menu-item index="3">
          <el-icon><List /></el-icon> Table
        </el-menu-item>
      </router-link>
      <router-link to="/manage">
        <el-menu-item index="4">
          <el-icon><Management /></el-icon> Manage
        </el-menu-item>
      </router-link>
    </el-menu>

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

/* Web Icon */
#Project-Icon {
  /*display: block;*/
  height: 60px;
  width: 150px;
  /*justify-content: right;*/
  /*align-items: center;*/
  background-color: rgb(74, 78, 83);
  color: white;
  flex-direction: column;
}

.side-bar-group-title {
  color: white;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
}

.el-menu-item {
  text-decoration: none;
  color: white;
}

.sider {
  width: 250px;
  /*display: flex;*/
  background-color: rgb(54, 57, 62);
}
.sider ul{
  background-color: inherit;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
}

.el-menu{
  padding-top: 10px;
}
</style>
