<template>
  <el-container class="header_content">
    <el-header style="text-align: right; font-size: 18px">
      <div class="toolbar">
        header
      </div>
    </el-header>
    <ContentArea/>
  </el-container>
</template>

<script>
import ContentArea from './ContentArea'
export default {
  name: "WebHeader",
  components: {
    ContentArea
  }
}
</script>

<style scoped>

</style>
