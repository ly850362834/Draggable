<template>
    <div>
      <draggable :id = "'g2'" :onEnd="onEnd" :group="group2" style="height: 300px;background: red" :onAdd="onAdd">
        <template v-slot:content>
        </template>
      </draggable>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'render',
  props: {

  },
  data(){
    return {
      group2 : {name: "itxst.com", pull: 'clone', put: true}
    }
  },
  components:{

  },
  methods: {
    onEnd(){
      console.log('这是拖动结束')
    },
    onAdd(evt:any,type:any){
      console.log(evt)
    }
  },
  mounted(){

  },
  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>