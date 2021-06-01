<template>
  <div style="border:2px #3892FF solid;padding:2px">
    <basicEngine v-if="comInformation.type=='basic'" :comInformation="comInformation"></basicEngine>
    <layoutEngine v-else-if="comInformation.type=='layout'" :comInformation="comInformation"></layoutEngine>
  </div>
</template>
<script lang="ts">

export interface comInformation {
  type: string
  name: string
  label: string
}
import basicEngine from './basics-engine/index.vue'
import layoutEngine from './layout-engine/index.vue'
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'components',
  props: {
    comInformation:{
      type: Object as PropType<comInformation>,
      default:{
        type: '' ,
        name: '',
        label: '',
      }
    }
  },
  data(){
    return {
      basicsComponent:{

      }
    }
  },
  components:{
    basicEngine,
    layoutEngine
  },
  methods: {

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

