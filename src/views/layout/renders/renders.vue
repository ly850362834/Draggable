<template>
  <draggable :onEnd="onEnd" :group="group2" @onAdd="onAdd" @onUpdate="onUpdate" @onChoose="onChoose"
             :list="list">
    <template v-slot:content>
      <template v-for="(item,index) in list">
        <renderEngine :comInformation="item" class="draggable" id="lll"></renderEngine>
      </template>
    </template>
  </draggable>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'render',
  props: {},
  data() {
    return {
      group3: {name: "itxst.com", pull: true, put: true},
      group2: {name: "itxst.com", pull: true, put: true},
      list: [{type: "basic", name: "input", label: "输入框"},{type: "basic", name: "input", label: "输入框"},{type: "basic", name: "input", label: "输入框"}]
    }
  },
  components: {

  },
  methods: {
    onChoose(evt: any){
      console.log(evt)
    },
    onEnd(): void {
      // console.log('拖动结束')
      // console.log('这是拖动结束')
    },
    onUpdate(evt: any){
      console.log(evt)
    },
    onAdd(evt: any) {
      console.log(this.list,666)
      // console.log(this.list,666);
      // interface list {
      //   type: string
      //   name: string
      // }
      // console.log((this.list[0] as list).name);
      // debugger
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