<template>
  <h1 class="table-title">Product List</h1>
  <MyTable :data="products" />
</template>

<script>
import MyTable from '../../../layouts/ProductPage/TableTemplate/MyTable';
import { useStore } from 'vuex';
import {computed} from "vue";

export default {
  name: "ProductListing",
  components: {
    MyTable,
  },
  setup(){
    const store = useStore();
    return {
      products: computed(() => store.getters["products/getProductList"])
    }
  },
  data(){
    return {
      currentRow: {},
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
