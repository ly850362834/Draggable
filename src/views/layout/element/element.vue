<template>
  <div class="components">
    <div class="basic">
      <h5>基础组件</h5>
      <ul>
        <draggable :id = "'g1'" :onAdd="onAdd">
          <template  v-slot:content>
            <li class="item" data-id="1" type="inputs">input</li>
          </template>
        </draggable>
      </ul>
    </div>
    <div></div>
    <div></div>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'components',
  props: {

  },
  data(){
    return {

    }
  },
  components:{

  },
  methods: {
    onEnd(){
      console.log('这是拖动结束')
    },
    onAdd(evt:any,type:any){
      console.log(type)
    }
  },
  mounted(){

  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>
