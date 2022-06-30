<template>
  <el-container class="header_content">
    <el-header style="text-align: right; font-size: 18px">
      <div class="toolbar">
        header
<!--    todo del  -->
        <el-button @click="onClick">Login</el-button>
      </div>
    </el-header>
    <ContentArea/>
  </el-container>
</template>

<script>
import ContentArea from './ContentArea'
import { login } from '@/api/login'
export default {
  name: "WebHeader",
  components: {
    ContentArea
  },
  methods: {
    // todo del
    onClick(){
      console.log("header login here");
      login('test', 'test')
          .then((response) => localStorage.setItem('token', response.data.token))
    }
  }
}
</script>

<style scoped>

</style>
