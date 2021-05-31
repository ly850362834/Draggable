<template>
  <div class="layout-element">
    <div class="element">
      <h5>{{ basicsComponent.label }}</h5>
      <ul>
        <draggable :id = "'basic'" :onEnd="onEnd" :onChoose="onChoose">
          <template  v-slot:content>
            <li class="draggable" v-for="(item,index) in basicsComponent.basicsComponentJson" :comObj="JSON.stringify(item)">
              {{item.label}}
            </li>
          </template>
        </draggable>
      </ul>
    </div>
    <div class="element">
      <h5>{{ layoutComponent.label }}</h5>
      <ul>
        <draggable :id = "'layout'" :onEnd="onEnd" :onChoose="onChoose">
          <template  v-slot:content>
            <li class="draggable" v-for="(item,index) in layoutComponent.layoutComponentJson" :comObj="JSON.stringify(item)">
              {{item.label}}
            </li>
          </template>
        </draggable>
      </ul>
    </div>
    <div></div>
  </div>
</template>
<script lang="ts">
import {basicComponent} from "@/json/components/basics-components";
import {layoutComponent} from "@/json/components/layout-components";
import {defineComponent, PropType} from 'vue';
// interface basicsComponent{
//   basicsComponentJson: readonly any[];
// }
export default defineComponent({
  name: 'element',
  props: {

  },
  data(){
    return {
      basicsComponent: {},
      layoutComponent:{}
    }
  },
  components:{

  },
  methods: {
    onChoose(evt: any) {
      console.log(evt)
    },
    onEnd(evt: any){
      // console.log('这是拖动结束',evt)
    },
    onAdd(evt:any){
      // console.log(type)
    },

  },
  created() {
    this.basicsComponent = basicComponent;
    this.layoutComponent = layoutComponent;
    // interface basicsComponent{
    //   basicsComponentJson: readonly any[];
    // }
    // (this.basicsComponent as basicsComponent).basicsComponentJson[0].type='aaa'
  },
  mounted(){
    // console.log(basicsComponent);
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>
