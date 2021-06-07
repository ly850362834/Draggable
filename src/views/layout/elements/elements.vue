<template>
  <div class="layout-element">
    <div class="element" v-for="(kitem) in keySort">
      <h5>{{ elementComponents[kitem].label }}</h5>
      <ul>
        <draggable :list="elementComponents[kitem].componentJson" :group="{ name: 'people', pull: 'clone', put: false }" isFather :onEnd="onEnd">
          <template v-slot:content>
            <li v-for="(item,index) in elementComponents[kitem].componentJson">
              {{item.label}}
            </li>
          </template>
        </draggable>
      </ul>
    </div>
<!--    <div class="element">-->
<!--      <h5>{{ elementComponents.layoutComponent.label }}</h5>-->
<!--      <ul>-->
<!--        <draggable :list="elementComponents.layoutComponent.layoutComponentJson" :group="{ name: 'people', pull: 'clone', put: false }" isFather>-->
<!--          <template v-slot:content>-->
<!--            <li v-for="(item,index) in elementComponents.layoutComponent.layoutComponentJson">-->
<!--              {{item.label}}-->
<!--            </li>-->
<!--          </template>-->
<!--        </draggable>-->
<!--      </ul>-->
<!--    </div>-->
    <div></div>
  </div>
</template>
<script lang="ts">
import { VueDraggableNext } from 'vue-draggable-next';
import {elementComponents} from "@/json/components";
import {defineComponent, PropType} from 'vue';
import _ from 'lodash';
import {stringifyQuery} from "vue-router";
export default defineComponent({
  name: 'element',
  props: {

  },
  data(){
    return {
      keySort:['basicComponent','layoutComponent'] as Array<string>,
      elementComponents:{} as {[index: string]:any},
    }
  },
  components:{
    VueDraggableNext
  },
  methods: {
    //
    deepCopy(){
      for (let key in elementComponents) {
        this.elementComponents[key] = _.cloneDeep(elementComponents[key])
      }
    },
    // init(){
    //
    // },
    onEnd(){
      this.deepCopy();
    }
  },
  created() {
    this.deepCopy();
  },
  mounted(){
    // console.log(elementComponents.basicComponent);
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>
