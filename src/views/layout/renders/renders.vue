<template>
    <div>
      <draggable :id = "'g2'" :onEnd="onEnd" :group="group2" style="height: 300px;background: red" :onAdd="onAdd" :list="list">
        <template v-slot:content>
              <template v-for="(item,index) in list">
                <div v-if="item.children" style="padding: 5px" class="item">
<!--                  222-->
                  <draggable :id = "'g3'" :group="group3">
                    <template v-slot:content>
                        <div v-for="(citem,index) in item.children" style="background: aqua" class="item">
                          {{citem.name}}
                        </div>
                    </template>
                  </draggable>
                </div>
<!--                <draggable :id = "'g3'" v-else :group="group3">-->
<!--                  <template v-slot:content >-->
                  <div class="item" style="background: blanchedalmond" v-else>
                        {{item.name}}
                  </div>
<!--                  </template>-->
<!--                </draggable>-->
              </template>
          <div class="item" style="background: blanchedalmond">
            444
          </div>
          <div class="item" style="background: blanchedalmond">
            4555
          </div>
<!--        </template>-->
<!--          <div v-for="(item,index) in list" class="item" :data-id="item.name">-->
<!--            {{item.name}}-->
<!--            <template>-->
<!--              <div v-for="(citem) in item.children" class="item" :data-id="citem.name" style="margin-left: 10px">-->
<!--                    {{citem.name}}-->
<!--              </div>-->
<!--            </template>-->
<!--          </div>-->
        </template>
      </draggable>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
export default defineComponent({
  name: 'render',
  props: {

  },
  data(){
    return {
      group3: {name: "itxst.com", pull: true, put: true},
      group2 : {name: "itxst.com", pull: true, put: true},
      list:[{name:1,children:[{name:'1-1'},{name:'1-2'},{name:'1-3'}]},{name:2}]
    }
  },
  components:{

  },
  methods: {
    onEnd(){
      // console.log('拖动结束')
      // console.log('这是拖动结束')
    },
    onAdd(evt:any,type:any){
      // console.log(evt);
    }
  },
  mounted(){

  },
  setup() {
    return {};
  },
});
</script>

<style scoped>

</style>