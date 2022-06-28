<template>
  <h1 class="table-title">Product List</h1>
  <MyTable :data="products" />
</template>

<script>
import MyTable from '../TableTemplate/MyTable';

export default {
  name: "ProductListing",
  components: {
    MyTable,
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
