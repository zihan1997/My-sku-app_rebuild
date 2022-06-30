<template>
  <el-drawer
    title="Edit Form"
    v-model="isShow"
    :direction="'rtl'"
    :before-close="handleClose"
  >
    <EditInnerForm/>
  </el-drawer>
</template>

<script>
import EditInnerForm from "@/layouts/ProductPage/TableActions/EditInnerForm";
export default {
  name: "EditDrawer",
  props: {
    isDrawer: {
      type: Boolean,
      default: false
    }
  },
  emits: ['response'],
  components: {EditInnerForm},
  data(){
    return {
      isShow: false,
    }
  },
  methods: {
    handleClose(){
      console.log('close')
      this.$emit('response', false);
      this.isShow = false;
    }
  },
  watch: {
    isDrawer: {
      handler(newValue){
        console.log('drawer change')
        this.isShow = newValue
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
