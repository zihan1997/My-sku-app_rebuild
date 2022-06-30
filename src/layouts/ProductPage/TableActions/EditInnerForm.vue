<template>
  <ProductForm @response="onSubmit" :name="'Edit'" />
</template>

<script>
import ProductForm from "@/layouts/ProductPage/form/GeneralProductForm";

export default {
  name: "EditInnerForm",
  components: {ProductForm},

  methods: {
    onSubmit(){
      console.log('edit');
    }
  },
}
</script>

<style scoped>

</style>
