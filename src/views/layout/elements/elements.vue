<template>
  <div class="element">
    <div class="basic">
      <h5>{{ basicsComponent.label }}</h5>
      <ul>
        <draggable :id = "'g1'" :onEnd="onEnd">
          <template  v-slot:content>
            <li class="draggable" v-for="(item,index) in basicsComponent.basicsComponentJson" :comObj="JSON.stringify(item)">
              {{item.label}}
            </li>
          </template>
        </draggable>
      </ul>
    </div>
    <div></div>
    <div></div>
  </div>
</template>
<script lang="ts">
import {basicsComponent} from "@/json/components/basics-components";
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'element',
  props: {

  },
  data(){
    return {
      basicsComponent:{

      }
    }
  },
  components:{

  },
  methods: {
    onEnd(evt: any){
      // console.log('这是拖动结束',evt)
    },
    onAdd(evt:any,type:any){
      console.log(type)
    },

  },
  mounted(){
    this.basicsComponent = basicsComponent;
    // console.log(basicsComponent);
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>
