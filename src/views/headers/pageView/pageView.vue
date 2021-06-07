<template>
    <views v-for="(item,index) in list" :comInformation="item" :key="index"></views>
</template>
<script lang="ts">
import views from '@/components/render-engine/views.vue'
import {defineComponent, PropType} from 'vue';
interface state{
  list?:Array<Object>,
}
export default defineComponent({
  name: 'components',
  props: {

  },
  data(){
    return {
      list:(this.$store.state as state).list,
    }
  },
  components:{
    views
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

