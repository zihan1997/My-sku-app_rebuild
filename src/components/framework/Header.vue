<template>
  <el-container class="header_content">
    <el-header style="text-align: right; font-size: 18px">
      <div class="toolbar">
        {{ username }}
      </div>
    </el-header>
    <ContentArea/>
  </el-container>
</template>

<script>
import ContentArea from './ContentArea'
import { useStore } from 'vuex'
import {computed} from "vue";

export default {
  name: "WebHeader",
  components: {
    ContentArea
  },
  setup(){
    const store = useStore();

    return {
      username: computed(() => store.getters.username)
    }
  }
}
</script>

<style scoped>
.toolbar {
  margin-right: 5px;
}
</style>
