<template>
  <div :id="id">
    <template v-if="views">
      <slot name="content">

      </slot>
    </template>
  </div>
</template>

<script lang="ts">
import Sortable from 'sortablejs';
import {defineComponent, PropType} from 'vue';
import fa from "element-plus/packages/locale/lang/fa";

export default defineComponent({
  name: 'draggable',
  data(){
    return {
      views:true
    }
  },
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
    getItemValue(evt: any){
      return JSON.parse(evt.item.attributes.comobj.value);
    },
    viewUpdate(){
      this.views=false;
      this.$nextTick(()=>{
        this.views=true;
      })
    },
    deleteNewDom(evt: any){
      evt.item.parentNode.removeChild(evt.item)
    },
    // getArrDifference(arr1: Array<number | string>, arr2: Array<object>) {
    //   for (let i = 0;i<arr1.length;i++) {
    //
    //   }
    //   // return arr1.concat(arr2).filter(function (v, i, arr) {
    //   //   return arr.indexOf(v) === arr.lastIndexOf(v);
    //   // });
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
          // console.log(evt)
          // console.log(evt,originalEvent)
        },
        onRemove:function (evt: any){
          that.list.splice(evt.oldIndex,1);
          that.viewUpdate();
          // evt.item.parentNode.removeChild(evt.item)
        },
        // 元素从一个列表拖拽到另一个列表
        onAdd: function (evt: any,e: any) {
          // console.log(evt,'这是新增')
          // if (evt.pullMode!='clone') {
          let obj;
          try {
            obj=that.getItemValue(evt);
          } catch (err) {
            console.log(err)
          }
          that.list.splice(evt.newIndex,0,obj);
          that.deleteNewDom(evt);
          that.viewUpdate();
          const type = null;
          that.$emit('onAdd',evt,type);
          // console.log(evt)
          // 获取当前组件的类别
          // const type = evt.item.attributes.type.value;

          // 判断拖拽组件是发送端还是接收端
          // if (that.group.put) {
          //    let draggable = document.getElementById(that.id);
          //    if (draggable) {
          //      let clientX = evt.originalEvent.clientX;
          //      let clientY = evt.originalEvent.clientY;
          //      //获取元素四周坐标 用于下面判断元素坐落位置
          //      let clientRect = draggable.getBoundingClientRect();
          //      //如果在Pull范围内
          //      if (clientX>clientRect.left&&clientX<clientRect.right&&clientY>clientRect.top&&clientY<clientRect.bottom){
          //
          //      } else {
          //
          //      }
          //      // evt.item.parentNode.removeChild(evt.item)
          //      // console.log(draggable.getBoundingClientRect());
          //    }
          // }
        },
        // 列表内元素顺序更新的时候触发
        onUpdate: function (evt: any) {
          // console.log(evt,'这是排序更新');
          // let obj=JSON.parse(evt.item.attributes.comobj.value);
          // let newIndexObj = JSON.parse(JSON.stringify(that.list[evt.newIndex]));
          // that.list.splice(evt.newIndex,1,obj);
          // that.list.splice(evt.oldIndex,1,newIndexObj);
          // console.log(evt,'这是排序更新',that.list);
          [that.list[evt.oldIndex],that.list[evt.newIndex]]=[that.list[evt.newIndex],that.list[evt.oldIndex]];
          that.deleteNewDom(evt);
          that.viewUpdate();
          // that.$forceUpdate();
          // console.log(evt);
          // let list = JSON.parse(JSON.stringify((that.list)));
          // // [list[evt.oldIndex],list[evt.newIndex]]=[list[evt.newIndex],list[evt.oldIndex]];
          // // that.list. list;
          // that.list.splice(0,list.length);
          // console.log(that.list,list);
          // debugger
          // list.forEach((item: object)=>{
          //   that.list.push(item)
          // });
          // console.log(that.list,'这是列表元素排序触发')
          // that.list=that.list.concat(list);
          // [that.list[evt.oldIndex],that.list[evt.newIndex]]=[that.list[evt.newIndex],that.list[evt.oldIndex]];
          // console.log(that.list,'这是列表元素排序触发')
          that.$emit('onUpdate',evt);
        },
        // 开始拖拽的时候
        onStart: function (evt: any) {
          that.$emit('onStart',evt)
        },
        // 列表的任何更改都会触发
        onSort: function (evt:any) {
          //如果不是克隆添加类型
          // if (evt.clone.pullMode!='clone') {
          //
          // }
          // console.log(sortable.toArray(),that.list,evt);
          // console.log()
          // that.list.splice(0,1);
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
          // that.list.splice()
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
