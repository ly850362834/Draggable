<template>
  <VueDraggableNext :list="list" :group="group" @change="onChange" chosenClass="render-chosen-border"  @choose='onChoose'>
    <slot name="content" v-if="isFather">

    </slot>
    <template v-if="!isFather">
      <renderEngine v-for="(item,index) in list" :comInformation="item" :key="index" :group="group" @click.stop="onClick(item)">
      </renderEngine>
    </template>
  </VueDraggableNext>
</template>

<script lang="ts">
import {defineComponent, PropType,onBeforeUnmount} from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
// import eventBus from "@/assets/api/eventBus.ts";

export default defineComponent({
  name: 'draggable',
  data(){
    return {

    }
  },
  components:{
    VueDraggableNext
  },
  props: {
    list: {
      type: Array,
      default: () => ([])
    },
    isFather: {
      type: Boolean,
      default:false
    },
    group: {
      type: Object,
      required: false,
      default: () => ({
        name: 'people', pull: true , put: true
      })
    }
  },
  created() {

  },
  methods: {
    //点击选择时间
    onClick(item: object){
      // console.log(999)
      this.$emit('onChoose',item)
    },
    onChoose(dom:any){

    },
    onChange(evt: any){
      this.$emit('onChang',evt)
    }
  },
  mounted(){

  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
