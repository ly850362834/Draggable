<template>
<draggable :list="list" :onChange="onChange"></draggable>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import eventBus from "@/assets/api/eventBus";
interface itemP{
  isSelect: boolean
}
export default defineComponent({
  name: 'render',
  props: {},
  data() {
    return {
      list:[] as Array<Object>,
      isSelectedArray:[] as Array<Object>
    }
  },
  components: {

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
      // console.log(this.list);
    },
    onChange(evt: any) {
      if (evt.added) {
        //添加comId
        !evt.added.element.comId?evt.added.element.comId=(new Date()).valueOf():null
      }
      // console.log(this.list,evt);
    }
  },
  mounted() {
    eventBus.$on("onChoose", (item: any) => {
      //可以控制一个栈 栈入栈出
      this.selectItem(item);
      // console.log("这是eventBus的Key",item);
      //接下来遍历查询就好 查出节点 赋值右侧操作侧;

    });
    // this.onEvent();
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>