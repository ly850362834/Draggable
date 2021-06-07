<template>
  <header class="header">
    <div class="header-action">
      <el-button type="primary" size="mini">生成Vue代码</el-button>
      <el-button type="primary" size="mini">预览代码</el-button>
      <el-button type="primary" size="mini" @click="seePage">预览页面</el-button>
    </div>
  </header>
  <el-drawer
      title="页面预览"
      v-model="drawer"
      :direction="direction"
      size="100%"
      destroy-on-close>
        <pageView></pageView>
  </el-drawer>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import pageView from "./pageView/pageView.vue"
export default defineComponent({
  name: 'components',
  props: {

  },
  data(){
    return {
      drawer:false as boolean,
      direction:'ttb' as string,
    }
  },
  components:{
    pageView
  },
  methods: {
    seePage(){
      interface state{
        mode?:'view'|'render',
        list?:Array<Object>,
      }
      (this.$store.state as state).mode='view';
      console.log((this.$store.state as state).list)
      this.drawer=!this.drawer;
    }
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