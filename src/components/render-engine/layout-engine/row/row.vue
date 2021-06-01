<template>
  <el-row>
    <el-col :span="12">
      <draggable id="g5" :group="group2" :list="comInformation.children[0].list" style="padding: 5px;border: 1px red dotted">
        <template v-slot:content>
          <template v-for="(item,index) in comInformation.children[0].list">
            <renderEngine :comInformation="item" class="draggable"></renderEngine>
          </template>
        </template>
      </draggable>
    </el-col>
    <el-col :span="12">
      <draggable id="g6" :group="group2" :list="comInformation.children[1].list">
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
  methods: {},
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

