<template>
  <draggable :id="'g2'" :onEnd="onEnd" :group="group2" :onAdd="onAdd"
             :list="list">
    <template v-slot:content>
      <template v-for="(item,index) in list">
        <renderEngine :list="list" :comInformation="item" class="draggable"></renderEngine>
      </template>
    </template>
  </draggable>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import renderEngine from '@/components/render-engine/index.vue'

export default defineComponent({
  name: 'render',
  props: {},
  data() {
    return {
      group3: {name: "itxst.com", pull: true, put: true},
      group2: {name: "itxst.com", pull: true, put: true},
      list: []
    }
  },
  components: {
    renderEngine
  },
  methods: {
    onEnd(): void {
      // console.log('拖动结束')
      // console.log('这是拖动结束')
    },
    onAdd(evt: any) {
      // interface list {
      //   type: string
      // }
      // console.log((this.list));
      // debugger
      // debugger
      // setTimeout(()=>{
      //   console.log((this.list[0] as any).type);
      //   debugger
      // },0)
       // console.log(this.list,666);
       // console.log(this.list[0])
     //  debugger
    }
  },
  mounted() {

  },
  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>