<template>
<draggable :list="list" :onChange="onChange">

</draggable>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
// import { VueDraggableNext } from 'vue-draggable-next';
import eventBus from "@/assets/api/eventBus";
export default defineComponent({
  name: 'render',
  props: {},
  data() {
    return {
      list:[] as Array<Object>
    }
  },
  components: {

  },
  methods: {
    onChange(evt: any) {
      console.log(this.list)
    }
  },
  mounted() {
    // eventBus.$on("change-menu", (key: any) => {
    //   console.log("这是eventBus的Key",this.group2,key);
    //   //接下来遍历查询就好 查出节点 赋值右侧操作侧;
    //
    // });
    // this.onEvent();
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>