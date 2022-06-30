<template>
  <ProductForm @response="onSubmit" :name="'submit'" />
</template>

<script>
import ProductForm from "@/layouts/ProductPage/form/GeneralProductForm";
import { create } from '@/api/products/index'

export default {
  name: "AddNewProduct",
  components: {
    ProductForm
  },
  methods: {
    onSubmit(one){
      create(one)
    }
  }
}
</script>

<style scoped>

</style>
