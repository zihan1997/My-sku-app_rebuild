<template>
  <h1 class="table-title">Product List</h1>
  <MyTable :data="data" />
</template>

<script>
import MyTable from '@/layouts/ProductPage/TableTemplate/MyTable';
import { getList } from "@/api/products";

export default {
  name: "ProductListing",
  components: {
    MyTable,
  },
  data(){
    return {
      data: []
    }
  },
  created() {
    getList().then(response => this.data.push(...response.data));
  },

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
