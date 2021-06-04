<template>
    <basicEngine :comInformation="comInformation" v-if="comInformation.type=='basic'"></basicEngine>
    <layoutEngine :comInformation="comInformation" v-else-if="comInformation.type=='layout'"></layoutEngine>
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
  setup() {
    return {}
  },
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
});
</script>
<style lang="less">

</style>

