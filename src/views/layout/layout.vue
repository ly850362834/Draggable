<template>
  <div class="layout">
    <el-row>
      <el-col :span="6">
        <div class="layout-components">
            <element></element>
        </div>
      </el-col>
      <el-col :span="12">
        <renders></renders>
      </el-col>
      <el-col :span="6">
        <div>333</div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import element from "@/views/layout/element/element.vue";
import renders from "@/views/layout/renders/renders.vue";
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'components',
  props: {

  },
  data(){
    return {
      group2 : {name: "itxst.com", pull: 'clone', put: true}
    }
  },
  components:{
    element,
    renders
  },
  methods: {
    onEnd(){
      // console.log('这是拖动结束')
    },
    onAdd(evt:any,type:any){
      // console.log(type)
    }
  },
  mounted(){

  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">

</style>