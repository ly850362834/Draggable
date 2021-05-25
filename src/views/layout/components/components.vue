<template>
  <div>
    components
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { basicsComponent } from "@/json/components/basics-components/index.ts"

@Options({
  components: {

  },
})
export default class Components extends Vue {
  created(){
    console.log(basicsComponent)
  }
}
</script>
