<template>
  <div>
    <inputOpitons></inputOpitons>
  </div>
</template>
<script lang="ts">
import inputOpitons from './input/options.vue'
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'components',
  inject: ['isSelectedArray'],
  data(){
    return {

    }
  },
  components:{
    inputOpitons
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

