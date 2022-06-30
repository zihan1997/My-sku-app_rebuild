<template>
  <el-table
      :data="data"
      auto
      :width="550"
      :border="true"
      show-summary
  >
    <el-table-column prop="code" label="Code"></el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column prop="price" label="Price"></el-table-column>
    <el-table-column prop="quantity" label="Quantity"></el-table-column>
    <el-table-column prop="date" label="Date"></el-table-column>

    <el-table-column label="Actions" >
      <template #default="scope">
        <el-button @click="handleEdit(scope.$index, scope.row)" type="primary">Edit</el-button>
        <el-button @click="handleDel(scope.$index, scope.row)" type="danger" >Delete</el-button>
      </template>

    </el-table-column>
  </el-table>
  <EditDrawer :isDrawer="isDrawerOpen" @response="closeDrawer" :record="record"/>
</template>

<script>

import { del } from '@/api/products'

import EditDrawer from "@/layouts/ProductPage/TableActions/EditDrawer";
export default {
  name: "MyTable",
  components: {EditDrawer},
  props: ['data'],
  methods: {
    // Edit record ( current row) by providing a drawer
    handleEdit(index, row) {
      console.log('edit ' + JSON.stringify(index) + " " + JSON.stringify(row))
      this.isDrawerOpen = true;

      this.record = row;
      console.log(this.record)
    },
    // Delete record by API
    handleDel(index, row) {
      del(row).then().catch(() => {})
    },

    // sync the value of drawer (boolean)
    closeDrawer(val){
      this.isDrawerOpen = val;
    }
  },
  data(){
    return {
      isDrawerOpen: false,
      record: {}
    }
  }
}
</script>

<style scoped>

.el-table {
  height: fit-content;
}

</style>
