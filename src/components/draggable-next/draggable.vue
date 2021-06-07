<template>
  <VueDraggableNext :list="list" :group="group" @add="onAdd" @change="onChange" chosenClass="render-chosen-border" @end="end">
    <slot name="content" v-if="isFather">

    </slot>
    <template v-if="!isFather">
      <renderEngine v-for="(item,index) in list" :comInformation="item" :key="index" @click.stop="onClick(item)">
      </renderEngine>
    </template>
  </VueDraggableNext>
</template>

<script lang="ts">
import {defineComponent, PropType,onBeforeUnmount} from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import eventBus from "@/assets/api/eventBus.ts";

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
    end(){
      this.$emit('onEnd')
    },
    onAdd(item: object,evt: any){
      // console.log(item,666,evt)
      this.$emit('onAdd')
    },
    //点击选择组件
    onClick(item: object){
      eventBus.$emit('onChoose',item);
    },
    onChoose(dom:any){
        // console.log(dom)
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
