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
          <options></options>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import elements from "@/views/layout/elements/elements.vue";
import renders from "@/views/layout/renders/renders.vue";
import options from "@/views/layout/options/options.vue";
import {defineComponent, PropType} from 'vue';
import eventBus from "@/assets/api/eventBus";
interface itemP{
  isSelect: boolean
}
export default defineComponent({
  name: 'components',
  props: {

  },
  data(){
    return {
      group2 : {name: "itxst.com", pull: 'clone', put: true},
      isSelectedArray:[] as Array<Object>
    }
  },
  components:{
    elements,
    renders,
    options
  },
  methods: {
    onEnd(){
      // console.log('这是拖动结束')
    },
    onAdd(evt:any,type:any){
      // console.log(type)
    },
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