<template>
  <h1 class="table-title">Product List</h1>
  <el-table
    :data="products"
    auto
    :width="550"
    :height="550"
    :border="true"
    @row-click="handleRow"
    show-summary
  >
    <el-table-column prop="code" label="Code"></el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column prop="price" label="Price"></el-table-column>
    <el-table-column prop="quantity" label="Quantity"></el-table-column>
    <el-table-column prop="date" label="Date"></el-table-column>

    <el-table-column label="Actions">
      <template #default="scope">
        <el-button @click="handleEdit(scope.$index, scope.row)" type="primary">Edit</el-button>
        <el-button @click="handleDel(scope.$index, scope.row)" type="danger" >Delete</el-button>
      </template>

    </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: "ProductListing",

  methods: {
    handleRow(row){
      if(this.currentRow !== row) this.currentRow = row;
    },
    handleEdit(index, row){
      console.log('edit ' + JSON.stringify(index) + " " + JSON.stringify(row))
    },
    handleDel(index, row){
      console.log('del ' + JSON.stringify(index) + " " + JSON.stringify(row))
    },
  },

  data(){
    const product = {
          code: '1234',
          name: 'test',
          price: 12,
          quantity: 2,
          date: new Date().toISOString()
        };
    return {
      currentRow: {},
      products: Array.from({length: 30}).fill(product)
    }
  }
}
</script>

<style scoped>
.table-title {
  text-align: center;
}
.el-table {
  padding: 5px;
  background-color: whitesmoke;
}
</style>
