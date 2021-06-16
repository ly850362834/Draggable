<template>
  <draggable :list="list" :onChange="onChange"></draggable>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import eventBus from "@/assets/api/eventBus";
interface state{
  list?:Array<Object>,
}
export default defineComponent({
  name: 'render',
  props: {},
  data() {
    return {
      list:(this.$store.state as state).list,
    }
  },
  components: {

  },
  methods: {
    onChange(evt: any) {
      if (evt.added) {
        //添加comId
        !evt.added.element.comId?evt.added.element.comId=(new Date()).valueOf():null
      }
      // console.log(this.list,evt);
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