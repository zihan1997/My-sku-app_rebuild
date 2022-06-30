<template>
  <el-drawer
    title="Edit Form"
    v-model="isShow"
    :direction="'rtl'"
    :before-close="handleClose"
  >

    <el-form
        :model="productForm"
        label-width="120px"
        style="max-width: 460px"
        ref="vForm"
        @submit.prevent
    >
      <el-form-item label="Code"  >
        <el-input disabled class="code" v-model="productForm.code" />
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
        <el-date-picker
            v-model="productForm.date"
            type="date"
            placeholder="Pick a date"
            :default-value="new Date(2022, 7, 1)"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click.prevent="onSubmit"> Edit </el-button>
      </el-form-item>

    </el-form>

  </el-drawer>
</template>

<script>
import { change } from '@/api/products'

export default {
  name: "EditDrawer",
  props: {
    isDrawer: {
      type: Boolean,
      default: false
    },
    record: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['response'],
  data(){
    return {
      isShow: false,
      productForm: this.record
    }
  },
  methods: {
    handleClose(){
      this.$emit('response', false);
      this.isShow = false;
    },
    // Submit record change
    onSubmit(){
      console.log('edit ' + JSON.stringify(this.productForm));
      // getByCode(this.productForm.code).then( (res) => {
      //   this.productForm.id = res.data.id
      // })
      change(this.productForm).then((res) => {
        console.log(res);
        this.handleClose()
      })
    }
  },
  watch: {
    isDrawer: {
      handler(newValue){
        this.isShow = newValue
      }
    },
    record: {
      handler(newValue){
        this.productForm = {...newValue}
      }
    }
  }
}
</script>

<style scoped>
.el-form {
  margin-left: -50px;
}
</style>
