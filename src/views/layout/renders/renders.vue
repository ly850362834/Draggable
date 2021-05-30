<template>
  <draggable :id="'g2'" :onEnd="onEnd" :group="group2" :onAdd="onAdd"
             :list="list">
    <template v-slot:content>
      <template v-for="(item,index) in list">
        <renderEngine :list="list" :comInformation="item" class="draggable"></renderEngine>
      </template>
    </template>
  </draggable>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import renderEngine from '@/components/render-engine/index.vue'

export default defineComponent({
  name: 'render',
  props: {},
  data() {
    return {
      group3: {name: "itxst.com", pull: true, put: true},
      group2: {name: "itxst.com", pull: true, put: true},
      list: []
    }
  },
  components: {
    renderEngine
  },
  methods: {
    onEnd() {
      // console.log('拖动结束')
      // console.log('这是拖动结束')
    },
    onAdd(evt: any, type: any) {
     console.log(this.list)
    }
  },
  mounted() {

  },
  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>