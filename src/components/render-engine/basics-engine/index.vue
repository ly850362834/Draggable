<template>
  <elInput></elInput>
</template>
<script lang="ts">
import elInput from './input/input.vue';
import {defineComponent, PropType} from 'vue';
import {comInformation} from "@/components/render-engine/index.vue";
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

    }
  },
  components:{
    elInput
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

