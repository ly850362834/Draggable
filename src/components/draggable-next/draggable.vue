<template>
  <div :id="renderId">
    <template v-if="views">
      <slot name="content">

      </slot>
    </template>
  </div>
</template>

<script lang="ts">
// import Sortable from 'sortablejs';
import {defineComponent, PropType,onBeforeUnmount} from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
// import eventBus from "@/assets/api/eventBus.ts";

export default defineComponent({
  // setup() {
  //   function changeMenu(){
  //     eventBus.$emit("change-menu");
  //   }
  //   return {changeMenu};
  // },
  name: 'draggable',
  data(){
    return {
      views:true,
      renderId:`${new Date().valueOf()}`,
    }
  },
  components:{
    VueDraggableNext
  },
  props: {
    // id: {
    //   type: String,
    //   required: true
    // },
    // list: {
    //   type: Array,
    //   default: () => ([])
    // },
    // sortableObj: {
    //   type: Object,
    //   required: false
    // },
    // group: {
    //   type: Object,
    //   required: false,
    //   default: () => ({
    //     name: "itxst.com", pull: 'clone', put: false
    //   })
    // }
  },
  created() {

  },
  methods: {

  },
  mounted(){
    // this.registerDom();
  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
