<template>
  <div class="layout-container">
    <el-container >
      <!--    side bar -->
      <el-aside width="200px" >
        <el-scrollbar>
          <el-menu>
            <el-icon>
              <HomeFilled />
            </el-icon>
            Home
          </el-menu>
          <el-menu index="2">
            User
          </el-menu>
          <el-menu index="3">
            Product
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container class="header_content">
        <el-header style="text-align: right; font-size: 12px">
          <div class="toolbar">
            header
          </div>
        </el-header>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140"></el-table-column>
            <el-table-column prop="name" label="Name" width="120"></el-table-column>
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script >


export default {
  name: "AllinOne",
  data(){
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return{
      tableData: Array.from({ length: 20 }).fill(item)
    }
  }
}


</script>

<style>
.layout-container .el-icon{
   color: black;
}
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container .el-menu {
  border-right: none;
}
.layout-container .el-main {
  padding: 0;
}
.layout-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
