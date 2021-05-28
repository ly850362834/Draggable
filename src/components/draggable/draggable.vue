<template>
  <div :id="id">
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
    list: {
      type: Array,
      default: () => ([])
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
    // getArrDifference(arr1: Array<number | string>, arr2: Array<object>) {
    //   return arr1.concat(arr2).filter(function (v, i, arr) {
    //     return arr.indexOf(v) === arr.lastIndexOf(v);
    //   });
    // },
    registerDom(){
      // 设置指代this
      const that = this;
      var g1: HTMLElement = document.getElementById(this.id) as HTMLElement;
      var opts: object = {
        animation: 0,
        draggable: ".item",
        group: this.group,
        fallbackOnBody:true,
        //拖动结束
        onEnd: function (evt: any) {
          that.$emit('onEnd',evt)
        },
        onMove: function (evt:any,originalEvent:any){
          // console.log(evt,originalEvent)
        },
        onRemove:function (evt: any){
          // evt.item.parentNode.removeChild(evt.item)
        },
        // 元素从一个列表拖拽到另一个列表
        onAdd: function (evt: any,e: any) {
          // console.log(evt)
          // 获取当前组件的类别
          // const type = evt.item.attributes.type.value;
          const type = null;
          // 判断拖拽组件是发送端还是接收端
          if (that.group.put) {
             let draggable = document.getElementById(that.id);
             if (draggable) {
               let clientX = evt.originalEvent.clientX;
               let clientY = evt.originalEvent.clientY;
               //获取元素四周坐标 用于下面判断元素坐落位置
               let clientRect = draggable.getBoundingClientRect();
               //如果在Pull范围内
               if (clientX>clientRect.left&&clientX<clientRect.right&&clientY>clientRect.top&&clientY<clientRect.bottom){

               } else {

               }
               // evt.item.parentNode.removeChild(evt.item)
               // console.log(draggable.getBoundingClientRect());
             }
          }
          that.$emit('onAdd',evt,type)
        },
        // 列表内元素顺序更新的时候触发
        onUpdate: function (evt: any) {
          console.log(evt)
          that.$emit('onUpdate',evt);
        },
        // 开始拖拽的时候
        onStart: function (evt: any) {
          that.$emit('onStart',evt)
        },
        // 列表的任何更改都会触发
        onSort: function (evt:any) {
          console.log(sortable.toArray(),that.list,evt);
          // function getArrDifference(arr1: array, arr2) {
          //   return arr1.concat(arr2).filter(function(v, i, arr) {
          //     return arr.indexOf(v) === arr.lastIndexOf(v);
          //   });
          // }
          // console.log(getArrDifference(arr1,arr2));
          // console.log(that.list,666)
        },
        // clone一个元素的时候触发
        onClone: function (evt: any) {
          that.$emit('onClone',evt)
        },
        // 拖拽元素改变位置的时候
        onChange: function(evt: any) {
          // console.log(that.list)
          that.$emit('onChange',evt)
        }
      }
      var ops1 = Object.assign(opts, this.sortableObj);
      var sortable = Sortable.create(g1, ops1);
    }
  },
  mounted(){
      this.registerDom();
  },
  setup() {
    return {};
  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
