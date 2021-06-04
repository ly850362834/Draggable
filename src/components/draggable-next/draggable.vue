<template>
  <VueDraggableNext :list="list" :group="group" @change="onChange">
    <slot name="content" v-if="isFather">

    </slot>
    <template v-if="!isFather">
      <renderEngine v-for="(item,index) in list" :comInformation="item" :key="index" :group="group">
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
