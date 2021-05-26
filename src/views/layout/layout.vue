<template>
  <div class="layout">
    <el-row>
      <el-col :span="6">
        <div class="layout-components">
            <components></components>
        </div>
      </el-col>
      <el-col :span="12">
        <div>222</div>
      </el-col>
      <el-col :span="6">
        <div>333</div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import components from "@/views/layout/components/components.vue";

@Options({
  components: {
    components
  },
})
export default class Layout extends Vue {

}
</script>

<style scoped lang="less">

</style>