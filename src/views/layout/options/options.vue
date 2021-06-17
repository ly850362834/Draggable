<template>
  <div>
      <renderOptions></renderOptions>
  </div>
</template>
<script lang="ts">
import renderOptions from '@/components/render-engine/options.vue'
import {defineComponent, PropType,reactive,computed} from 'vue';
import eventBus from "@/assets/api/eventBus";
interface itemP{
  isSelect: boolean
}
export default defineComponent({
  name: 'components',
  data(){
    return {
      // isSelectedArray:[{}] as Array<Object>
    }
  },
  setup() {
    const isSelectedArray: any = reactive([{}])
    return {
      isSelectedArray
    };
  },
  provide() {
    return {
      isSelectedArray:this.isSelectedArray
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
      // this.selectedItem=null;
      // this.selectedItem=item;
      // console.log(this.selectedItem)
      // this.isSelectedArray=[...this.isSelectedArray]
    },
  },
  mounted(){
    eventBus.$on("onChoose", (item: any) => {
      //可以控制一个栈 栈入栈出
      this.selectItem(item);
      // console.log(this.isSelectedArray);
      // console.log(this._provided.isSelectedArray);
      // console.log(this.provide.isSelectedArray)
      // console.log("这是eventBus的Key",item);
      //接下来遍历查询就好 查出节点 赋值右侧操作侧;

    });
  }
});
</script>
<style lang="less">

</style>

