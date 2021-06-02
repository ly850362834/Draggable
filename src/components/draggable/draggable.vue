<template>
  <div :id="renderId">
    <template v-if="views">
      <slot name="content">

      </slot>
    </template>
  </div>
</template>

<script lang="ts">
import Sortable from 'sortablejs';
import {defineComponent, PropType} from 'vue';
import {Store, useStore} from 'vuex'
import {State} from "@vue/runtime-core";


export default defineComponent({
  name: 'draggable',
  data(){
    return {
      views:true,
      renderId:`${new Date().valueOf()}`,
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
  created() {
    // this.renderId = new Date().valueOf();
  },
  methods: {
    //深复制对象|数组
    deepCopy(item: object | Array<any>){
      return JSON.parse(JSON.stringify(item));
    },
    // 获取组件内的绑定对象值
    getItemValue(evt: any){
      return JSON.parse(evt.item.attributes.comobj.value);
    },
    // 重新渲染当前视图更新
    viewUpdate(){
      this.views=false;
      this.$nextTick(()=>{
        this.views=true;
      })
    },
    // 删除新成的Dom元素 （sort框架会超出vue范围内生成一个dom）
    deleteNewDom(evt: any){
      evt.item.parentNode.removeChild(evt.item)
    },
    registerDom(){
      // 设置指代this
      const that = this;
      var g1: HTMLElement = document.getElementById(this.renderId) as HTMLElement;
      var opts: object = {
        animation: 0,
        draggable: ".draggable",
        group: this.group,
        fallbackOnBody:true,
        // 元素被选中
        onChoose: function (evt: any) {
          if (that.group.put) {
            let blackClassArr = document.getElementsByClassName('render-select-border');
            for (let i = 0;i<blackClassArr.length;i++) {
              blackClassArr[i].classList.remove('render-select-border')
            }
            evt.item.classList.add('render-select-border');
            (blackClassArr as any)=null;
          }
          that.$emit('onChoose',evt)
        },
        //拖动结束
        onEnd: function (evt: any) {
          that.$emit('onEnd',evt)
        },
        onMove: function (evt:any,originalEvent:any){
          // console.log(evt)
          // console.log(evt,originalEvent)
          that.$emit('onMove')
        },
        onRemove:function (evt: any){
          that.list.splice(evt.oldIndex,1);
          that.viewUpdate();
          // evt.item.parentNode.removeChild(evt.item)
        },
        // 元素从一个列表拖拽到另一个列表
        onAdd: function (evt: any,e: any) {
          // if (evt.pullMode!='clone') {
          let obj;
          try {
            obj=that.getItemValue(evt);
          } catch (err) {
            console.log(evt);
            console.log('组件没有绑定对象信息上面')
          }
          that.list.splice(evt.newIndex,0,obj);
          that.deleteNewDom(evt);
          that.viewUpdate();
          //此处必须异步操作 放在最后层级
          setTimeout(()=>{
            that.$emit('onAdd',evt);
          },0)
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
          let oldIndex = evt.oldIndex;
          let newIndex = evt.newIndex;
          let oldItem = that.deepCopy(that.list[oldIndex] as object | Array<any>);
          that.list.splice(oldIndex,1);
          that.list.splice(newIndex,0,oldItem);
          that.deleteNewDom(evt);
          that.viewUpdate();
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
