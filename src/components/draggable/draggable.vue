<template>
  <div :id="id" class="itxst">
    <slot name="content">

    </slot>
  </div>
</template>

<script lang="ts">
import Sortable from 'sortablejs';
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  name: 'draggable',
  props: {
    id: {
      type: String,
      required: true
    },
    sortableObj: {
      type: Object,
      required: false
    },
    group: {
      type: Object,
      required: false,
      default: () => ({
        name: "itxst.com", pull: 'clone', put: false
      })
    }
  },
  methods: {
    registerDom(){
      // 设置指代this
      const that = this;
      var g1: HTMLElement = document.getElementById(this.id) as HTMLElement;
      var opts: object = {
        animation: 0,
        draggable: ".item",
        group: this.group,
        //拖动结束
        onEnd: function (evt: any) {
          //获取拖动后的排序
          var arr = sortable.toArray();
          that.$emit('onEnd')
        },
        // 元素从一个列表拖拽到另一个列表
        onAdd: function (evt: any,e: any) {
          const type = evt.item.attributes.type.value;
          console.log(evt.item.attributes.type.value)
          that.$emit('onAdd',evt,type)
        },
        // 列表内元素顺序更新的时候触发
        onUpdate: function (evt: any) {
          that.$emit('onUpdate')
        },
        // 开始拖拽的时候
        onStart: function (evt: any) {
          that.$emit('onStart')
        },
      }
      var ops1 = Object.assign(opts, this.sortableObj);
      var sortable = Sortable.create(g1, ops1);
    }
  },
  mounted(){
      this.registerDom();
      console.log('执行')
  },
  setup() {
    return {};
  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
