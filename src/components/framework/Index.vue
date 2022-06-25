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
  // data(){
  //
  // }
}


</script>

<style>

.layout-container {
  margin: 0 0 0 0;
}

/* Web Icon */
#Project-Icon {
  display: inline-flex;
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
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
  background-color: rgb(54, 57, 62);
  /*height: auto;*/
}
.sider ul{
  color: rgb(235, 235, 235);
  text-align: center;
  background-color: inherit;
}


/* Content */
.layout-container .el-main {
  margin-bottom: 10px;
  padding: 1px;
  height: 90vh;
}

</style>
