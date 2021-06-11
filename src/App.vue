<template>
  <div>
    <headers></headers>
    <layout></layout>
  </div>
</template>
<script lang="ts">
import layout from "@/views/layout/layout.vue";
import headers from "@/views/headers/headers.vue";
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'components',
  props: {

  },
  data(){
    return {
      drawer:false,
      direction:'rtl'
    }
  },
  components:{
    layout,
    headers
  },
  methods: {

  },
  mounted(){
    // var json: Array<object> = [{type:'basic'},{type:'layout',children:[{type:'basic',list:[{type:'basic'}]},{type:'basic',list:[{type:'basic'}]}]}]
    // console.log(createCode(json))
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>

