<template>

  <el-row>
    <el-col :span="4">
      <el-select v-model="selectTag">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-col>
    <el-col :span="16">
      <el-input v-model="toSearch" placeholder="Select a tag ans input here" />
    </el-col>
    <el-col :span="3">
      <el-button type="primary" @click="onSearch">Search</el-button>
    </el-col>
  </el-row>


  <el-divider/>

  <MyTable :data="searchResult"/>

</template>

<script>

import MyTable from "@/layouts/ProductPage/TableTemplate/MyTable";
import {ElMessage} from "element-plus";
import {getByCode, getListByName} from '@/api/products/index'

export default {
  name: 'SearchProduct',
  components: {MyTable},
  props: {},

  setup(){
    const options =[
      {
        value: 'Code',
        label: "Code"
      },
      {
        value: 'Name',
        label: 'Name'
      }
    ]
    return {
      options
    }
  },
  watch: {
    toSearch(){
      // console.log('select ' + this.selectTag)
      switch (this.selectTag) {
        case "Code":

          break;
        case "Name":
          console.log("searching for name");
          break;
      }
    }
  },
  methods: {
    onSearch(){
      this.searchResult = [];
      if(this.selectTag && this.toSearch) {
        ElMessage({
          message: 'Searching...',
          type: 'info',
          duration: 1000
        })
        switch (this.selectTag) {
          case "Code":
            var code = Number(this.toSearch);
            if(isNaN(code)) {
              ElMessage({
                message: 'Invalid Input, please give number only',
                type: 'warning',
                duration: 2000
              });
              break;
            }
            console.log(`${this.selectTag} : ${this.toSearch}`);

            // search
            getByCode(this.toSearch).then(response => this.searchResult.push(...response.data))
            break;
          case "Name":
            console.log("searching for name");
            // submit data
              getListByName(this.toSearch).then(response => this.searchResult.push(...response.data))
            break;
        }
      }
    }
  },
  data(){
    return {
      toSearch: '',
      selectTag: '',
      searchResult: [],
    }
  },

}

</script>

<style></style>
