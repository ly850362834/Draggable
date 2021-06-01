<template>
  <el-row>
    <el-col :span="12">
      <draggable id="g5" :group="group2" :list="comInformation.children[0].list" class="render-col-border" @choose="choose">
        <template v-slot:content>
          <template v-for="(item,index) in comInformation.children[0].list">
            <renderEngine :comInformation="item" class="draggable"></renderEngine>
          </template>
        </template>
      </draggable>
    </el-col>
    <el-col :span="12">
      <draggable id="g6" :group="group2" :list="comInformation.children[1].list" class="render-col-border">
        <template v-slot:content>
          <template v-for="(item,index) in comInformation.children[1].list">
            <renderEngine :comInformation="item" class="draggable"></renderEngine>
          </template>
        </template>
      </draggable>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'components',
  props: {
    comInformation: {
      default: {
        type: '',
        name: '',
        label: '',
        children: []
      }
    }
  },
  data() {
    return {
      group2: {name: "itxst.com", pull: true, put: true},
    }
  },
  components: {},
  methods: {
    choose(evt: any){
      console.log(evt)
    }
  },
  mounted() {
    console.log()
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>

