<template>
  <div>
    <bascicOptions v-if="isSelectedItem.type=='basic'"></bascicOptions>
    <layoutOptions v-if="isSelectedItem.type=='layout'"></layoutOptions>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import bascicOptions from './basics-engine/options.vue'
import layoutOptions from './layout-engine/options.vue'
export default defineComponent({
  name: 'components',
  props:['isSelectedItem'],
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

