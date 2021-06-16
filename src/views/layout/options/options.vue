<template>
  <div>
      <renderOptions :isSelectedItem="isSelectedArray[0]"></renderOptions>
  </div>
</template>
<script lang="ts">
import renderOptions from '@/components/render-engine/options.vue'
import {defineComponent, PropType} from 'vue';
import eventBus from "@/assets/api/eventBus";
interface itemP{
  isSelect: boolean
}
export default defineComponent({
  name: 'components',
  props:[],
  data(){
    return {
      isSelectedArray:[{}] as Array<Object>
    }
  },
  components:{
    renderOptions
  },
  methods: {
//用栈堆控制
    selectItem(item: itemP){
      if (this.isSelectedArray.length) {
        (this.isSelectedArray[0] as itemP).isSelect=false;
        this.isSelectedArray.pop();
      }
      item.isSelect=true;
      this.isSelectedArray.push(item);
    },
  },
  mounted(){
    eventBus.$on("onChoose", (item: any) => {
      //可以控制一个栈 栈入栈出
      this.selectItem(item);
      // console.log("这是eventBus的Key",item);
      //接下来遍历查询就好 查出节点 赋值右侧操作侧;

    });
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>

