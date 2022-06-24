<template>
  <div class="layout-container">
    <el-container >
      <!--    side bar -->
      <SideBar/>
      <MyHeader/>
    </el-container>
  </div>
</template>

<script >

import MyHeader from './Header';
import SideBar from './SideBar'

export default {
  name: "WebFrame",
  components: {
    MyHeader,
    SideBar,
  },
  data(){

  }
}


</script>

<style>
/* Web Icon */
#Project-Icon {
  height: 50px;
  width: 200px;
  text-align: center;
  background-color: rgb(74, 78, 83);
}

/* Web Header */
.layout-container .el-header {
  position: relative;
  color: rgb(235, 235, 235);
  background-color: rgb(53, 58, 63);
}

.layout-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

/* Web Side bar */
.sider {
  display: flex;
  /*margin-top: 100px;*/
  background-color: rgb(54, 57, 42);
}
.sider ul{
  color: rgb(235, 235, 235);
  text-align: center;
  background-color: inherit;
}


/* Content */
.layout-container .el-main {
  padding: 1px;
  height: fit-content;
}

</style>
