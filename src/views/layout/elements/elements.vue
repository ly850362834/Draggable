<template>
  <div class="layout-element">
    <div class="element">
      <h5>{{ basicsComponent.label }}</h5>
      <ul>
        <draggable :list="basicsComponent.basicsComponentJson" :group="{ name: 'people', pull: 'clone', put: false }" isFather>
          <template v-slot:content>
            <li v-for="(item,index) in basicsComponent.basicsComponentJson">
              {{item.label}}
            </li>
          </template>
        </draggable>
      </ul>
    </div>
    <div class="element">
      <h5>{{ layoutComponent.label }}</h5>
      <ul>
        <draggable :list="layoutComponent.layoutComponentJson" :group="{ name: 'people', pull: 'clone', put: false }" isFather>
          <template v-slot:content>
            <li v-for="(item,index) in layoutComponent.layoutComponentJson">
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
import { VueDraggableNext } from 'vue-draggable-next';
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
      // list: [
      //   { name: 'John', id: 1 },
      //   { name: 'Joao', id: 2 },
      //   { name: 'Jean', id: 3 },
      //   { name: 'Gerard', id: 4 },
      // ],
      basicsComponent: {},
      layoutComponent:{},
    }
  },
  components:{
    VueDraggableNext
  },
  methods: {

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
