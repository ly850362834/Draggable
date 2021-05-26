<template>
  <div class="components">
<!--    <div class="basic">-->
<!--      <h5>基础组件</h5>-->
<!--      <ul id="itxst1">-->
<!--        <li>-->
<!--          <div class="item" data-id="1">item 1</div>-->
<!--          <div class="item" data-id="2">item 2</div>-->
<!--          <div class="item" data-id="3">item 3</div>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <ul id="itxst2">-->
<!--        <li>-->
<!--          <div class="item" data-id="4">www.itxst.com</div>-->
<!--          <div class="item" data-id="5">www.google.com</div>-->
<!--          <div class="item" data-id="6">www.baidu.com</div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
    <div></div>
    <div></div>
    <div class="box">
      <draggable :id = "'g1'" :onEnd="onEnd">
        <template  v-slot:content>
          <div class="item" data-id="1">1item</div>
          <div class="item" data-id="2">2item</div>
          <div class="item" data-id="3">3item</div>
        </template>
      </draggable>
      <draggable :id = "'g2'" :onEnd="onEnd" :group="group2">
        <template v-slot:content>
          <div class="item" data-id="1">1item</div>
          <div class="item" data-id="2">2item</div>
          <div class="item" data-id="3">3item</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'components',
  props: {

  },
  data(){
    return {
      group2 : {name: "itxst.com", pull: 'clone', put: true}
    }
  },
  components:{

  },
  methods: {
    onEnd(){
      console.log('这是拖动结束')
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
.box {
}
.itxst {
  margin: 10px auto;
  width: 30%;
  float: left;
  margin-right: 10px;
}

.itxst div {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}
</style>
