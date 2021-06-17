<template>
  <el-row>
    <el-col :span="24/comInformation.children.length" v-for="item in comInformation.children">
      <draggable :list="item.list" class="render-col-border"></draggable>
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

    }
  },
  components: {},
  methods: {

  },
  mounted() {

  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">

</style>

