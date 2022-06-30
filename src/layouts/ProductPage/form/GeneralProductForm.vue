<template>
  <el-form
    :model="productForm"
    label-width="120px"
    style="max-width: 460px"
    ref="vForm"
    @submit.prevent
  >
    <el-form-item label="Code"  >
      <el-input class="code" v-model="productForm.code" />
    </el-form-item>

    <el-form-item label="Name">
      <el-input class="name" v-model="productForm.name" />
    </el-form-item>

    <el-form-item label="Price">
      <el-input-number v-model="productForm.price"/>
    </el-form-item>

    <el-form-item label="Quantity">
      <el-input-number v-model="productForm.quantity"/>
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
      <el-button type="primary" @click.prevent="onSubmit">{{ name }}</el-button>
      <el-button type="warning" @click="resetForm">Reset</el-button>
      <el-button @click="generate">Generate</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import { reactive} from "vue";
import { createName, createCode, createPrice, createQuantity } from '../productGenerator'

export default {
  name: "ProductForm",
  props: ['name'],
  emits: ['response'],
  created() {
    this.generate();
  },
  setup(){

    const productForm = reactive({
      code: '',
      name: '',
      price: 0,
      quantity: 0,
      date: new Date().toISOString(),
    });
    const resetForm = () => {
      productForm.code= '';
      productForm.name='';
      productForm.price=0;
      productForm.quantity=0;

    }

    return {
      productForm,
      resetForm,
    };
  },
  methods: {
    onSubmit(){
      // console.log('submit ' + JSON.stringify(this.productForm));
      this.$emit('response', this.productForm);
      // this.asyncAdd(this.productForm)
      // create(this.productForm).then(() => this.generate() )
    },
    generate(){
      this.productForm.name = createName();
      this.productForm.code = createCode();
      this.productForm.price = createPrice();
      this.productForm.quantity = createQuantity();
    }
  }
}
</script>

<style scoped>
.el-form {
  margin-top: 3%;
  margin-left: 3%;
}
.code {
   width: 220px;
 }
.name {
  width: 220px;
}
</style>
