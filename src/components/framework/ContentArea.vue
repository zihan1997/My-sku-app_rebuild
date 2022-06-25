<template>
  <el-main>
    <ProductListing />
  </el-main>
</template>

<script>

import ProductListing from "@/components/products/ProductListing";

export default {
  name: "ContentArea",
  components: {
    ProductListing
  },
}
</script>

<style scoped>

</style>
