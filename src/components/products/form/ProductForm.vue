<template>
  <el-form
    :model="productForm"
    label-width="120px"
    style="max-width: 460px"
    ref="vForm"
    @submit.prevent
  >
    <el-form-item label="Code">
      <el-input v-model="productForm.code" />
    </el-form-item>

    <el-form-item label="Name">
      <el-input v-model="productForm.name" />
    </el-form-item>

    <el-form-item label="Price">
      <el-input v-model="productForm.price"/>
    </el-form-item>

    <el-form-item label="Quantity">
      <el-input v-model="productForm.quantity"/>
    </el-form-item>

    <el-form-item label="Date">
<!--      <el-input v-model="productForm.date"/>-->
      <el-date-picker
        v-model="productForm.date"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2022, 7, 1)"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click.prevent="onSubmit">Search</el-button>
      <el-button type="warning" @click="resetForm">Reset</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import { reactive} from "vue";

export default {
  name: "ProductForm",
  setup(){

    const productForm = reactive({
      code: '',
      name: '',
      price: null,
      quantity: null,
      date: new Date().toISOString(),
    });
    const resetForm = () => {
      productForm.code= '';
      productForm.name='';
      productForm.price=null;
      productForm.quantity=null;

    }
    const printForm = () => console.log(productForm);
    return {
      printForm,
      productForm,
      resetForm
    };
  },
  methods: {
    onSubmit(){
      console.log('submit ' + JSON.stringify(this.productForm))
      this.printForm()
    }
  }
}
</script>

<style scoped>
.el-form {
  margin-top: 3%;
  margin-left: 3%;
}
</style>
