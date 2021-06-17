<template>
  <div>
    <el-select v-model="isSelectedArray[0].rowLength" placeholder=""  @change="rowLengthChange">
      <el-option
          v-for="(item,index) in [1,2,3,4]"
          :key="index"
          :label="item"
          :value="item">
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'components',
  inject: ['isSelectedArray'],
  data(){
    return {

    }
  },
  components:{

  },
  methods: {
    rowLengthChange(){
      let item = (this as any).isSelectedArray[0];
      if (item.rowLength>item.children.length) {
        while (item.children.length<item.rowLength) {
          let obj = {name:'col',label:'栅格',list:[],type:'basic'};
          item.children.push(obj)
        }
      } else {
        while (item.children.length>item.rowLength) {
          item.children.pop()
        }
      }
    }
  },
  created(){

  },
  mounted(){

  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>

