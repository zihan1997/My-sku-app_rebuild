<template>
  <el-main>
    <el-table :data="tableData">
      <el-table-column prop="date" label="Date" width="140"></el-table-column>
      <el-table-column prop="name" label="Name" width="120"></el-table-column>
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-main>
</template>

<script>
export default {
  name: "ContentArea",
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

<style scoped>

</style>
