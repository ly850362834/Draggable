<template>
  <div class="layout">
    <el-row>
      <el-col :span="6">
          <elements></elements>
      </el-col>
      <el-col :span="12">
        <renders class="layout-renders"></renders>
      </el-col>
      <el-col :span="6">
        <div>333</div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import elements from "@/views/layout/elements/elements.vue";
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
    elements,
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