<template>
  <div>
    <bascicOptions v-if="isSelectedArray[0].type=='basic'"></bascicOptions>
    <layoutOptions v-if="isSelectedArray[0].type=='layout'"></layoutOptions>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import bascicOptions from './basics-engine/options.vue'
import layoutOptions from './layout-engine/options.vue'
export default defineComponent({
  name: 'components',
  props:[],
  inject: ['isSelectedArray'],
  data(){
    return {

    }
  },
  components:{
    bascicOptions,
    layoutOptions
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

