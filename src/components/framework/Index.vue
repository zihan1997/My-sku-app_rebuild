<template>
  <div class="layout-container">
    <el-container >
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



/* Content */
.layout-container .el-main {
  margin-bottom: 10px;
  padding: 20px;
  height: 90vh;
  background-color: #f0f3f8;
  /*margin: 20px;*/
  border: 200px;
}

</style>
