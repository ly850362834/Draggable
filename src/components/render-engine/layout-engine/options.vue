<template>
  <div>
    <rowOptions></rowOptions>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import rowOptions from './row/options.vue'
export default defineComponent({
  name: 'components',
  inject: ['isSelectedArray'],
  data(){
    return {

    }
  },
  components:{
    rowOptions
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

