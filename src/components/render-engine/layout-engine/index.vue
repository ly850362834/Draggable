<template>
  <row :comInformation="comInformation"></row>
</template>
<script lang="ts">
import row from './row/row.vue'
import {defineComponent, PropType} from 'vue';
import {comInformation} from "@/components/render-engine/index.vue";
export default defineComponent({
  name: 'components',
  props: {
    comInformation:{
      default:{
        type: '' ,
        name: '',
        label: '',
        children:[]
      }
    }
  },
  data(){
    return {

    }
  },
  components:{
    row
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

